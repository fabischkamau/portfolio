import {
  ActionFunctionArgs,
  json,
  unstable_composeUploadHandlers,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { client } from "~/db/db.server";
import { getValidatedFormData, useRemixForm } from "remix-hook-form";
import {
  Link,
  useLoaderData,
  useLocation,
  useMatches,
  useSubmit,
} from "@remix-run/react";
import { useForm, Form } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { ArrowRight, Loader, X } from "lucide-react";
import { cn } from "~/utils/cssutils";
import { getSession } from "~/utils/sessions.server";
import { uploadImage } from "~/utils/cloudinary.server";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.boolean().default(false),
  projectUlr: yup.string().required(),
  image: yup
    .mixed()
    .required("You need to select an Image")
    .test("type", "Only Image Are Allowed", (value: any) => {
      return (
        value[0]?.type === "image/jpeg" ||
        value[0]?.type === "image/png" ||
        value[0]?.type === "image/gif"
      );
    }),
});

type FormData = yup.InferType<typeof schema>;

const resolver = yupResolver(schema);

export async function loader() {
  return json({
    projects: await client.project.findMany(),
    webUrl: process.env.WEB_URL,
  });
}

export interface Errors {
  image?: string;
  title?: string;
  description?: string;
  projectUrl?: string;
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const uploadHandler = unstable_composeUploadHandlers(
    async ({ name, data }) => {
      if (name !== "image") {
        return undefined;
      }

      const uploadedImage: any = await uploadImage(data);
      return uploadedImage?.secure_url;
    },
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const image = formData.get("image");
  if (!image) {
    return json({ error: "provide image" }, { status: 422 });
  }
  return json(image);
  //   const { data, errors } = await validateFormData(formData, resolver);
  //   if (errors) {
  //     return json(errors, { status: 422 });
  //   }

  //   return await client.project.create({
  //     data: {
  //       title: data.title,
  //       description: data.description,
  //       imgUrl: image.toString(),
  //       status: data.status,
  //       userId: session.get("userId")!,
  //       projectUlr: data.projectUlr,
  //     },
  //   });
}

export default function project() {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const { projects } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    control,
  } = useForm<FormData>({
    resolver,
  });
  const matches = useLocation();

  return (
    <div className=" w-full h-full p-10 flex flex-col gap-y-5">
      <section id="title" className="flex justify-between items-center">
        <h1 className="text-xl text-slate-800 dark:text-slate-100 font-semibold">
          Projects
        </h1>
        <div>
          <div>
            <button
              onClick={() => setIsOpen(!isopen)}
              className="p-2 bg-sky-500 text-sky-50 focus:outline-none hover:bg-sky-600 text-sm rounded-lg"
            >
              Add Project
            </button>
          </div>
          <Dialog
            open={isopen}
            onClose={setIsOpen}
            className="fixed inset-0 overflow-auto p-4 pt-[25vh]"
          >
            <Dialog.Overlay className="fixed inset-0 bg-slate-500/75" />
            <div className="relative mx-auto max-w-xl bg-white shadow-2xl dark:bg-slate-900 ring-1 ring-slate-950/5">
              <div className="p-4 text-slate-700">
                <div className=" text-center">
                  <h4 className="text-lg text-slate-900 dark:text-slate-100">
                    Add Project
                  </h4>
                </div>
                <Form
                  className="flex flex-col gap-y-3"
                  control={control}
                  onSubmit={async ({ formData }) => {
                    void fetch(`http://localhost:5173${matches.pathname}`, {
                      method: "post",
                      body: formData,
                    });
                  }}
                >
                  <div className="flex flex-col gap-y-3">
                    <label
                      htmlFor="name"
                      className="text-slate-600 dark:text-slate-300 text-sm font-semibold"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      {...register("title")}
                      placeholder="ecommerce"
                      aria-invalid={errors.title?.message ? true : false}
                      className="p-2 bg.-white peer aria-[invalid='true']:border-rose-600  rounded-lg dark:bg-inherit text-slate-700 text-sm dark:text-slate-100 focus:outline-none focus:ring-0 focus:border-sky-500 border-2 valid:border-slate-400"
                    />
                    <p className="mt-2 hidden peer-aria-[invalid='true']:flex text-rose-600 text-sm">
                      {errors.title?.message && errors.title.message}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label
                      htmlFor="description"
                      className="text-slate-600 dark:text-slate-300 text-sm font-semibold"
                    >
                      Description
                    </label>

                    <textarea
                      {...register("description")}
                      aria-invalid={errors.description?.message ? true : false}
                      placeholder="whta your project is all about"
                      className="p-2 bg.-white peer aria-[invalid='true']:border-rose-600  rounded-lg dark:bg-inherit text-slate-700 text-sm dark:text-slate-100 focus:outline-none focus:ring-0 focus:border-sky-500 border-2 valid:border-slate-400"
                    />
                    <p className="mt-2 hidden peer-aria-[invalid='true']:flex text-rose-600 text-sm">
                      {errors.description?.message &&
                        errors.description.message}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label
                      htmlFor="name"
                      className="text-slate-600 dark:text-slate-300 text-sm font-semibold"
                    >
                      Url
                    </label>

                    <input
                      type="text"
                      {...register("projectUlr")}
                      aria-invalid={errors.projectUlr?.message ? true : false}
                      placeholder="https://githuburl.com"
                      className="p-2 bg.-white peer aria-[invalid='true']:border-rose-600  rounded-lg dark:bg-inherit text-slate-700 text-sm dark:text-slate-100 focus:outline-none focus:ring-0 focus:border-sky-500 border-2 valid:border-slate-400"
                    />
                    <p className="mt-2 hidden peer-aria-[invalid='true']:flex text-rose-600 text-sm">
                      {errors.projectUlr?.message && errors.projectUlr.message}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label
                      htmlFor="name"
                      className="text-slate-600 dark:text-slate-300 text-sm font-semibold"
                    >
                      Image
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      {...register("image")}
                      aria-invalid={errors.image?.message ? true : false}
                      className="p-2 bg.-white peer aria-[invalid='true']:border-rose-600  rounded-lg dark:bg-inherit text-slate-700 text-sm dark:text-slate-100 focus:outline-none focus:ring-0 focus:border-sky-500 border-2 valid:border-slate-400"
                    />
                    <p className="mt-2 hidden peer-aria-[invalid='true']:flex text-rose-600 text-sm">
                      Image is required
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="p-2 bg-sky-500 text-sky-50 focus:outline-none hover:bg-sky-600 text-sm"
                  >
                    {isSubmitting ? (
                      <p className="flex items-center justify-center">
                        <Loader className="mr-2 size-5 animate-spin" />
                        please wait
                      </p>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </Form>
              </div>
            </div>
          </Dialog>
        </div>
      </section>
      <section id="projectsdata">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200"
          )}
        >
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg shadow-sm overflow-hidden mt-5 pt-10"
              >
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={project.id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline inline-flex gap-x-2"
                    >
                      <span>View Project</span>
                      <ArrowRight className="size-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available, create one</p>
          )}
        </div>
      </section>
    </div>
  );
}
