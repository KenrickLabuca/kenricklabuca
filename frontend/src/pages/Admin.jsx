import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, Plus, Edit, Trash2, Save, X } from 'lucide-react'
import api from '../services/api'
import { motion, AnimatePresence } from 'framer-motion'

export default function Admin() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('projects')
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetchData()
  }, [activeTab])

  const fetchData = async () => {
    setLoading(true)
    try {
      if (activeTab === 'projects') {
        const res = await api.get('/projects')
        setProjects(res.data)
      } else if (activeTab === 'skills') {
        const res = await api.get('/skills')
        setSkills(res.data)
      } else if (activeTab === 'experiences') {
        const res = await api.get('/experiences')
        setExperiences(res.data)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const handleDelete = async (id, type) => {
    if (!confirm('Are you sure you want to delete this item?')) return
    
    try {
      await api.delete(`/${type}/${id}`)
      fetchData()
    } catch (error) {
      console.error('Error deleting:', error)
      alert('Failed to delete item')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editing) {
        await api.put(`/${activeTab}/${editing.id}`, formData)
      } else {
        await api.post(`/${activeTab}`, formData)
      }
      setShowForm(false)
      setEditing(null)
      setFormData({})
      fetchData()
    } catch (error) {
      console.error('Error saving:', error)
      alert('Failed to save item')
    }
  }

  const openForm = (item = null) => {
    setEditing(item)
    setFormData(item || getDefaultFormData())
    setShowForm(true)
  }

  const getDefaultFormData = () => {
    if (activeTab === 'projects') {
      return { title: '', description: '', technologies: [], github_url: '', live_url: '', featured: false }
    } else if (activeTab === 'skills') {
      return { name: '', proficiency: 0, category: '', icon: '' }
    } else if (activeTab === 'experiences') {
      return { title: '', company: '', description: '', start_date: '', end_date: '', current: false }
    }
    return {}
  }

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-400">Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
          {['projects', 'skills', 'experiences'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                fetchData()
              }}
              className={`px-6 py-3 font-semibold capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-primary-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={() => openForm()}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add {activeTab.slice(0, -1)}
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            {activeTab === 'projects' && (
              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex justify-between items-start p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div>
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openForm(project)}
                        className="p-2 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id, 'projects')}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{skill.icon || '💻'}</span>
                      <div>
                        <h3 className="font-bold">{skill.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.category} - {skill.proficiency}%
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openForm(skill)}
                        className="p-2 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(skill.id, 'skills')}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experiences' && (
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="flex justify-between items-start p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div>
                      <h3 className="font-bold text-lg">{exp.title}</h3>
                      <p className="text-primary-500 font-semibold">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(exp.start_date).getFullYear()} -{' '}
                        {exp.current ? 'Present' : new Date(exp.end_date).getFullYear()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openForm(exp)}
                        className="p-2 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(exp.id, 'experiences')}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => {
                setShowForm(false)
                setEditing(null)
                setFormData({})
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {editing ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}
                  </h2>
                  <button
                    onClick={() => {
                      setShowForm(false)
                      setEditing(null)
                      setFormData({})
                    }}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {activeTab === 'projects' && (
                    <>
                      <div>
                        <label className="block mb-2 font-semibold">Title</label>
                        <input
                          type="text"
                          value={formData.title || ''}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold">Description</label>
                        <textarea
                          value={formData.description || ''}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          rows="4"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold">Technologies (comma-separated)</label>
                        <input
                          type="text"
                          value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : ''}
                          onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(',').map(t => t.trim()) })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 font-semibold">GitHub URL</label>
                          <input
                            type="url"
                            value={formData.github_url || ''}
                            onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          />
                        </div>
                        <div>
                          <label className="block mb-2 font-semibold">Live URL</label>
                          <input
                            type="url"
                            value={formData.live_url || ''}
                            onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={formData.featured || false}
                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                            className="w-4 h-4"
                          />
                          <span className="font-semibold">Featured</span>
                        </label>
                      </div>
                    </>
                  )}

                  {activeTab === 'skills' && (
                    <>
                      <div>
                        <label className="block mb-2 font-semibold">Name</label>
                        <input
                          type="text"
                          value={formData.name || ''}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold">Category</label>
                        <input
                          type="text"
                          value={formData.category || ''}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold">Proficiency (0-100)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={formData.proficiency || 0}
                          onChange={(e) => setFormData({ ...formData, proficiency: parseInt(e.target.value) })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold">Icon (emoji or text)</label>
                        <input
                          type="text"
                          value={formData.icon || ''}
                          onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                        />
                      </div>
                    </>
                  )}

                  {activeTab === 'experiences' && (
                    <>
                      <div>
                        <label className="block mb-2 font-semibold">Title</label>
                        <input
                          type="text"
                          value={formData.title || ''}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold">Company</label>
                        <input
                          type="text"
                          value={formData.company || ''}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold">Description</label>
                        <textarea
                          value={formData.description || ''}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                          rows="4"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 font-semibold">Start Date</label>
                          <input
                            type="date"
                            value={formData.start_date || ''}
                            onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 font-semibold">End Date</label>
                          <input
                            type="date"
                            value={formData.end_date || ''}
                            onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                            disabled={formData.current}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={formData.current || false}
                            onChange={(e) => setFormData({ ...formData, current: e.target.checked, end_date: e.target.checked ? null : formData.end_date })}
                            className="w-4 h-4"
                          />
                          <span className="font-semibold">Current Position</span>
                        </label>
                      </div>
                    </>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false)
                        setEditing(null)
                        setFormData({})
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
