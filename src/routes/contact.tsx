import ContactPage from '@/components/contact/contaxt'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
    head:()=>({
    meta: [
      {
        name:"Contact",
        content: "Blog / Portfolio"
      },
      {
        title:"Contact - Fabisch Kamau"
      }
    ]
  })
})

function RouteComponent() {
  return <ContactPage />
}
