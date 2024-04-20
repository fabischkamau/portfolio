import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogCard from "~/components/blogscard";
import { client } from "~/db/db.server";
import HomeLayout from "~/layout/HomeLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Fabisch Blogs" },
    { name: "description", content: "My blog page" },
  ];
};

export async function loader() {
  return json(
    await client.article.findMany({
      take: 5,

      include: { author: { select: { profile: {} } }, categories: {} },
    })
  );
}

export default function index() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <HomeLayout>
      <BlogCard
        data={loaderData.map((item) => {
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
        heading="Blogs"
        description="Get to learn my experiences and thoghts in coding and lifestyle."
        className="flex flex-col items-center justify-center gap-y-10 mx-auto border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none "
      />
    </HomeLayout>
  );
}
