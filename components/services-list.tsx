"use client"

import { motion } from "framer-motion"
import { Building2, Zap, Flame, ClipboardList, Map, Construction } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Architecture",
    description:
      "Our architectural services blend creativity with functionality, delivering designs that inspire and perform. From conceptual design to detailed documentation, we create spaces that meet modern standards while respecting local context and regulations.",
    features: [
      "Conceptual & Schematic Design",
      "Design Development",
      "Construction Documentation",
      "Interior Design",
      "3D Visualization & Rendering",
    ],
    image: "/architecture.jpg",
  },
  {
    icon: Zap,
    title: "MEP Engineering",
    description:
      "We provide comprehensive Mechanical, Electrical, and Plumbing engineering solutions that optimize building performance, energy efficiency, and occupant comfort. Our designs integrate seamlessly with architectural intent.",
    features: [
      "HVAC System Design",
      "Electrical Distribution",
      "Plumbing & Drainage",
      "Fire Fighting Systems",
      "Energy Modeling & Optimization",
    ],
    image: "/mep-engineering.jpg",
  },
  {
    icon: Flame,
    title: "Fire Engineering",
    description:
      "Our fire engineering team delivers life safety solutions that protect people and property. We ensure full compliance with UAE Civil Defence requirements and international fire safety standards.",
    features: [
      "Fire Safety Strategy",
      "Smoke Control Systems",
      "Fire Detection & Alarm",
      "Sprinkler System Design",
      "Civil Defence Approvals",
    ],
    image: "/fire-engineering.jpg",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "From inception to handover, our project management services ensure your project is delivered on time, within budget, and to the highest quality standards. We coordinate all stakeholders for seamless execution.",
    features: [
      "Project Planning & Scheduling",
      "Cost Management",
      "Quality Assurance",
      "Risk Management",
      "Contract Administration",
    ],
    image: "/project-management.jpg",
  },
  {
    icon: Map,
    title: "Survey & Mapping",
    description:
      "Utilizing the latest surveying technology, we provide accurate data collection and mapping services essential for project planning, design, and construction monitoring.",
    features: [
      "Topographic Surveys",
      "Land & Property Surveys",
      "Construction Staking",
      "As-Built Documentation",
      "GIS Mapping Services",
    ],
    image: "/survey-and-mapping.png",
  },
  {
    icon: Construction,
    title: "Infrastructure & Roads",
    description:
      "Our civil engineering expertise extends to infrastructure and road design, ensuring durable, safe, and efficient transportation networks and utility systems.",
    features: [
      "Road & Highway Design",
      "Drainage & Stormwater",
      "Utility Infrastructure",
      "Traffic Engineering",
      "Site Development",
    ],
    image: "/infrastructure-and-roads.jpg",
  },
]

export function ServicesList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
