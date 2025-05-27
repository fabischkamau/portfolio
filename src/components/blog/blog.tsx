"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Calendar,
  Search,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Heart,
  Eye,
  Clock,
  Tag,
  TrendingUp,
  BookOpen,
  Users,
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
import { mockBlogPosts } from "@/lib/mockdata";
import { useNavigate } from "@tanstack/react-router";

interface BlogPageProps {
  initialPosts: typeof mockBlogPosts;
  tags: string[];
  totalViews: number;
  totalLikes: number;
  totalComments: number;
}

export default function BlogPage({
  initialPosts,
  tags,
  totalViews,
  totalLikes,
  totalComments,
}: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPageNum] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 6;

  // Add "All" to tags if not already present
  const allTags = tags.includes("All") ? tags : ["All", ...tags];

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Get featured/popular posts
  const featuredPosts = initialPosts
    .sort((a, b) => b.views + b.likes - (a.views + a.likes))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            AI Insights Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into artificial intelligence, machine learning, and the
            future of intelligent systems
          </p>
        </motion.div>

        {/* Blog Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Blog Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                {initialPosts.length}
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center">
                <BookOpen size={12} className="mr-1" />
                Total Posts
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {totalViews.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center">
                <Eye size={12} className="mr-1" />
                Total Views
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {totalLikes.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center">
                <Heart size={12} className="mr-1" />
                Total Likes
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {totalComments}
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center">
                <Users size={12} className="mr-1" />
                Total Comments
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <TrendingUp className="text-orange-500 mr-2" size={24} />
              <h2 className="text-2xl font-bold text-white">Trending Posts</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={`featured-${post.id}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => navigate({ to: `/blog/${post.id}` })}
                >
                  <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 overflow-hidden">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-orange-500 text-white">
                          #{index + 1}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-sm line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center">
                          <Eye size={10} className="mr-1" />
                          {post.views}
                        </span>
                        <span className="flex items-center">
                          <Heart size={10} className="mr-1" />
                          {post.likes}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/40 backdrop-blur-md border-white/10 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={
                    selectedTag === tag
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      : "border-white/20 text-gray-300 hover:bg-white/10"
                  }
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() =>
                navigate({
                  to: `/blog/${post.id}`,
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
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-4 text-white text-sm">
                    <span className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {post.views}
                    </span>
                    <span className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle size={14} className="mr-1" />
                      {post.comments.length}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-white group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-green-500/30 text-green-400 text-xs"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {currentPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No posts found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("All");
                setCurrentPageNum(1);
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
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
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
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

        {/* Recently Updated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {initialPosts.slice(0, 2).map((post) => (
              <motion.div
                key={`recent-${post.id}`}
                whileHover={{ scale: 1.02 }}
                className="flex space-x-4 cursor-pointer p-4 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => navigate({ to: `/blog/${post.id}` })}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar size={12} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    <Clock size={12} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
