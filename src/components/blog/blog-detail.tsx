"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Send,
  MessageCircle,
  Heart,
  Share2,
  Eye,
  Clock,
  Tag,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "@tanstack/react-router";

// Types
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  views: number;
  likes: number;
  comments: Array<{
    id: number;
    author: string;
    content: string;
    date: string;
    avatar?: string;
  }>;
};

interface BlogDetailPageProps {
  blog: BlogPost;
  allPosts: BlogPost[];
  allTags: string[];
  blogId: number;
}

// Blog Detail Page
export default function BlogDetailPage({
  blog,
  allPosts,
  allTags,
  blogId,
}: BlogDetailPageProps) {
  const [currentBlog, setCurrentBlog] = useState<BlogPost>(blog);
  const [newComment, setNewComment] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const navigate = useNavigate();

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmittingComment(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Add comment to blog (in real app, this would update the backend)
    const comment = {
      id: currentBlog.comments.length + 1,
      author: "You",
      content: newComment,
      date: new Date().toISOString().split("T")[0],
      avatar: "/placeholder.svg?height=40&width=40",
    };

    setCurrentBlog({
      ...currentBlog,
      comments: [...currentBlog.comments, comment],
    });

    setNewComment("");
    setIsSubmittingComment(false);
  };

  // Get related posts (same tags, different post)
  const relatedPosts = allPosts
    .filter(
      (post) =>
        post.id !== blogId &&
        post.tags.some((tag) => currentBlog.tags.includes(tag))
    )
    .slice(0, 3);

  const handleBackClick = () => {
    navigate({ to: "/blog" });
  };
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-4xl">
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
            className="text-gray-300  hover:cursor-pointer"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>
        </motion.div>

        {/* Hero Image with Fade Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-8"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <img
            src={currentBlog.image || "/placeholder.svg"}
            alt={currentBlog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Title and Meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {currentBlog.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {currentBlog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {new Date(currentBlog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center">
              <Clock size={16} className="mr-2" />
              {currentBlog.readTime}
            </span>
            <span className="flex items-center">
              <Eye size={16} className="mr-2" />
              {currentBlog.views} views
            </span>
            <span className="flex items-center">
              <Heart size={16} className="mr-2" />
              {currentBlog.likes} likes
            </span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            {currentBlog.excerpt}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <div
                className="prose prose-invert prose-lg max-w-none"
                style={{
                  color: "#e5e7eb",
                  lineHeight: "1.8",
                }}
              >
                <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                  {currentBlog.content}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Engagement Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-red-400"
                  >
                    <Heart size={20} className="mr-2" />
                    Like ({currentBlog.likes})
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    <Share2 size={20} className="mr-2" />
                    Share
                  </Button>
                </div>
                <div className="text-gray-400 text-sm">
                  By {currentBlog.author}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Related Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {relatedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <h3 className="text-white font-semibold mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* All Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">All Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`
                      cursor-pointer transition-colors
                      ${
                        currentBlog.tags.includes(tag)
                          ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/50 text-green-400"
                          : "bg-white/5 border-white/20 text-gray-400 hover:bg-white/10"
                      }
                    `}
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MessageCircle className="mr-2" size={24} />
                Comments ({currentBlog.comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder-gray-400 min-h-[100px]"
                />
                <Button
                  type="submit"
                  disabled={isSubmittingComment || !newComment.trim()}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                >
                  {isSubmittingComment ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="mr-2" size={16} />
                  )}
                  Post Comment
                </Button>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {currentBlog.comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <img
                        src={comment.avatar || "/placeholder.svg"}
                        alt={comment.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-white">
                            {comment.author}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {new Date(comment.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
