"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, Zap, Flame, ClipboardList, Map, Construction } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Architecture",
    description:
      "Innovative architectural designs that blend functionality with aesthetics, creating spaces that inspire.",
  },
  {
    icon: Zap,
    title: "MEP Engineering",
    description: "Comprehensive mechanical, electrical, and plumbing solutions for optimal building performance.",
  },
  {
    icon: Flame,
    title: "Fire Engineering",
    description: "Advanced fire safety systems and compliance solutions to protect lives and assets.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project delivery with precision, ensuring timelines and budgets are met.",
  },
  {
    icon: Map,
    title: "Survey & Mapping",
    description: "Accurate surveying and mapping services using the latest technology and methodologies.",
  },
  {
    icon: Construction,
    title: "Infrastructure & Roads",
    description: "Civil engineering expertise for roads, utilities, and public infrastructure projects.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Comprehensive engineering solutions tailored to meet the unique demands of each project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="/services">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-accent/50">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
