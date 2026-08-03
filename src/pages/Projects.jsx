import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code } from 'lucide-react'
import ProjectModal from '../components/ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

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
              onClick={() => setSelectedProject(project)}
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
                    <span className="px-2 py-1 text-xs rounded shrink-0 text-white bg-gradient-to-r from-primary-500 to-purple-600">
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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
