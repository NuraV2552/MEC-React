"use client"

import { motion } from "framer-motion"

export function ServicesHero() {
  return (
    <section className="relative py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent font-medium mb-4"
        >
          Our Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-primary-foreground max-w-3xl text-balance"
        >
          Comprehensive Engineering Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-primary-foreground/80 max-w-2xl"
        >
          From concept to completion, we provide end-to-end engineering services tailored to meet your unique project
          requirements.
        </motion.p>
      </div>
    </section>
  )
}
