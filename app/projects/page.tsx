import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGallery } from "@/components/projects-gallery"
import { CtaBanner } from "@/components/cta-banner"

export const metadata = {
  title: "Projects | Middle East Consultant LLC",
  description:
    "Explore our portfolio of completed projects across residential, commercial, industrial, and hospitality sectors.",
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ProjectsHero />
        <ProjectsGallery />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
