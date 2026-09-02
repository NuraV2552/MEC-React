"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = ["All", "Residential", "Commercial", "Industrial", "Hospitality"]

const projects = [
  {
    id: 1,
    title: "Gold Crest Tower",
    category: "Residential",
    location: "Dubai Marina",
    image: "/GOLD_CREST_VIEW.png",
    description: "Residential building having 40 floors with good and prestigious creature on exterior ie fully by steel cladding.",
  },
  {
    id: 2,
    title: "Bolton University",
    category: "Commercial",
    location: "RAK Free Trade Zone Campus",
    image: "/Bolton_Uni.png",
    description: "Al Tareeqah Management in RAKIA campus and Proposed Bolton University in RAK Free Trade Zone Campus.",
  },
  {
    id: 3,
    title: "G+9 Building",
    category: "Commercial",
    location: "RAK Free Trade Zone Campus",
    image: "/G+9_Building.png",
    description: "An office building with inviting social spaces, which puts a positive impact on the overall working environment in terms of profitability and performance.",
  },
  {
    id: 4,
    title: "G+3P+15 Building",
    category: "Residential",
    location: "RAK Free Trade Zone Campus",
    image: "/G+3P+15_Building.png",
    description: "Contemporary architecture with a dynamic environment for residential building.",
  },
  {
    id: 5,
    title: "JK CEMENT WORKS",
    category: "Industrial",
    location: "RAK Free Trade Zone Campus",
    image: "/JK_CEMENT_WORKS.png",
    description: "Grey and White cement manufacturing unit in Fujairah. Total built-up area is ~53,000m2.",
  },
  {
    id: 6,
    title: "BMJ Industries",
    category: "Industrial",
    location: "RAK Free Trade Zone Campus",
    image: "/BMJ_Industries.jpg",
    description: "Tobacco manufacturing plant on a 106,000 sqm plot with 49,000 sqm of built-up area and an 8 MW connected power supply.",
  },
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col"
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}


