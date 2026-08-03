import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code, ExternalLink, Github, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0)
  const images = project?.images || []
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    setImageIndex(0)
  }, [project?.id])

  useEffect(() => {
    if (!project) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (!hasMultipleImages) return
      if (e.key === 'ArrowLeft') {
        setImageIndex((prev) => (prev - 1 + images.length) % images.length)
      }
      if (e.key === 'ArrowRight') {
        setImageIndex((prev) => (prev + 1) % images.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose, hasMultipleImages, images.length])

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-white dark:bg-gray-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-purple-600 z-20" />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid lg:grid-cols-2 max-h-[92vh] overflow-y-auto lg:overflow-hidden">
              {/* Gallery */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black min-h-[280px] lg:min-h-[92vh] lg:max-h-[92vh] flex flex-col">
                <div className="relative flex-1 flex items-center justify-center overflow-hidden p-4 sm:p-6">
                  {images.length ? (
                    <motion.img
                      key={imageIndex}
                      initial={{ opacity: 0.4, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      src={images[imageIndex]}
                      alt={`${project.title} screenshot ${imageIndex + 1}`}
                      className="max-h-[46vh] lg:max-h-[68vh] w-full object-contain rounded-xl shadow-2xl shadow-black/40"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <Code className="w-16 h-16" />
                      <p className="text-sm">No preview images yet</p>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

                  {hasMultipleImages && (
                    <>
                      <button
                        type="button"
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/15 text-white hover:bg-white/25 backdrop-blur-md transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/15 text-white hover:bg-white/25 backdrop-blur-md transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {images.length > 0 && (
                  <div className="relative px-4 pb-4 sm:px-6 sm:pb-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span className="uppercase tracking-wider text-gray-400">Gallery</span>
                      <span className="px-2 py-1 rounded-full bg-white/10">
                        {imageIndex + 1} / {images.length}
                      </span>
                    </div>

                    {hasMultipleImages && (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {images.map((image, index) => (
                          <button
                            key={`${image}-${index}`}
                            type="button"
                            onClick={() => setImageIndex(index)}
                            className={`h-14 w-20 shrink-0 rounded-lg overflow-hidden border transition-all ${
                              index === imageIndex
                                ? 'border-primary-400 ring-2 ring-primary-500/40'
                                : 'border-white/10 opacity-65 hover:opacity-100'
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
                )}
              </div>

              {/* Details */}
              <div className="relative flex flex-col bg-white dark:bg-gray-950 lg:max-h-[92vh] lg:overflow-y-auto">
                <div className="p-6 sm:p-8 lg:p-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-primary-500 to-purple-600">
                        Featured
                      </span>
                    )}
                    <span className="text-xs uppercase tracking-[0.2em] text-primary-500">
                      Project Details
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-base sm:text-lg">
                    {project.description}
                  </p>

                  {project.details && (
                    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      {project.details}
                    </p>
                  )}

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm rounded-full border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sticky bottom-0 p-6 sm:p-8 pt-4 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90 transition-opacity font-medium"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-primary-500 to-purple-600 hover:opacity-95 transition-opacity shadow-lg shadow-primary-500/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
