import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90svh] md:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 mb-4">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 animate-pulse" />
              Open to work • Full‑stack Engineer
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow md:leading-tight">
              I build delightful, scalable software experiences
            </h1>
            <p className="mt-4 text-blue-100/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Blending clean code, product sense, and playful 3D to craft modern web apps. Focused on React, TypeScript, Node, and cloud.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 ring-1 ring-white/10 hover:brightness-110 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
                Contact Me
              </a>
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
