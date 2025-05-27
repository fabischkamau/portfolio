import ProjectDetailPage from "@/components/project/project-detail";
import { mockProjects } from "@/lib/mockdata";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Suspense } from "react";

// Define the loader return type
type LoaderData = {
  project: (typeof mockProjects)[0];
  allProjects: typeof mockProjects;
  allTags: string[];
  allCategories: string[];
  projectId: number;
};

export const Route = createFileRoute("/projects/$projectId")({
  component: RouteComponent,
  loader: ({ params }): LoaderData => {
    if (typeof params.projectId !== "string") {
      throw redirect({
        to: "/404",
      });
    }

    const projectId = Number(params.projectId);

    // Check if projectId is a valid number
    if (isNaN(projectId)) {
      throw redirect({
        to: "/404",
      });
    }

    const foundProject = mockProjects.find((p) => p.id === projectId);

    if (!foundProject) {
      throw redirect({
        to: "/404",
      });
    }

    // Get all unique tags from all projects
    const allTags = Array.from(
      new Set(mockProjects.flatMap((project) => project.tech))
    );

    // Get all unique categories from all projects
    const allCategories = Array.from(
      new Set(mockProjects.map((project) => project.category))
    );

    return {
      project: foundProject,
      allProjects: mockProjects,
      allTags,
      allCategories,
      projectId,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        name: "Home",
        content: "Projects / Portfolio",
      },
      {
        title: `${loaderData?.project.title} - Project Details`,
      },
      {
        name: "description",
        content: loaderData?.project.description,
      },
    ],
  }),
});

function RouteComponent() {
  const loaderData = Route.useLoaderData();

  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetailPage
        project={loaderData.project}
        allProjects={loaderData.allProjects}
        allTags={loaderData.allTags}
        allCategories={loaderData.allCategories}
        projectId={loaderData.projectId}
      />
    </Suspense>
  );
}

function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button Skeleton */}
        <div className="mb-6">
          <div className="h-10 w-32 bg-gray-700 rounded animate-pulse" />
        </div>

        {/* Hero Section Skeleton */}
        <div className="mb-12">
          {/* Hero Image Skeleton */}
          <div className="relative h-96 rounded-2xl bg-gray-800 animate-pulse mb-8" />

          {/* Image Gallery Navigation Skeleton */}
          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-gray-700 animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Content Skeleton */}
          <div className="md:col-span-2 space-y-8">
            {/* Project Overview Card Skeleton */}
            <div className="bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-8">
              <div className="h-8 bg-gray-700 rounded mb-6 animate-pulse" />
              <div className="space-y-6">
                {/* Build Process Skeleton */}
                <div>
                  <div className="h-6 w-32 bg-gray-700 rounded mb-3 animate-pulse" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse" />
                        <div className="h-4 bg-gray-700 rounded flex-1 animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Sections Skeleton */}
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div className="h-6 w-48 bg-gray-700 rounded mb-3 animate-pulse" />
                    <div className="space-y-2">
                      {[1, 2].map((j) => (
                        <div
                          key={j}
                          className="h-4 bg-gray-700 rounded animate-pulse"
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Tech Stack Skeleton */}
                <div>
                  <div className="h-6 w-40 bg-gray-700 rounded mb-3 animate-pulse" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-16 bg-gray-700 rounded animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Card Skeleton */}
            <div className="bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-8">
              <div className="h-6 w-32 bg-gray-700 rounded mb-6 animate-pulse" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-32 bg-gray-700 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Project Info Card Skeleton */}
            <div className="bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-6">
              <div className="h-6 w-24 bg-gray-700 rounded mb-4 animate-pulse" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}>
                    <div className="h-4 w-16 bg-gray-700 rounded mb-1 animate-pulse" />
                    <div className="h-5 w-24 bg-gray-700 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Links Card Skeleton */}
            <div className="bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-6">
              <div className="h-6 w-28 bg-gray-700 rounded mb-4 animate-pulse" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-gray-700 rounded animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
