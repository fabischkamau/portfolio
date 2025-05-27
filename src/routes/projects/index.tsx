import ProjectsPage from "@/components/project/project";
import { mockProjects } from "@/lib/mockdata";
import { createFileRoute } from "@tanstack/react-router";

// Define the loader return type
type LoaderData = {
  projects: typeof mockProjects;
  categories: string[];
  allTags: string[];
};

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
  loader: (): LoaderData => {
    // Get all unique categories from all projects
    const categories = Array.from(
      new Set(mockProjects.map((project) => project.category))
    );

    // Get all unique tags from all projects
    const allTags = Array.from(
      new Set(mockProjects.flatMap((project) => project.tech))
    );

    return {
      projects: mockProjects,
      categories,
      allTags,
    };
  },
  head: () => ({
    meta: [
      {
        name: "Home",
        content: "Projects / Portfolio",
      },
      {
        title: "Projects - Fabisch Kamau",
      },
      {
        name: "description",
        content:
          "Explore my collection of AI projects, from knowledge graphs to autonomous agents",
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
    <ProjectsPage
      initialProjects={loaderData.projects}
      categories={loaderData.categories}
      allTags={loaderData.allTags}
    />
  );
}
