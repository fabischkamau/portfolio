import HomePage from '@/components/home/home'
import { createFileRoute } from '@tanstack/react-router'
import {motion, AnimatePresence } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: App,
  head:()=>({
    meta: [
      {
        name:"Home",
        content: "Blog / Portfolio"
      },
      {
        title:"Fabisch Kamau"
      }
    ]
  })
})

function App() {
  return (
 <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
        
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          <HomePage />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}