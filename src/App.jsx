import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      {/* starry subtle background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_300px_at_10%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(800px_300px_at_90%_-10%,rgba(99,102,241,0.12),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-blue-200/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-blue-300/70">Built with love, coffee, and a bit of 3D.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
