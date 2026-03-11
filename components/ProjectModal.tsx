"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const statusConfig = {
  complete: { label: "Complete", classes: "bg-emerald-900/60 text-emerald-300 border border-emerald-700/50" },
  "in-progress": { label: "In Progress", classes: "bg-amber-900/60 text-amber-300 border border-amber-700/50" },
  "coming-soon": { label: "Coming Soon", classes: "bg-blue-900/60 text-blue-300 border border-blue-700/50" },
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const status = statusConfig[project.status];

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/70 backdrop-blur-sm
                 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
                   bg-gray-900 border border-gray-700/80 rounded-2xl shadow-2xl
                   animate-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-lg
                     text-gray-400 hover:text-gray-100 hover:bg-gray-700/60
                     transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 2l14 14M16 2L2 16" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full aspect-video bg-gray-800 rounded-t-2xl overflow-hidden">
          <img
            src={project.img}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col gap-5">

          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-100 leading-tight">
              {project.title}
            </h2>
            <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full mt-0.5 ${status.classes}`}>
              {status.label}
            </span>
          </div>

          {/* Full description */}
          <p className="text-gray-300 leading-relaxed text-[0.95rem]">
            {project.fullDescription}
          </p>

          {/* Tech stack */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 rounded-lg bg-gray-800 text-gray-300 border border-gray-600/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.repoUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-gray-800 hover:bg-gray-700 border border-gray-600/60
                             text-sm text-gray-200 font-medium transition-colors"
                >
                  <GitHubIcon />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-blue-600 hover:bg-blue-500
                             text-sm text-white font-medium transition-colors"
                >
                  <ExternalLinkIcon />
                  Live Site
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
