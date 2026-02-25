export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-wider uppercase">
          Portfolio
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Sky
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto">
          I build things for the web. Check out my projects below and feel free
          to reach out!
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/10 hover:border-white/25 text-gray-300 hover:text-white font-medium text-sm transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
