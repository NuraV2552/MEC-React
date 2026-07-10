"use client"

import { motion } from "framer-motion"
import { Award, Users, ShieldCheck, Clock } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "20+ Years Experience",
    description: "Established in 2005, we bring nearly two decades of engineering expertise to every project.",
  },
  {
    icon: Users,
    title: "Expert Engineers",
    description: "Our team comprises highly qualified professionals with diverse specializations.",
  },
  {
    icon: ShieldCheck,
    title: "UAE Authority Compliance",
    description: "Full compliance with UAE regulations and building codes, ensuring smooth approvals.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Hundreds of successfully delivered projects across residential, commercial, and industrial sectors.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium mb-3"
            >
              Why MEC
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
            >
              Why Choose Middle East Consultant
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-muted-foreground text-lg leading-relaxed"
            >
              We combine technical excellence with deep regional expertise to deliver engineering solutions that stand
              the test of time. Our commitment to quality, compliance, and client satisfaction has made us a trusted
              partner for developers and contractors across the UAE and India.
            </motion.p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/modern-engineering-office-team-meeting-professiona.jpg" alt="MEC Engineering Team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm font-medium">Projects Completed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
