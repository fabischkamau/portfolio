"use client"

import { motion } from "framer-motion"
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  Brain,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Footer Component
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { label: "Projects", href: "#" },
      { label: "Blog", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
    topics: [
      { label: "AI Agents", href: "#" },
      { label: "Knowledge Graphs", href: "#" },
      { label: "RAG Systems", href: "#" },
      { label: "Machine Learning", href: "#" },
    ],
    connect: [
      { label: "GitHub", href: "#", icon: Github },
      { label: "LinkedIn", href: "#", icon: Linkedin },
      { label: "Twitter", href: "#", icon: Twitter },
      { label: "Email", href: "#", icon: Mail },
    ],
  }

  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              AI Explorer
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Exploring the frontiers of artificial intelligence, sharing insights, and building the future of
              intelligent systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400">
                <Brain size={12} className="mr-1" />
                AI Research
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400">
                <Network size={12} className="mr-1" />
                Innovation
              </Badge>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Topics</h3>
            <ul className="space-y-3">
              {footerLinks.topics.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3 mb-6">
              {footerLinks.connect.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Icon size={16} className="mr-2" />
                    {link.label}
                  </motion.a>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter email"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-400 text-sm"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <Send size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} AI Explorer. All rights reserved.</div>
            <div className="flex items-center space-x-6 text-sm">
              <motion.a href="#" className="text-gray-400 hover:text-white transition-colors" whileHover={{ y: -2 }}>
                Privacy Policy
              </motion.a>
              <motion.a href="#" className="text-gray-400 hover:text-white transition-colors" whileHover={{ y: -2 }}>
                Terms of Service
              </motion.a>
              <motion.a href="#" className="text-gray-400 hover:text-white transition-colors" whileHover={{ y: -2 }}>
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}