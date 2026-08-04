import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Facebook, Github, Linkedin, Mail, Code, Download, Quote, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectModal from '../components/ProjectModal'
import TechStack from '../components/TechStack'

export default function Home() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false)
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
  ]

  // Hardcoded skills - no backend needed
  const skills = [
    // Frontend
    { id: 1, name: 'HTML', proficiency: 90, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { id: 2, name: 'CSS', proficiency: 85, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 3, name: 'JavaScript', proficiency: 88, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 4, name: 'React', proficiency: 85, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 16, name: 'Tailwind CSS', proficiency: 88, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { id: 17, name: 'WordPress', proficiency: 90, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    // Backend
    { id: 5, name: 'Laravel', proficiency: 80, category: 'Backend', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { id: 19, name: 'PHP', proficiency: 85, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { id: 6, name: 'MySQL', proficiency: 82, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { id: 7, name: 'Firebase', proficiency: 75, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { id: 18, name: 'Amazon S3', proficiency: 75, category: 'Backend', logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws-s3.svg' },
    { id: 8, name: 'C', proficiency: 70, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { id: 9, name: 'C++', proficiency: 75, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { id: 10, name: 'C#', proficiency: 78, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { id: 11, name: 'Java', proficiency: 80, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { id: 12, name: 'Python', proficiency: 85, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    // Design
    { id: 13, name: 'Figma', proficiency: 85, category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 14, name: 'Canva', proficiency: 80, category: 'Design', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg' },
    { id: 15, name: 'Photoshop', proficiency: 75, category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  ]

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  const categories = ['Frontend', 'Backend', 'Design']

  const supportingTools = [
    {
      id: 1,
      name: 'Visual Studio Code',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
      id: 2,
      name: 'Cursor AI',
      logo: 'https://cdn.simpleicons.org/cursor/000000',
    },
    {
      id: 3,
      name: 'ChatGPT',
      logo: 'https://cdn.simpleicons.org/openai/412991',
    },
    {
      id: 6,
      name: 'Gemini',
      logo: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
    },
    {
      id: 4,
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      id: 5,
      name: 'XAMPP',
      logo: 'https://cdn.simpleicons.org/xampp/FB7A24',
    },
    {
      id: 7,
      name: 'Vercel',
      logo: 'https://cdn.simpleicons.org/vercel/000000',
    },
    {
      id: 8,
      name: 'HubSpot',
      logo: 'https://cdn.simpleicons.org/hubspot/FF7A59',
    },
    {
      id: 9,
      name: 'Formspree',
      logo: 'https://cdn.simpleicons.org/formspree/E51262',
    },
  ]

  // Gallery images - add your image URLs here
  const galleryImages = [
    {
      id: 5,
      src: '/images/Month%20of%20July.png',
      title: 'Month of July - Highest Conversion',
      alt: 'Month of July certificate',
    },
    {
      id: 6,
      src: '/images/Month%20of%20November.png',
      title: 'Month of November - Highest Conversion',
      alt: 'Month of November certificate',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      title: 'Project Screenshot 2',
      alt: 'Gallery Image 2',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      title: 'Project Screenshot 3',
      alt: 'Gallery Image 3',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      title: 'Project Screenshot 4',
      alt: 'Gallery Image 4',
    },
  ]

  // Hardcoded testimonials - synced with About page
  const testimonials = [
    {
      id: 1,
      name: 'Christopher Perez',
      position: 'Team Leader',
      company: 'Proweaver, Inc.',
      content: 'I’ve had the pleasure of working with Kenrick on our team, and he’s someone I know I can always count on. He consistently puts in the effort, delivers quality work, and is a reliable teammate who’s always willing to help. On top of that, he’s easy to work with and brings a positive energy that genuinely brightens the team’s day. I’m grateful to have him on the team and look forward to seeing all that he’ll accomplish.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Lead Designer',
      company: 'Creative Agency',
      content: 'Working with Kenrick was a pleasure. He understands design requirements perfectly and implements them flawlessly. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'StartupXYZ',
      content: 'Kenrick helped us build our MVP from scratch. His technical expertise and dedication to the project were instrumental in our success.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-slide testimonials; pause while hovered
  useEffect(() => {
    if (testimonials.length === 0 || isTestimonialPaused) return

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length, isTestimonialPaused])

  const openProject = (project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  // Duplicate gallery images for seamless infinite marquee
  const marqueeGalleryImages = [...galleryImages, ...galleryImages, ...galleryImages]

  // Show only first 3 projects on homepage
  const featuredProjects = projects.slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.img
                src="/images/profile.png"
                alt="Kenrick R. Labuca"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-500 shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/256?text=Your+Photo'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary-500 opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Hi, I'm Ken</span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              Full Stack Developer
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
          >
            Turning ideas into reality with code. I build modern web applications that are fast, responsive, and user-friendly.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="https://facebook.com/imkenricklabuca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:scale-105 hover:bg-[#166FE5] transition-all"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>

            <a
              href="https://github.com/KenrickLabuca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-transform"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:kenricklabuca.official@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
            <a
              href="pdf/Kenrick_Labuca_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:scale-105 transition-transform"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tools I use to design, build, and ship modern web experiences.
            </p>
          </motion.div>

          <TechStack
            skillsByCategory={skillsByCategory}
            categories={categories}
            supportingTools={supportingTools}
          />
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <Quote className="w-10 h-10 text-primary-500" />
            Testimonials
          </motion.h2>

          <div
            className="relative"
            onMouseEnter={() => setIsTestimonialPaused(true)}
            onMouseLeave={() => setIsTestimonialPaused(false)}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic min-h-[6rem]">
                  "{testimonials[currentTestimonialIndex].content}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">
                    {testimonials[currentTestimonialIndex].name}
                  </h4>
                  <p className="text-sm text-primary-500">
                    {testimonials[currentTestimonialIndex].position}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonialIndex].company}
                  </p>
                </div>
              </motion.div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform border border-gray-200 dark:border-gray-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-gray-100" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform border border-gray-200 dark:border-gray-700"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-900 dark:text-gray-100" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentTestimonialIndex
                      ? 'w-8 bg-primary-500'
                      : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - React.dev style infinite marquee */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center flex items-center justify-center gap-3"
          >
            <ImageIcon className="w-10 h-10 text-primary-500" />
            Gallery
          </motion.h2>
        </div>

        <div className="group relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent" />

          {/* Single row - scrolls left */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex w-max gap-4 pr-4">
              {[...marqueeGalleryImages, ...marqueeGalleryImages].map((image, index) => (
                <figure
                  key={`gallery-${image.id}-${index}`}
                  className="relative w-[260px] md:w-[320px] h-44 md:h-52 shrink-0 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md"
                >
                  <img
                    src={image.url || image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/320x208?text=Image+Not+Found'
                    }}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                    <p className="text-sm font-semibold text-white truncate">{image.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link
              to="/projects"
              className="text-primary-500 hover:text-primary-600 flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.button
                type="button"
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openProject(project)}
                className="text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
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
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
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
                        className="text-primary-500 hover:text-primary-600"
                      >
                        <Github className="w-5 h-5" />
                      </span>
                    )}
                    {project.live_url && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.live_url, '_blank', 'noopener,noreferrer')
                        }}
                        className="text-primary-500 hover:text-primary-600"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  )
}
