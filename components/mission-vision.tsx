"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-border"
          >
            <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver innovative, sustainable, and cost-effective engineering solutions that exceed client
              expectations while adhering to the highest standards of quality, safety, and regulatory compliance. We
              strive to be the engineering partner of choice for projects across the Middle East.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card p-8 rounded-2xl border border-border"
          >
            <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as the leading multidisciplinary engineering consultancy in the Middle East, known for
              technical excellence, innovation, and sustainable practices. We envision shaping skylines and
              infrastructure that contribute to the region&apos;s continued growth and development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
