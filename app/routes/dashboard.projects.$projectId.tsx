import { Dialog } from "@headlessui/react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { ArrowRight, Link, Loader, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "~/db/db.server";
import { cn } from "~/utils/cssutils";

export async function loader({ params }: LoaderFunctionArgs) {
  const projectId = params.projectId;
  return json(await client.project.findUnique({ where: { id: projectId } }), {
    status: 200,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { _action, id, title, description, url } = Object.fromEntries(formData);

  if (_action === "delete") {
    return client.project
      .delete({
        where: {
          id: id.toString(),
        },
      })
      .then((data) => {
        return redirect("/dashboard/projects");
      });
  }
  if (_action === "update") {
    return client.project
      .update({
        where: { id: id.toString() },
        data: {
          title: title.toString(),
          description: description.toString(),
          projectUlr: url.toString(),
        },
      })
      .then((data) => {
        return redirect("/dashboard/projects");
      });
  }
  return {};
}

export default function project() {
  const loaderData = useLoaderData<typeof loader>();
  const [isopen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigation();
  const isSubmitting =
    navigate.state === "submitting" &&
    navigate.formData?.get("_action") === "update";

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
                  method="post"
                  encType="multipart/form-data"
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
                      name="title"
                      placeholder="ecommerce"
                      defaultValue={loaderData?.title && loaderData.title}
                      required
                      className="p-2 bg.-white peer focus:invalid:border-rose-600  rounded-lg dark:bg-inherit text-slate-700 text-sm dark:text-slate-100 focus:outline-none focus:ring-0 focus:border-sky-500 border-2 valid:border-slate-400"
                    />
                    <p className="mt-2 hidden peer-focus:invalid:flex text-rose-600 text-sm"></p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label
                      htmlFor="description"
                      className="text-slate-600 dark:text-slate-300 text-sm font-semibold"
                    >
                      Description
                    </label>

                    <textarea
                      name="description"
                      placeholder="what your project is all about"
                      defaultValue={
                        loaderData?.description && loaderData.description
                      }
                      required
                      className="p-2 bg.-white peer focus:invalid:border-rose-600  rounded-lg dark:bg-inherit text-slate-700 text-sm dark:text-slate-100 focus:outline-none focus:ring-0 focus:border-sky-500 border-2 valid:border-slate-400"
                    />
                    <p className="mt-2 hidden peer-focus:invalid:flex text-rose-600 text-sm"></p>
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
                      name="url"
                      defaultValue={
                        loaderData?.projectUlr && loaderData.projectUlr
                      }
                      required
                      placeholder="https://githuburl.com"
                      className="p-2 bg.-white peer focus:invalid:border-rose-600  rounded-lg dark:bg-inherit text-slate-700 text-sm dark:text-slate-100 focus:outline-none focus:ring-0 focus:border-sky-500 border-2 valid:border-slate-400"
                    />
                    <p className="mt-2 hidden peer-focus:invalid:flex text-rose-600 text-sm"></p>
                  </div>
                  <input type="hidden" name="id" value={loaderData?.id} />
                  <button
                    name="_action"
                    value="update"
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
          <div className="rounded-lg shadow-sm overflow-hidden mt-5  hover:border-2 hover:border-sky-500 cursor-pointer">
            <img
              src={loaderData?.imgUrl}
              alt={loaderData?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {loaderData?.title}
              </h2>
              <p className="text-gray-700 mb-4">{loaderData?.description}</p>
              <div className="flex items-center justify-between">
                <Form method="post">
                  <input type="hidden" name="id" value={loaderData?.id} />
                  <button
                    type="submit"
                    name="_action"
                    value="delete"
                    className="focus:outline-none"
                  >
                    <Trash2 className="text-rose-600 size-6" />
                  </button>
                </Form>
                <button
                  onClick={() => setIsOpen(!isopen)}
                  className="p-2 bg-sky-500 text-sky-50 focus:outline-none hover:bg-sky-600 text-sm rounded-lg"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
