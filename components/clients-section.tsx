"use client"

import { motion } from "framer-motion"

const clients = ["Emaar Properties", "DAMAC", "Nakheel", "Dubai Municipality", "ALDAR Properties", "Meraas"]

export function ClientsSection() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10"
        >
          Trusted by Leading Developers & Contractors
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
