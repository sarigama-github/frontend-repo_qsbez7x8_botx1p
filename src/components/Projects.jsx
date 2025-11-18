import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'CRDT-powered editor with presence, comments, and multiplayer cursors',
    tags: ['React', 'TypeScript', 'WebSocket', 'CRDT'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Code Assistant',
    description: 'Context-aware pair programmer with embeddings and inline refactors',
    tags: ['Next.js', 'Python', 'OpenAI', 'RAG'],
    link: '#',
    repo: '#',
  },
  {
    title: '3D Product Customizer',
    description: 'Playful Spline-driven configurator with dynamic materials and exports',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 opacity-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(99,102,241,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-12">
          <Sparkles className="text-blue-400"/>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition"
            >
              <div className="h-36 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 ring-1 ring-white/10 mb-4" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="text-blue-100/80 text-sm mt-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-blue-200/80 bg-white/5 px-2 py-1 rounded-lg border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-white"><ExternalLink size={16}/> Live</a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-white"><Github size={16}/> Code</a>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-20 bg-gradient-to-tr from-blue-500/0 via-blue-500/10 to-cyan-400/10 blur-2xl"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
