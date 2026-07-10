import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ClientsSection } from "@/components/clients-section"
import { CtaBanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <ClientsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
