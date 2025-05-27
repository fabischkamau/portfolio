import { mockBlogPosts, mockProjects } from "@/lib/mockdata";
import { Home, User, FolderOpen, BookOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

// Navigation Component
export default function Navigation({
  currentPage,
  currentBlogId,
  currentProjectId,
}: {
  currentPage: string;
  currentBlogId?: number;
  currentProjectId?: number;
}) {
  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/about", label: "About", icon: User },
    { id: "/projects", label: "Projects", icon: FolderOpen },
    { id: "/blog", label: "Blog", icon: BookOpen },
    { id: "/contact", label: "Contact", icon: Mail },
  ];

  const getPageTitle = () => {
    if (currentPage === "blog-detail" && currentBlogId) {
      const blog = mockBlogPosts.find((b) => b.id === currentBlogId);
      return blog?.title || "Blog Post";
    }
    if (currentPage === "project-detail" && currentProjectId) {
      const project = mockProjects.find((p) => p.id === currentProjectId);
      return project?.title || "Project";
    }
    return navItems.find((item) => item.id === currentPage)?.label || "Home";
  };

  const isDetailPage =
    currentPage === "blog-detail" || currentPage === "project-detail";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Fabisch K
            </motion.div>
          </Link>

          {/* Detail page title section */}
          {isDetailPage && (
            <div className="hidden md:flex items-center space-x-4 flex-1 justify-center mx-4">
              <span className="text-white font-medium max-w-md truncate">
                {getPageTitle()}
              </span>
            </div>
          )}

          {/* Regular navigation items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = !isDetailPage && currentPage === item.id;

              return (
                <Link to={item.id} key={item.id}>
                  <motion.button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </motion.button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            {!isDetailPage && (
              <div className="flex space-x-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;

                  return (
                    <Link to={item.id} key={item.id}>
                      <motion.button
                        className={`p-2 rounded-full ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={20} />
                      </motion.button>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
