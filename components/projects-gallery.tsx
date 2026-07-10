"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = ["All", "Residential", "Commercial", "Industrial", "Hospitality"]

const projects = [
  {
    id: 1,
    title: "Marina Residences",
    category: "Residential",
    location: "Dubai Marina",
    image: "luxury residential tower Dubai Marina waterfront modern architecture",
  },
  {
    id: 2,
    title: "Business Bay Tower",
    category: "Commercial",
    location: "Business Bay, Dubai",
    image: "modern commercial office tower Dubai Business Bay glass facade",
  },
  {
    id: 3,
    title: "Al Quoz Industrial Complex",
    category: "Industrial",
    location: "Al Quoz, Dubai",
    image: "industrial warehouse facility modern Dubai Al Quoz",
  },
  {
    id: 4,
    title: "Palm Beach Resort",
    category: "Hospitality",
    location: "Palm Jumeirah",
    image: "luxury beach resort hotel Palm Jumeirah Dubai pool ocean",
  },
  {
    id: 5,
    title: "JVC Apartment Complex",
    category: "Residential",
    location: "Jumeirah Village Circle",
    image: "modern apartment building residential complex Dubai JVC",
  },
  {
    id: 6,
    title: "Downtown Office Park",
    category: "Commercial",
    location: "Downtown Dubai",
    image: "modern office park building Downtown Dubai corporate",
  },
  {
    id: 7,
    title: "Jebel Ali Warehouse",
    category: "Industrial",
    location: "Jebel Ali",
    image: "logistics warehouse industrial Jebel Ali free zone Dubai",
  },
  {
    id: 8,
    title: "Creek Boutique Hotel",
    category: "Hospitality",
    location: "Dubai Creek",
    image: "boutique hotel Dubai Creek heritage area modern design",
  },
]

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
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={`/.jpg?height=450&width=600&query=${encodeURIComponent(project.image)}`}
                    alt={project.title}
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
