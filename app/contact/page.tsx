import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata = {
  title: "Contact | Middle East Consultant LLC",
  description:
    "Get in touch with Middle East Consultant LLC. Contact us for engineering consultancy services in the UAE.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ContactHero />
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
