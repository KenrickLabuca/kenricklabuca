import { motion } from 'framer-motion'
import { Code2, Server, Palette, Wrench } from 'lucide-react'

const categoryMeta = {
  Frontend: {
    icon: Code2,
    description: 'Building responsive interfaces and interactive web experiences.',
    iconWrap: 'bg-sky-100 dark:bg-sky-900/40',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
  Backend: {
    icon: Server,
    description: 'APIs, databases, and server-side logic that power applications.',
    iconWrap: 'bg-indigo-100 dark:bg-indigo-900/40',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  Design: {
    icon: Palette,
    description: 'Design tools for UI, mockups, and visual polish.',
    iconWrap: 'bg-pink-100 dark:bg-pink-900/40',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
}

export default function TechStack({
  skillsByCategory,
  categories,
  supportingTools,
  animateOnScroll = true,
}) {
  const motionProps = (delay = 0) =>
    animateOnScroll
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay },
        }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay },
        }

  const itemMotion = (delay = 0) =>
    animateOnScroll
      ? {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay },
        }
      : {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay },
        }

  return (
    <div className="space-y-5">
      {categories.map((category, categoryIndex) => {
        const meta = categoryMeta[category] || categoryMeta.Frontend
        const Icon = meta.icon

        return (
          <motion.div
            key={category}
            {...motionProps(categoryIndex * 0.1)}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="px-6 py-5">
              <div className="flex items-start gap-3 mb-5">
                <div className={`mt-0.5 p-2 rounded-lg ${meta.iconWrap}`}>
                  <Icon className={`w-5 h-5 ${meta.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {category}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {meta.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillsByCategory[category]?.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    {...itemMotion(categoryIndex * 0.05 + index * 0.03)}
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2"
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    ) : (
                      <span className="text-sm">{skill.icon || '💻'}</span>
                    )}
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      })}

      {supportingTools?.length > 0 && (
        <motion.div
          {...motionProps(categories.length * 0.1)}
          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
        >
          <div className="px-6 py-5">
            <div className="flex items-start gap-3 mb-5">
              <div className="mt-0.5 p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
                <Wrench className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Supporting Tools
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Editors, AI helpers, and local tools I lean on while building.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {supportingTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  {...itemMotion(categories.length * 0.1 + index * 0.05)}
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-4 h-4 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                    {tool.name}
                  </span>
                  {tool.badge && (
                    <span className="ml-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      {tool.badge}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
