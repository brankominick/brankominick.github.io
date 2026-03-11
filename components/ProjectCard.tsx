"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

const statusConfig = {
  complete: { label: "Complete", classes: "bg-emerald-900/60 text-emerald-300 border border-emerald-700/50" },
  "in-progress": { label: "In Progress", classes: "bg-amber-900/60 text-amber-300 border border-amber-700/50" },
  "coming-soon": { label: "Coming Soon", classes: "bg-blue-900/60 text-blue-300 border border-blue-700/50" },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const status = statusConfig[project.status];

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setModalOpen(true)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setModalOpen(true); }}
        className="group relative flex flex-col w-full text-left bg-gray-800/50 border border-gray-700/60
                   rounded-xl overflow-hidden cursor-pointer
                   hover:border-blue-500/50 hover:bg-gray-800/80
                   transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label={`View details for ${project.title}`}
      >
        {/* Image */}
        <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
          <img
            src={project.img}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              // Fallback placeholder if image missing
              const target = e.currentTarget;
              target.style.display = "none";
              target.parentElement!.classList.add("placeholder-bg");
            }}
          />
          {/* Subtle gradient overlay at bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 via-transparent to-transparent" />

          {/* Status badge — top right */}
          <span className={`absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full ${status.classes}`}>
            {status.label}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-lg font-semibold text-gray-100 leading-snug group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tech stack items*/}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded bg-gray-700/70 text-gray-300 border border-gray-600/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
