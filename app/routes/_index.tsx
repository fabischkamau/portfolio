import type { MetaFunction } from "@remix-run/node";
import HomeLayout from "~/layout/HomeLayout";
import javascriptImg from "~/images/javascript.svg";
import reactImg from "~/images/reaact.svg";
import remixImg from "~/images/remix.svg";
import tailwindImg from "~/images/Tailwind.svg";
import typescriptImg from "~/images/typescript.svg";
import postgressImg from "~/images/postgresql-logo-svgrepo-com.svg";
import neo4jImg from "~/images/neo4j-icon.svg";
import shadcnImg from "~/images/shadcn-ui-seeklogo.svg";
import { Link, json, useLoaderData } from "@remix-run/react";

import setuplight from "~/images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import BlogCard from "~/components/blogscard";
import ProjectsSection from "~/components/projectscard";
import { client } from "~/db/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Fabisch Kamau" },
    { name: "homepage", content: "Welcome to my portfolio" },
  ];
};

export async function loader() {
  return Promise.all([
    await client.article.findMany({
      take: 5,

      include: { author: { select: { profile: {} } }, categories: {} },
    }),
    await client.project.findMany({ take: 4 }),
  ]);
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <HomeLayout>
      <section
        id="hero"
        className="my-10 flex justify-between mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="space-y-5 ">
          <h2 className="font-bold text-4xl  text-gray-800">
            FullStack Developer and Remix Enthusiast
          </h2>
          <div>
            <p className=" text-gray-600 ">
              I’m Fabisch, a FullStack Developer with a focus on fullstack web
              development. I love building things with React and TypeScript. I’m
              currently very excited about{" "}
              <span>
                <Link
                  to="https://remix.run/"
                  className="text-sky-500"
                  target="_blank"
                >
                  Remix.run
                </Link>
              </span>
              . I’m also a big fan of{" "}
              <span>
                <Link
                  to="https://tailwindcss.com/"
                  className="text-sky-500"
                  target="_blank"
                >
                  Tailwind CSS
                </Link>
              </span>{" "}
              and{" "}
              <span>
                <Link
                  to="https://ui.shadcn.com/"
                  className="text-sky-500"
                  target="_blank"
                >
                  shadcn
                </Link>
                .
              </span>
            </p>
          </div>

          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            <img src={reactImg} alt="react" className="h-10" />
            <img src={javascriptImg} alt="javascript" className="h-10" />
            <img src={remixImg} alt="remix" className="h-10" />
            <img src={tailwindImg} alt="tailwind" className="h-10" />
            <img src={typescriptImg} alt="typescript" className="h-10" />
            <img src={shadcnImg} alt="shadcn" className="h-10" />
            <img src={neo4jImg} alt="neo4j" className="h-10" />
            <img src={postgressImg} alt="postgress" className="h-10" />
          </div>
        </div>
        <div className="w-full relative hidden lg:flex">
          <img
            src={setuplight}
            alt="setup"
            className="aspect-video rotate-3 rounded-xl shadow-xl flex "
            loading="lazy"
          />
        </div>
      </section>
      <section>
        <BlogCard
          data={loaderData[0].map((item) => {
            return {
              author: {
                fullName: item.author.profile?.fullName!,
                avatarUrl: item.author.profile?.avatarUrl!,
              },
              id: item.id,
              description: item.description,
              content: item.content,
              createdAt: item.createdAt,
              title: item.title,
              categories: item.categories.map((cat) => {
                return { id: cat.id, name: cat.name };
              }),
            };
          })}
        />
      </section>
      <ProjectsSection
        projects={loaderData[1].map((item) => {
          return {
            title: item.title,
            description: item.description,
            imageUrl: item.imgUrl,
            link: item.projectUlr,
          };
        })}
      />
    </HomeLayout>
  );
}
