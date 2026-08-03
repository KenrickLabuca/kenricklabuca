import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') // loading | exit | done

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    let frameId
    let start = null
    const duration = 2200

    const tick = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)

      if (next < 100) {
        frameId = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setPhase('exit'), 350)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (phase !== 'exit') return

    const timer = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
      onComplete?.()
    }, 900)

    return () => clearTimeout(timer)
  }, [phase, onComplete])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gray-950 text-white"
          initial={{ y: 0 }}
          animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Soft brand glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl" />
          </div>

          <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-xs uppercase tracking-[0.35em] text-gray-400"
            >
              Welcome
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-10"
            >
              <img
                src="/images/logo.svg"
                alt="kkn"
                className="h-14 w-auto sm:h-16"
              />
            </motion.div>

            <div className="mb-4 flex w-full items-end justify-between gap-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-400"
              >
                Loading experience
              </motion.span>
              <span className="font-mono text-3xl font-semibold tabular-nums sm:text-4xl">
                <span className="gradient-text">{String(progress).padStart(2, '0')}</span>
                <span className="text-gray-500">%</span>
              </span>
            </div>

            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-600"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 70 ? 1 : 0 }}
              className="mt-6 text-center text-sm text-gray-500"
            >
              Full Stack Developer
            </motion.p>
          </div>

          {/* Curved bottom edge during exit feel */}
          <div className="pointer-events-none absolute -bottom-8 left-0 right-0 h-16 rounded-[100%] bg-gray-950" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
