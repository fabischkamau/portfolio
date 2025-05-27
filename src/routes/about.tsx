import AboutPage from '@/components/about/about'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
    head:()=>({
    meta: [
      {
        name:"About",
        content: "Blog / Portfolio"
      },
      {
        title:"About - Fabisch Kamau"
      }
    ]
  })
})

function RouteComponent() {
  return <AboutPage />
}
