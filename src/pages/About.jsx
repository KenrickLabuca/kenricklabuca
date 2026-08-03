import { motion } from 'framer-motion'
import { Briefcase, Award, FileText, Trophy, ListChecks, Globe } from 'lucide-react'
import TechStack from '../components/TechStack'

export default function About() {
  const highlights = [
    {
      id: 1,
      icon: Trophy,
      text: 'Top Performer in ~9 monthly company performance award cycles',
    },
    {
      id: 2,
      icon: ListChecks,
      text: 'Implemented and converted 440+ website forms',
    },
    {
      id: 3,
      icon: Globe,
      text: 'Supported hundreds of production websites',
    },
  ]

  // Hardcoded experiences - no backend needed
  const experiences = [
    {
      id: 1,
      title: 'Senior Web/WordPress Developer',
      company: 'Proweaver, Inc.',
      start_date: '2024',
      end_date: null,
      current: true,
    },
    {
      id: 2,
      title: 'System Analyst Intern',
      company: 'Pixel8 Web Solutions and Consultancy Inc.',
      start_date: '2023',
      end_date: '2023',
      current: false,
    },

    {
      id: 3,
      title: 'Bachelor of Science in Information Technology',
      company: 'University of Cebu Main Campus',
      start_date: '2017',
      end_date: '2023',
      current: false,
    },
  ]

  // Hardcoded skills - synced with Home page
  const skills = [
    // Frontend
    { id: 1, name: 'HTML', proficiency: 90, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { id: 2, name: 'CSS', proficiency: 85, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 3, name: 'JavaScript', proficiency: 88, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 4, name: 'React', proficiency: 85, category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    // Backend
    { id: 5, name: 'Laravel', proficiency: 80, category: 'Backend', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { id: 6, name: 'MySQL', proficiency: 82, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { id: 7, name: 'Firebase', proficiency: 75, category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
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
      id: 4,
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      badge: 'BASIC',
    },
    {
      id: 5,
      name: 'XAMPP',
      logo: 'https://cdn.simpleicons.org/xampp/FB7A24',
    },
  ]

  // Hardcoded certificates
  const certificates = [
    {
      id: 1,
      name: 'React Development Certificate',
      issuer: 'FreeCodeCamp',
      date: '2024',
      credentialId: 'FCC-REACT-2024',
      credentialUrl: 'https://example.com/certificate',
    },
    {
      id: 2,
      name: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2023',
      credentialId: 'COURSERA-FSWD-2023',
      credentialUrl: 'https://example.com/certificate',
    },
    {
      id: 3,
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2023',
      credentialId: 'FCC-JS-2023',
      credentialUrl: 'https://example.com/certificate',
    },
  ]

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <img
              src="/images/profile.png"
              alt="Kenrick R. Labuca"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary-500 shadow-xl"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/224?text=Your+Photo'
              }}
            />
          </motion.div>
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies.
            I love building scalable applications and solving complex problems.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <div className="flex flex-col gap-3">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#d8dbf5] bg-[#f0f2ff] px-5 py-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-[#4f46a5] dark:text-primary-400"
                    strokeWidth={1.75}
                  />
                  <p className="text-left text-base leading-snug text-[#2d325a] dark:text-gray-100">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary-500" />
            Experiences
          </h2>
          {experiences.length === 0 ? (
            <div className="text-center py-10 text-gray-500 dark:text-gray-400">
              No experiences added yet.
            </div>
          ) : (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary-500 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(exp.start_date).getFullYear()} -{' '}
                      {exp.current
                        ? 'Present'
                        : new Date(exp.end_date).getFullYear()}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* Certificates Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary-500" />
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                      {cert.name}
                    </h3>
                    <p className="text-primary-500 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Issued: {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <div className="ml-4">
                    <FileText className="w-12 h-12 text-primary-500 opacity-20" />
                  </div>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-500 hover:text-primary-600 inline-flex items-center gap-1 transition-colors"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section - Synced with Home page */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary-500" />
              Tech Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 ml-11">
              Tools I use to design, build, and ship modern web experiences.
            </p>
          </div>

          <TechStack
            skillsByCategory={skillsByCategory}
            categories={categories}
            supportingTools={supportingTools}
            animateOnScroll={false}
          />
        </motion.section>
      </div>
    </div>
  )
}
