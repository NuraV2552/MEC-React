"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = ["All", "Residential", "Commercial", "Industrial", "Hospitality"]

const projects = [
  {
    id: 1,
    title: "Gold Crest Residences",
    category: "Residential",
    location: "Dubai Marina",
    image: "/GOLD_CREST_VIEW.png",
  },
  {
    id: 2,
    title: "Business Bay Tower",
    category: "Commercial",
    location: "Business Bay, Dubai",
    image: "/Bolton_Uni.png",
  }
]

const FALLBACK_IMAGE = "/placeholder.jpg"

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget
                      if (img.src.endsWith(FALLBACK_IMAGE)) return
                      img.src = FALLBACK_IMAGE
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-primary-foreground">{project.title}</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

