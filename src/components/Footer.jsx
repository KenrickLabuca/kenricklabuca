import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block mb-4" aria-label="Go to home">
              <img
                src="/images/logo.svg"
                alt="kkn"
                className="h-10 w-auto rounded-md object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about building modern web applications
              and solving complex problems.
            </p>
            <div className="flex gap-4">

              <motion.a
                href="https://github.com/KenrickLabuca"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-gray-800 hover:bg-primary-500 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:kenricklabuca.official@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-gray-800 hover:bg-primary-500 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:kenricklabuca.official@gmail.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  kenricklabuca.official@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:09208247167"
                  className="hover:text-primary-500 transition-colors"
                >
                  09208247167
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/pdf/Kenrick_Labuca_Resume.pdf"
                  download
                  className="text-primary-500 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Kenrick R. Labuca. All rights reserved.
            </p>
            {/* <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Laravel
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
