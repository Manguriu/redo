'use client'

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Job Tracker Dashboard",
    type: "Featured project",
    img: "/jobcheck.png",
    summary: "A modern job tracking system currently in progress",
    link: "https://jb-tracker-01-3n3i.vercel.app/",
    github: "https://github.com/Manguriu/Jb-tracker--01",
    tech: ["React", "Next.js", "Tailwind CSS", "ShadCn.ui"]
  },
  
  {
    title: "VehicleCheck",
    type: "Featured project",
    img: "/carChecker.png",
    summary: "A vehicle check system for crashed and salvage tittled vehicles",
    link: "https://car-titles-checker.vercel.app/",
    github: "https://github.com/Manguriu/car-titles-checker",
    tech: ["React", "Next.js", "Tailwind CSS", "ShadCn.ui"]
  },
  {
    title: "SmartPoultry Hub",
    type: "Featured project",
    img: "/smartP.png",
    summary: "A modern Poultry farm management system",
    link: "https://farm101-analytics-p.vercel.app/",
    github: "https://github.com/Manguriu/Farm101Analytics-P",
    tech: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "King Vac Car and House Rentals",
    type: "Featured project",
    img: "/vactuo.png",
    summary: "A modern car and rental website (in progress)",
    link: "https://vaca-turo.vercel.app/",
    github: "https://github.com/Manguriu/Vaca-Turo",
    tech: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Trio Store Website",
    type: "Featured project",
    img: "/triostore.png",
    summary: "A modern e-commerce website (under development)",
    link: "https://triotech-store-web.vercel.app/",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Shoe Store Web",
    type: "Featured project",
    img: "/shoes.png",
    summary: "Front-end page for a shoe e-commerce store",
    link: "https://store1-vert.vercel.app/",
    github: "https://github.com/Manguriu/store1",
    tech: ["React", "CSS"]
  },
  {
    title: "Movie Clone Web",
    type: "Featured project",
    img: "/movieclone.png",
    summary: "Front-end page for a Movie streaming website",
    link: "https://peaceful-sopapillas-a4cdca.netlify.app/",
    github: "https://github.com/Manguriu/HNGxy-movie-discovery-webApp",
    tech: ["React", "CSS"]
  },
  {
    title: "Image Gallery Website",
    type: "Featured project",
    img: "/Gallery.png",
    summary: "Front-end page for an image gallery",
    link: "https://gallery-2-nu.vercel.app/",
    github: "https://github.com/Manguriu/Gallery-2",
    tech: ["React", "CSS"]
  },
]

const ProjectCard = ({ project, setSelectedProject }) => {
  return (
    <motion.div
      layoutId={`card-${project.title}`}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
    >
      <div className="relative h-48 md:h-64">
        <Image
          src={project.img}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.summary}</p>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
            Learn More
          </Button>
          <div className="flex space-x-2">
            {project.github && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            )}
            <Button variant="ghost" size="sm" asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Visit Project</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, closeModal }) => {
  if (!project) return null

  return (
    <motion.div
      layoutId={`card-${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="absolute inset-0 bg-black bg-opacity-50"
      />
      <div className="bg-gray-800 rounded-lg overflow-hidden w-full max-w-2xl z-10">
        <div className="relative h-64">
          <Image
            src={project.img}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.summary}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="bg-cyan-600 text-white px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {project.github && (
              <Button variant="outline" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            )}
            <Button variant="outline" asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            closeModal={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

