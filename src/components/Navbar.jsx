import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow ring-1 ring-white/20" />
              <span className="font-semibold tracking-tight">Your Name</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="https://github.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Github size={16}/>GitHub</a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={16}/>LinkedIn</a>
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 ring-1 ring-white/10 hover:brightness-110 transition"
              >
                <Mail size={16}/> Get in touch
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/90">
              <Menu/>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
