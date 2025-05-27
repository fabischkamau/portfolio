"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Share2,
  Eye,
  Code,
  ArrowLeft,
  Calendar,
  Clock,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "@tanstack/react-router";

// Types
type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  images: string[];
  client: string;
  duration: string;
  year: string;
  buildProcess: string[];
  challenges: string;
  results: string;
};

interface ProjectDetailPageProps {
  project: Project;
  allProjects: Project[];
  allTags: string[];
  allCategories: string[];
  projectId: number;
}

// Project Detail Page
export default function ProjectDetailPage({
  project,
  allProjects,
  allTags,
  allCategories,
  projectId,
}: ProjectDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Get related projects (same category or shared tech, different project)
  const relatedProjects = allProjects
    .filter(
      (p) =>
        p.id !== projectId &&
        (p.category === project.category ||
          p.tech.some((tech) => project.tech.includes(tech)))
    )
    .slice(0, 3);

  const handleBackClick = () => {
    navigate({ to: "/projects" });
  };

  const handleRelatedProjectClick = (relatedProjectId: number) => {
    navigate({
      to: "/projects/$projectId",
      params: { projectId: relatedProjectId.toString() },
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="text-gray-300 hover:cursor-pointer"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute bottom-8 left-8 right-8 z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          </div>

          {/* Image Gallery Navigation */}
          {project.images.length > 1 && (
            <div className="flex justify-center space-x-2 mb-8">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-purple-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-2"
          >
            <Card className="bg-black/40 backdrop-blur-md border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Build Process
                  </h3>
                  <div className="space-y-3">
                    {project.buildProcess.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                          {index + 1}
                        </div>
                        <p className="text-gray-300 flex-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Challenges & Solutions
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Results & Impact
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.results}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300"
                      >
                        <Code size={12} className="mr-1" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Images Gallery */}
            {project.images.length > 1 && (
              <Card className="bg-black/40 backdrop-blur-md border-white/10 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Project Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Eye className="text-white" size={24} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <Card className="bg-black/40 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Related Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {relatedProjects.map((relatedProject) => (
                      <motion.div
                        key={relatedProject.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
                        onClick={() =>
                          handleRelatedProjectClick(relatedProject.id)
                        }
                      >
                        <div className="relative h-24 rounded mb-3 overflow-hidden">
                          <img
                            src={relatedProject.images[0] || "/placeholder.svg"}
                            alt={relatedProject.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-white font-semibold mb-2 line-clamp-2">
                          {relatedProject.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {relatedProject.description}
                        </p>
                        <Badge
                          variant="outline"
                          className="text-xs bg-purple-500/20 border-purple-500/30 text-purple-300"
                        >
                          {relatedProject.category}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Project Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm flex items-center mb-1">
                    <Building size={14} className="mr-1" />
                    Client
                  </p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm flex items-center mb-1">
                    <Clock size={14} className="mr-1" />
                    Duration
                  </p>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm flex items-center mb-1">
                    <Calendar size={14} className="mr-1" />
                    Year
                  </p>
                  <p className="text-white font-medium">{project.year}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Category</p>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    {project.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Project Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  <ExternalLink className="mr-2" size={16} />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-gray-300 hover:bg-white/10"
                >
                  <Github className="mr-2" size={16} />
                  View Code
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-gray-300 hover:bg-white/10"
                >
                  <Share2 className="mr-2" size={16} />
                  Share Project
                </Button>
              </CardContent>
            </Card>

            {/* All Categories */}
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  All Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className={`
                        cursor-pointer transition-colors text-xs
                        ${
                          project.category === category
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50 text-purple-300"
                            : "bg-white/5 border-white/20 text-gray-400 hover:bg-white/10"
                        }
                      `}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Tech Tags */}
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  All Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`
                        cursor-pointer transition-colors text-xs
                        ${
                          project.tech.includes(tech)
                            ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/50 text-blue-300"
                            : "bg-white/5 border-white/20 text-gray-400 hover:bg-white/10"
                        }
                      `}
                    >
                      <Code size={10} className="mr-1" />
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
