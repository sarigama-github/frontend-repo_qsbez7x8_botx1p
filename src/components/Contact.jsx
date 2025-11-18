import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // This demo just simulates a send
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I\'ll get back to you soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_100%,rgba(99,102,241,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Let’s build something</h2>
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 grid grid-cols-1 gap-4">
          <input name="name" required placeholder="Your name" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <input type="email" name="email" required placeholder="Email" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <textarea name="message" required placeholder="Tell me about your project" rows={5} className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 ring-1 ring-white/10 hover:brightness-110 transition">
              <Send size={16}/> Send message
            </button>
            <p className="text-sm text-blue-200/80">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
