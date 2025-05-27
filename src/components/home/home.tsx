import { mockBlogPosts, mockProjects } from "@/lib/mockdata"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, } from "@react-three/drei"
import AnimatedSphere from "../animated-sphere"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Heart,
  Eye,
  Clock,
  Tag,
  Brain,
  Network,
  Database,
} from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
export default function HomePage({
}) {
  const featuredProjects = mockProjects.filter((p) => p.featured).slice(0, 3)
  const featuredBlogs = mockBlogPosts.filter((b) => b.featured).slice(0, 3)

 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              AI Explorer
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Exploring the frontiers of AI, Knowledge Graphs, and Intelligent Systems. Sharing insights, projects, and
              the future of artificial intelligence.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Badge className="bg-gradient-to-r rounded-full from-blue-500 to-cyan-500 text-white px-4 py-2 text-sm">
                <Brain className="mr-2" size={16} />
                AI Agents
              </Badge>
              <Badge className="bg-gradient-to-r rounded-full from-green-500 to-emerald-500 text-white px-4 py-2 text-sm">
                <Network className="mr-2" size={16} />
                Knowledge Graphs
              </Badge>
              <Badge className="bg-gradient-to-r rounded-full from-purple-500 to-violet-500 text-white px-4 py-2 text-sm">
                <Database className="mr-2" size={16} />
                RAG Systems
              </Badge>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
               
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full"
                
              >
                Read Blog
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI projects that push the boundaries of what's possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                
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
                      <Badge className="bg-gradient-to-r rounded-full from-purple-500 to-pink-500 text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{project.shortDescription}</CardDescription>
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
                        <span className="px-2 py-1 text-xs text-gray-400">+{project.tech.length - 3} more</span>
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full"
             
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Featured Blog Posts Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep dives into AI, machine learning, and the future of intelligent systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              
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
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-4 text-white text-sm">
                      <span className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {blog.views}
                      </span>
                      <span className="flex items-center">
                        <Heart size={14} className="mr-1" />
                        {blog.likes}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(blog.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {blog.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-white group-hover:text-green-400 transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 line-clamp-3">{blog.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} className="border-green-500/30 text-green-400 text-xs">
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full"
              
            >
              Read All Posts
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}