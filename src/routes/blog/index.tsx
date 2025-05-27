import BlogPage from "@/components/blog/blog";
import { mockBlogPosts } from "@/lib/mockdata";
import { createFileRoute } from "@tanstack/react-router";

// Define the loader return type
type LoaderData = {
  posts: typeof mockBlogPosts;
  tags: string[];
  totalViews: number;
  totalLikes: number;
  totalComments: number;
};

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
  loader: (): LoaderData => {
    // Get all unique tags from all blog posts
    const tags = Array.from(
      new Set(mockBlogPosts.flatMap((post) => post.tags))
    );

    // Calculate blog statistics
    const totalViews = mockBlogPosts.reduce((sum, post) => sum + post.views, 0);
    const totalLikes = mockBlogPosts.reduce((sum, post) => sum + post.likes, 0);
    const totalComments = mockBlogPosts.reduce(
      (sum, post) => sum + post.comments.length,
      0
    );

    return {
      posts: mockBlogPosts,
      tags,
      totalViews,
      totalLikes,
      totalComments,
    };
  },
  head: () => ({
    meta: [
      {
        name: "Fabisch Kamau",
        content: "Blog / AI Insights",
      },
      {
        title: "Blogs - Fabisch Kamau",
      },
      {
        name: "keywords",
        content:
          "AI, Machine Learning, Artificial Intelligence, Blog, Tech Insights, Deep Learning",
      },
    ],
  }),
});

function RouteComponent() {
  const loaderData = Route.useLoaderData();

  return (
    <BlogPage
      initialPosts={loaderData.posts}
      tags={loaderData.tags}
      totalViews={loaderData.totalViews}
      totalLikes={loaderData.totalLikes}
      totalComments={loaderData.totalComments}
    />
  );
}
