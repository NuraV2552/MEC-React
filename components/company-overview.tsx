"use client"

import { motion } from "framer-motion"

export function CompanyOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/modern-engineering-consultancy-office-dubai-profes.jpg" alt="MEC Office" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-foreground"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Founded in 2005, Middle East Consultant LLC began with a vision to deliver world-class engineering
                consultancy services to the rapidly growing construction industry in the United Arab Emirates.
              </p>
              <p>
                Over nearly two decades, we have grown from a small team of dedicated engineers to a comprehensive
                multidisciplinary consultancy, serving clients across the UAE and expanding our operations to India.
              </p>
              <p>
                Our journey has been marked by a commitment to technical excellence, innovation, and unwavering
                dedication to client satisfaction. Today, we stand as a trusted partner for developers, contractors, and
                government entities across the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-accent">2005</div>
                <div className="text-sm text-muted-foreground mt-1">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Engineers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
