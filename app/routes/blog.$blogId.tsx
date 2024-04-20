import {
  LoaderFunctionArgs,
  json,
  redirect,
  MetaFunction,
} from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ChevronLeft } from "lucide-react";
import moment from "moment";

import { client } from "~/db/db.server";
import HomeLayout from "~/layout/HomeLayout";

export async function loader({ params }: LoaderFunctionArgs) {
  const blogId = params.blogId;
  if (!blogId) {
    return redirect("/blog");
  }
  return json({
    blog: await client.article.findUnique({
      where: {
        id: blogId,
      },
      include: { author: { select: { profile: {} } }, categories: {} },
    }),
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.blog?.title },
    { name: "article", content: data?.blog?.description },
  ];
};

export default function blogitem() {
  const navigate = useNavigate();
  const loaderData = useLoaderData<typeof loader>();
  return (
    <HomeLayout>
      <div className="space-y-5">
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="p-2 rounded-xl hover:bg-slate-300 bg-slate-100    flex items-center size-10"
          >
            <ChevronLeft className="size-7" />
          </button>
        </div>
        <section className="space-y-5">
          <div>
            <h3 className="text-gray-800 font-semibold text-3xl">
              {loaderData.blog?.title}
            </h3>
          </div>
          <div className="flex justify-between  items-center w-full ">
            <div className="relative  items-center gap-x-4">
              <img
                src={loaderData.blog?.author?.profile?.avatarUrl!}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <span className="absolute inset-0" />
                  {loaderData.blog?.author.profile?.fullName}
                </p>
                <p className="text-gray-600">Author, DE</p>
              </div>
            </div>
            <div>
              <time className="text-gray-500 ">
                {moment(loaderData.blog?.createdAt).format("MMM Do YYYY")}
              </time>
            </div>
          </div>
          <article
            className="prose prose-sm prose-gray prose-a:text-sky-500 prose-img:rounded-lg prose-img:aspect-square lg:prose-img:aspect-video lg:prose-base w-full max-w-7xl border-t border-gray-300 pt-5"
            dangerouslySetInnerHTML={{ __html: loaderData.blog?.content! }}
          />
        </section>
      </div>
    </HomeLayout>
  );
}
