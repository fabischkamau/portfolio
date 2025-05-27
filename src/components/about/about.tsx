import { motion } from "framer-motion"

import {
  Users,

  Zap,
  Brain,
  Network,
  Database,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const journeySteps = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started my journey in computer science, fascinated by the potential of artificial intelligence",
      icon: Zap,
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "2020",
      title: "Deep Learning Dive",
      description: "Immersed myself in neural networks and deep learning, building my first AI models",
      icon: Brain,
      color: "from-purple-400 to-purple-600",
    },
    {
      year: "2022",
      title: "Enterprise AI",
      description: "Joined a leading tech company, working on large-scale AI systems and knowledge graphs",
      icon: Network,
      color: "from-green-400 to-green-600",
    },
    {
      year: "2023",
      title: "RAG Revolution",
      description: "Pioneered RAG implementations, combining retrieval systems with generative AI",
      icon: Database,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      year: "2024",
      title: "AI Agents Era",
      description: "Leading development of autonomous AI agents and multi-agent systems",
      icon: Users,
      color: "from-pink-400 to-pink-600",
    },
  ]

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
            My Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From curious student to AI innovator - exploring the evolution of artificial intelligence and my role in
            shaping its future
          </p>
        </motion.div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Passion for AI Innovation
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm passionate about pushing the boundaries of what's possible with artificial intelligence. My focus
                  lies in creating intelligent systems that can understand, reason, and collaborate with humans to solve
                  complex problems.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Specializing in AI agents, knowledge graphs, and RAG systems, I believe in building transparent,
                  explainable AI that enhances human capabilities rather than replacing them.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through this platform, I share my discoveries, experiments, and insights as we navigate the exciting
                  frontier of artificial intelligence together.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/1280/900" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-md rounded-lg p-4">
                  <p className="text-white font-medium">Currently working on:</p>
                  <p className="text-purple-300">Next-generation AI agent frameworks</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Career Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full" />

            {journeySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <Card className="bg-black/40 backdrop-blur-md border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${step.color} mr-3`}>
                            <Icon className="text-white" size={20} />
                          </div>
                          <span className="text-2xl font-bold text-white">{step.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-purple-500 z-10" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md border-purple-500/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Current Focus
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                I'm currently exploring the intersection of large language models and knowledge graphs, building systems
                that can reason about complex relationships and provide explainable AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                  Multi-Agent Systems
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                  Knowledge Graph RAG
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2">
                  Explainable AI
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2">AI Safety</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
