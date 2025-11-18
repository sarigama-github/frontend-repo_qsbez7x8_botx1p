import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 opacity-30">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white mb-6"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100/90"
          >
            <p className="leading-relaxed">
              I’m a software engineer who loves crafting polished interfaces and robust systems. My sweet spot is building end‑to‑end features across the stack — from thoughtful UX to performant APIs and infrastructure.
            </p>
            <p className="leading-relaxed mt-4">
              I care about accessibility, design systems, and developer experience. Recently exploring 3D on the web and AI‑assisted workflows.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            {['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'Postgres', 'MongoDB', 'AWS'].map((s) => (
              <li key={s} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-blue-100/90">
                <span>{s}</span>
                <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] tracking-wide">Expert</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
