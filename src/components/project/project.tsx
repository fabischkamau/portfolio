import { useState } from "react";
import { motion } from "framer-motion";

import {
  Github,
  ExternalLink,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockProjects } from "@/lib/mockdata";
import { useNavigate } from "@tanstack/react-router";

interface ProjectsPageProps {
  initialProjects: typeof mockProjects;
  categories: string[];
  allTags: string[];
}

export default function ProjectsPage({
  initialProjects,
  categories,
  allTags,
}: ProjectsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPageNum] = useState(1);
  const navigate = useNavigate();
  const projectsPerPage = 6;

  // Add "All" to categories if not already present
  const allCategories = categories.includes("All")
    ? categories
    : ["All", ...categories];

  const filteredProjects = initialProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <div className="min-h-screen pt-24 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my collection of AI projects, from knowledge graphs to
            autonomous agents
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/40 backdrop-blur-md border-white/10 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "border-white/20 text-gray-300 hover:bg-white/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() =>
                navigate({
                  to: `/projects/${project.id}`,
                })
              }
            >
              <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-purple-500 hover:bg-purple-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle external link click
                      }}
                    >
                      <ExternalLink size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle GitHub link click
                      }}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {currentProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No projects found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setCurrentPageNum(1);
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center items-center space-x-4"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPageNum(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-white/20 text-gray-300 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPageNum(page)}
                    className={
                      currentPage === page
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "border-white/20 text-gray-300 hover:bg-white/10"
                    }
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPageNum(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="border-white/20 text-gray-300 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </motion.div>
        )}

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Portfolio Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {initialProjects.length}
              </div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                {categories.length}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {allTags.length}
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {filteredProjects.length}
              </div>
              <div className="text-gray-400 text-sm">Filtered Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
