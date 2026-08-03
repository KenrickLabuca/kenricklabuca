import { motion } from 'framer-motion'
import { Github, ExternalLink, Code } from 'lucide-react'

export default function Projects() {
  // Hardcoded projects - no backend needed
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, and payment integration.',
      technologies: ['React', 'Laravel', 'MySQL'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'JavaScript'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      github_url: 'https://github.com/KenrickLabuca',
      live_url: 'https://example.com',
      featured: false,
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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                {project.image ? (
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <Code className="w-16 h-16 text-gray-400" />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
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
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}
