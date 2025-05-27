import BlogDetailPage from "@/components/blog/blog-detail";
import { mockBlogPosts } from "@/lib/mockdata";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Suspense } from "react";

// Define the loader return type
type LoaderData = {
  blog: (typeof mockBlogPosts)[0];
  allPosts: typeof mockBlogPosts;
  allTags: string[];
  blogId: number;
};

export const Route = createFileRoute("/blog/$blogId")({
  component: RouteComponent,
  loader: ({ params }): LoaderData => {
    if (typeof params.blogId !== "string") {
      throw redirect({
        to: "/404",
      });
    }

    const blogId = Number(params.blogId);

    // Check if blogId is a valid number
    if (isNaN(blogId)) {
      throw redirect({
        to: "/404",
      });
    }

    const foundBlog = mockBlogPosts.find((b) => b.id === blogId);

    if (!foundBlog) {
      throw redirect({
        to: "/404",
      });
    }

    // Get all unique tags from all posts
    const allTags = Array.from(
      new Set(mockBlogPosts.flatMap((post) => post.tags))
    );

    return {
      blog: foundBlog,
      allPosts: mockBlogPosts,
      allTags,
      blogId,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        name: "Home",
        content: "Blog / Portfolio",
      },
      {
        title: `${loaderData?.blog.title}`,
      },
    ],
  }),
});

function RouteComponent() {
  const loaderData = Route.useLoaderData();

  return (
    <Suspense fallback={<BlogDetailSkeleton />}>
      <BlogDetailPage
        blog={loaderData.blog}
        allPosts={loaderData.allPosts}
        allTags={loaderData.allTags}
        blogId={loaderData.blogId}
      />
    </Suspense>
  );
}

function BlogDetailSkeleton() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Image Skeleton */}
        <div className="relative h-96 rounded-2xl bg-gray-800 animate-pulse mb-8" />

        {/* Title and Meta Skeleton */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-6 w-16 bg-gray-700 rounded animate-pulse"
              />
            ))}
          </div>
          <div className="h-12 bg-gray-700 rounded mb-6 animate-pulse" />
          <div className="flex gap-6 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-4 w-20 bg-gray-700 rounded animate-pulse"
              />
            ))}
          </div>
          <div className="h-6 bg-gray-700 rounded animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <div className="mb-12">
          <div className="bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-8">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-700 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
