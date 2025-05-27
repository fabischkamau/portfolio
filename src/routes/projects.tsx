import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: "Projects",
        content: "Blog / Portfolio",
      },
      {
        title: "Projects - Fabisch Kamau",
      },
    ],
  }),
});

function RouteComponent() {
  return <Outlet />;
}
