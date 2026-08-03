import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  Tools: {
    icon: Wrench,
    description: 'Editors, AI helpers, and local tools I lean on while building.',
    iconWrap: 'bg-purple-100 dark:bg-purple-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
}

export default function TechStack({
  skillsByCategory,
  categories,
  supportingTools = [],
}) {
  const tabs = useMemo(() => {
    const list = [...categories]
    if (supportingTools.length > 0) list.push('Tools')
    return list
  }, [categories, supportingTools])

  const [activeTab, setActiveTab] = useState(tabs[0] || 'Frontend')
  const meta = categoryMeta[activeTab] || categoryMeta.Frontend
  const Icon = meta.icon

  const items =
    activeTab === 'Tools'
      ? supportingTools
      : skillsByCategory[activeTab] || []

  return (
    <div className="space-y-5">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => {
          const TabIcon = categoryMeta[tab]?.icon || Code2
          const isActive = activeTab === tab

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-md shadow-primary-500/20'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-400'
              }`}
            >
              <TabIcon className="w-4 h-4" />
              {tab === 'Tools' ? 'Supporting Tools' : tab}
            </button>
          )
        })}
      </div>

      {/* Active category card */}
      <motion.div
        layout
        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3 mb-4">
            <div className={`mt-0.5 p-2 rounded-lg ${meta.iconWrap}`}>
              <Icon className={`w-5 h-5 ${meta.iconColor}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {activeTab === 'Tools' ? 'Supporting Tools' : activeTab}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {meta.description}
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-2.5"
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2"
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  ) : (
                    <span className="text-sm">{item.icon || '💻'}</span>
                  )}
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="ml-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
