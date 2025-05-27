import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/404")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="min-h-screen pt-24 px-4">Hello "/404"!</div>;
}
