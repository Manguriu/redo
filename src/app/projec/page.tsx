/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Job Tracker Dashboard",
    img: "/jobcheck.png",
    summary: "A modern job tracking system currently in progress",
    link: "https://jb-tracker-01-3n3i.vercel.app/",
    github: "https://github.com/Manguriu/Jb-tracker--01",
    tech: ["React", "Next.js", "Tailwind CSS", "ShadCn.ui"],
    status: "Start up",
  },

  {
    id: 2,
    title: "VehicleCheck",
    img: "/carChecker.png",
    summary: "A vehicle check system for crashed and salvage tittled vehicles",
    link: "https://car-titles-checker.vercel.app/",
    github: "https://github.com/Manguriu/car-titles-checker",
    tech: ["React", "Next.js", "Tailwind CSS", "ShadCn.ui"],
    status: "Start up",
  },
  {
    id: 3,
    title: "SmartPoultry Hub",
    img: "/smartP.png",
    summary: "A modern Poultry farm management system",
    link: "https://farm101-analytics-p.vercel.app/",
    github: "https://github.com/Manguriu/Farm101Analytics-P",
    tech: ["React", "Next.js", "Tailwind CSS"],
    status: "Pending",
  },
  {
    id: 4,
    title: "King Vac Car and House Rentals",
    img: "/vactuo.png",
    summary: "A modern car and rental website (in progress)",
    link: "https://vaca-turo.vercel.app/",
    github: "https://github.com/Manguriu/Vaca-Turo",
    tech: ["React", "Next.js", "Tailwind CSS"],
    status: "Pending",
  },
  {
    id: 5,
    title: "Trio Store Website",
    img: "/triostore.png",
    summary: "A modern e-commerce website (under development)",
    link: "https://triotech-store-web.vercel.app/",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS"],
    status: "Pending",
  },
  {
    id: 6,
    title: "Shoe Store Web",
    img: "/shoes.png",
    summary: "Front-end page for a shoe e-commerce store",
    link: "https://store1-vert.vercel.app/",
    github: "https://github.com/Manguriu/store1",
    tech: ["React", "Tailwind CSS"],
    status: "Complete",
  },
  {
    id: 7,
    title: "Movie Clone Web",
    img: "/movieclone.png",
    summary: "Front-end page for a Movie streaming website",
    link: "https://peaceful-sopapillas-a4cdca.netlify.app/",
    github: "https://github.com/Manguriu/HNGxy-movie-discovery-webApp",
    tech: ["React", "Tailwind CSS"],
    status: "Complete",
  },
  {
    id: 8,
    title: "Image Gallery Website",
    img: "/Gallery.png",
    summary: "Front-end page for an image gallery",
    link: "https://gallery-2-nu.vercel.app/",
    github: "https://github.com/Manguriu/Gallery-2",
    tech: ["React", "Tailwind CSS"],
    status: "Complete",
  },
];

const analyticsData = [
  {
    id: 1,
    title: "Kwanza Tukule Analysis",
    img: "/kwanza tukule.png",
    summary: "A data analysis project assessing food security initiatives.",
    link: "https://github.com/Manguriu/daata101",
    github: "https://github.com/Manguriu/daata101",
    tech: ["Python"],
    status: "Complete",
  },
  {
    id: 2,
    title: "Kwanza Tukule Analysis",
    img: "/kwanza tukule.png",
    summary: "A data analysis project assessing food security initiatives.",
    link: "https://colab.research.google.com/drive/1Zkz_Kjs7ZeroVcJTDUU9Xc6kgk2S6mqQ?usp=sharing",
    github: "https://github.com/Manguriu/daata101",
    tech: ["Python"],
    status: "Complete",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="Coding Projects" className="space-y-4">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger
            value="Coding Projects"
            className="text-white bg-cyan-500 p-2"
          >
            Coding Projects
          </TabsTrigger>
          <TabsTrigger
            value="Data Science"
            className="text-white bg-cyan-500 p-2"
          >
            Data Science Projects
          </TabsTrigger>
        </TabsList>

        {/* Coding Projects Tab */}
        <TabsContent value="Coding Projects">
          <ProjectGrid data={projects} category="Coding Projects" />
        </TabsContent>

        {/* Data Science Projects Tab */}
        <TabsContent value="Data Science">
          <ProjectGrid data={analyticsData} category="Data Science" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const ProjectGrid = ({ data, category }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.div
      key={category}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto"
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {selectedProjects.map((project) => (
          <Card
            key={project.id}
            className="bg-gradient-to-br from-gray-100 to-gray-100 text-gray-900 shadow-lg"
          >
            <CardHeader>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="flex items-center justify-between mt-2">
                <CardTitle className="mt-2 text-lg font-semibold">
                  {project.title}
                </CardTitle>
                <div
                  className={`p-2 rounded-md font-semibold text-sm w-auto ${
                    project.status === "Pending"
                      ? "bg-red-400 text-gray-900"
                      : project.status === "Complete"
                      ? "bg-green-100 text-green-600"
                      : project.status === "Start up"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {project.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 text-sm">{project.summary}</p>
              <div className="flex flex-wrap mt-1 gap-2">
                {project.tech.map((tech, index) => (
                  <Badge key={index} className="bg-blue-600 text-white p-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline"
              >
                GitHub
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className={
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page)}
                  className={
                    page === currentPage ? "bg-cyan-500 text-white p-2" : ""
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </motion.div>
  );
};
