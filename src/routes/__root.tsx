import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import {
  HeadContent,
  Outlet,
  createRootRoute,
  useLocation,
  useParams,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  preload: true,
  component: () => {
    const pathname = useLocation({
      select: (location) => location.pathname,
    });

    // Get route params to extract blogId if we're on a blog detail page
    const params = useParams({ from: "__root__" });

    // Determine current page type and extract IDs
    let currentPage = pathname;
    let currentBlogId: number | undefined;
    let currentProjectId: number | undefined;

    // Check if we're on a blog detail page
    if (pathname.startsWith("/blog/") && pathname !== "/blog") {
      currentPage = "blog-detail";
      const blogIdMatch = pathname.match(/\/blog\/(\d+)/);
      if (blogIdMatch) {
        currentBlogId = parseInt(blogIdMatch[1]);
      }
    }

    // Check if we're on a project detail page (if you have similar routing)
    if (pathname.startsWith("/projects/") && pathname !== "/projects") {
      currentPage = "project-detail";
      const projectIdMatch = pathname.match(/\/projects\/(\d+)/);
      if (projectIdMatch) {
        currentProjectId = parseInt(projectIdMatch[1]);
      }
    }

    console.log("Current page:", currentPage, "Blog ID:", currentBlogId);

    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto font-poppins w-full">
        {/* Background gradient */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-3/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Navigation with proper props */}
        <Navigation
          currentPage={currentPage}
          currentBlogId={currentBlogId}
          currentProjectId={currentProjectId}
        />

        {/* Content with proper z-index for text selection */}
        <div className="bg-black">
          <HeadContent />
          <Outlet />
        </div>

        <Footer />
        <TanStackRouterDevtools />
      </div>
    );
  },
});
