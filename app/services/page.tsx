import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { CtaBanner } from "@/components/cta-banner"

export const metadata = {
  title: "Services | Middle East Consultant LLC",
  description:
    "Explore our comprehensive engineering services including Architecture, MEP Engineering, Fire Engineering, Project Management, Survey & Mapping, and Infrastructure.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServicesHero />
        <ServicesList />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
