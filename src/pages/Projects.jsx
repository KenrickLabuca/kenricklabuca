import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectImageIndex, setProjectImageIndex] = useState(0)

  // Hardcoded projects - no backend needed
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
      details: 'Built from scratch as a personal brand site with a responsive layout, animated sections, dark mode, and a clean project showcase. Focused on performance, accessibility, and a polished UI that works well on mobile and desktop.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: true,
      images: [
        '/images/Highest_number_of_conversion.png',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      ],
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, and payment integration.',
      details: 'A complete shopping experience with product catalog, cart flow, secure authentication, and admin tools for managing inventory. Designed for scalable product data and a smooth checkout path.',
      technologies: ['React', 'Laravel', 'MySQL'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: true,
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      ],
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      details: 'Team-focused task boards with realtime sync, status tracking, and collaboration features so members can assign work, update progress, and stay aligned without friction.',
      technologies: ['React', 'Firebase', 'JavaScript'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: false,
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      ],
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
      details: 'A weather dashboard that pulls live forecast data, supports location search, and visualizes conditions with charts so users can quickly understand trends and plan ahead.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: false,
      images: [
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      ],
    },
  ]

  const openProject = (project) => {
    setSelectedProject(project)
    setProjectImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setProjectImageIndex(0)
  }

  useEffect(() => {
    if (!selectedProject) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeProject()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedProject])

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openProject(project)}
              className="text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center overflow-hidden">
                {project.images?.[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Code className="w-16 h-16 text-white" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded shrink-0">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github_url && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github_url, '_blank', 'noopener,noreferrer')
                      }}
                      className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </span>
                  )}
                  {project.live_url && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.live_url, '_blank', 'noopener,noreferrer')
                      }}
                      className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative bg-gray-100 dark:bg-gray-800">
                <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
                  {selectedProject.images?.length ? (
                    <img
                      key={projectImageIndex}
                      src={selectedProject.images[projectImageIndex]}
                      alt={`${selectedProject.title} screenshot ${projectImageIndex + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <Code className="w-20 h-20 text-gray-400" />
                  )}
                </div>

                {selectedProject.images?.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setProjectImageIndex(
                          (prev) =>
                            (prev - 1 + selectedProject.images.length) %
                            selectedProject.images.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setProjectImageIndex(
                          (prev) => (prev + 1) % selectedProject.images.length
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {selectedProject.images?.length > 1 && (
                  <div className="flex gap-2 justify-center p-3 overflow-x-auto">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setProjectImageIndex(index)}
                        className={`h-14 w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          index === projectImageIndex
                            ? 'border-primary-500'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.featured && (
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded shrink-0 mt-2">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                {selectedProject.details && (
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.details}
                  </p>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.github_url && (
                    <a
                      href={selectedProject.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.live_url && (
                    <a
                      href={selectedProject.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
