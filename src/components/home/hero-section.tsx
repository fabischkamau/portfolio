import Layover from '../layover'
import Spline from '@splinetool/react-spline'
import { Button } from '../ui/button'
export default function HeroSection() {
  return (
    <Layover>
      <section className="flex justify-between w-full flex-col  lg:flex-row-reverse gap-5 lg:py-16">
        <Spline
          className="h-full"
          scene="https://prod.spline.design/Rm6k4pIvWIQa5jxJ/scene.splinecode"
        />
        <div className="w-full  text-center">
          <h1 className="text-2xl md:text-6xl  font-bold mb-6 text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Fabisch Kamau
            </span>
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed ">
            I explore the intersection of artificial intelligence and knowledge
            representation through hands-on projects and practical insights. My
            focus spans AI systems, knowledge graphs, and graph
            databases—technologies that transform how we connect, understand,
            and leverage information.
          </p>

          <div className=" flex gap-5 items-center">
            <Button variant="cosmic">View My Work</Button>
            <Button variant="cosmic" outline glow>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </Layover>
  )
}
