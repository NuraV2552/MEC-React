import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyOverview } from "@/components/company-overview"
import { MissionVision } from "@/components/mission-vision"
import { CtaBanner } from "@/components/cta-banner"

export const metadata = {
  title: "About Us | Middle East Consultant LLC",
  description:
    "Learn about Middle East Consultant LLC - a leading engineering consultancy established in 2005, delivering excellence in the UAE and beyond.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <AboutHero />
        <CompanyOverview />
        <MissionVision />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
