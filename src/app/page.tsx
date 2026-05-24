"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      <div className="particles opacity-30"></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-display text-2xl font-semibold text-gradient">
              Divya
            </a>
            <div className="hidden md:flex items-center space-x-10">
              {["about", "skills", "projects", "experience", "certifications", "contact"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="nav-link text-sm font-medium text-gray-400 hover:text-white capitalize"
                  >
                    {section}
                  </a>
                )
              )}
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 pb-4">
            {["about", "skills", "projects", "experience", "certifications", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-400 hover:text-white capitalize"
                >
                  {section}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <div className="mb-2">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-400">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Hi, I&apos;m <span className="text-gradient">Divya</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 font-light text-gray-400">
                Building intelligent solutions with AI &amp; code
              </p>
              <p className="text-lg mb-10 font-light text-gray-400">
                I design and build efficient, scalable, and intelligent systems that solve real-world problems.
              </p>
              <div className="mb-10">
                <div className="flex gap-5 justify-center lg:justify-start">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/divya-kumari-91056833b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover-lift glass hover:bg-white/20 text-white"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a
                    href="https://github.com/Divya-1121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover-lift glass hover:bg-white/20 text-white"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  {/* Email */}
                  <a
                    href="mailto:divyamailkumari@gmail.com"
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover-lift glass hover:bg-white/20 text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 font-medium rounded-full hover:opacity-90 transition-all hover-lift bg-gradient text-white"
              >
                Let&apos;s Connect
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="flex-1 flex flex-col items-center lg:items-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass p-1 mb-8">
                <img
                  src="/profile.jpg"
                  alt="Divya"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="rounded-2xl glass p-6 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-display font-medium text-center leading-relaxed text-white">
                  Consistency beats talent
                  <br />
                  Discipline builds success
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-medium uppercase tracking-wider text-gray-400">Get to know me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="p-8 rounded-3xl hover-lift bg-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient">👋</div>
                  <h3 className="font-display text-2xl text-white">Hello!</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-400">
                  I&apos;m an aspiring <span className="font-semibold text-white">Software Engineer</span> and{" "}
                  <span className="font-semibold text-white">AI &amp; ML enthusiast</span>, driven by curiosity and a
                  passion for continuous learning. I love exploring new technologies and building intelligent systems
                  that solve real-world problems.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 rounded-3xl hover-lift bg-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                    💡
                  </div>
                  <h3 className="font-display text-2xl text-white">What I&apos;m Doing</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-400">
                  Currently focusing on strengthening my skills in{" "}
                  <span className="font-semibold text-white">Data Structures</span>,{" "}
                  <span className="font-semibold text-white">Machine Learning</span>, and building real-world projects
                  to gain practical experience. Every day is a step towards becoming a better engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-white mb-8">Technical Skills</h3>
              {["Python", "AI & Machine Learning", "C/C++", "Java", "HTML & CSS", "SQL", "Figma"].map((skill) => (
                <div key={skill} className="flex items-center gap-4 py-3 border-b border-gray-700 text-white last:border-0">
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-display text-2xl text-white mb-8">Tools &amp; Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "✨", label: "Gemini API" },
                  { icon: "📦", label: "Git" },
                  { icon: "📊", label: "Jupyter" },
                ].map((tool) => (
                  <div key={tool.label} className="p-6 rounded-2xl text-center hover-lift cursor-pointer bg-gray-800">
                    <div className="text-4xl mb-3">{tool.icon}</div>
                    <div className="text-sm font-medium text-white">{tool.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Featured <span className="text-gradient">Project</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="project-card overflow-hidden rounded-3xl bg-gray-800">
              <div className="h-72 relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl">🤖</div>
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm">
                  <span className="text-sm font-medium text-white">FEATURED PROJECT</span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="font-display text-3xl font-bold text-white mb-4">Jarvis AI Assistant</h3>
                <p className="mb-8 leading-relaxed text-gray-400">
                  A full-featured AI assistant built with Python and Gemini API. Features voice recognition, natural
                  language processing, task automation, and intelligent conversations.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-4">Key Features</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Voice Recognition", "AI Chatbot", "Task Automation", "Natural Language Understanding"].map(
                      (f) => (
                        <span key={f} className="px-4 py-2 rounded-full text-sm bg-gray-700 text-white">
                          {f}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div className="mb-10">
                  <h4 className="text-lg font-medium text-white mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "Gemini API", "Speech Recognition"].map((t) => (
                      <span key={t} className="px-4 py-2 rounded-full text-sm bg-gray-700 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://github.com/Divya-1121/Jarvis-AI-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 font-medium rounded-full hover:opacity-90 transition-all hover-lift bg-gradient text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              My <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient"></div>
              <div className="space-y-12">
                {[
                  {
                    icon: "🎓",
                    title: "Currently Pursuing",
                    subtitle: "B.Tech in Computer Science and Engineering",
                    detail: "Galgotias University",
                  },
                  {
                    icon: "💡",
                    title: "AI & ML Exploration",
                    subtitle: "Teaching machines. Training myself.",
                    detail:
                      "My journey into AI started with curiosity—and turned into a passion for building systems that can think, learn, and respond. Every model I train is not just code, but a story of problem-solving and innovation.",
                  },
                  {
                    icon: "🚀",
                    title: "Jarvis AI Assistant",
                    subtitle: "Your voice. My code. One smart assistant.",
                    detail:
                      "Built a powerful AI assistant integrating voice recognition and automation to simplify everyday tasks—bringing the concept of smart living closer to reality.",
                  },
                ].map((item) => (
                  <div key={item.title} className="relative flex items-start gap-8">
                    <div className="w-10 h-10 rounded-full z-10 flex-shrink-0 flex items-center justify-center bg-gradient">
                      <span className="text-white text-lg">{item.icon}</span>
                    </div>
                    <div className="p-8 rounded-2xl flex-1 hover-lift bg-gray-800">
                      <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                      <p className="font-medium mb-3 text-gray-400">{item.subtitle}</p>
                      <p className="text-sm text-gray-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-32 relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🪟",
                gradient: "from-blue-500 to-purple-500",
                title: "Microsoft Certified",
                issuer: "Microsoft",
              },
              {
                icon: "🔍",
                gradient: "from-red-500 to-yellow-500",
                title: "Google Certified",
                issuer: "Google",
              },
            ].map((cert) => (
              <div key={cert.title} className="p-8 rounded-2xl hover-lift group bg-gray-800">
                <div className="flex items-center gap-5 mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-3xl`}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient"></div>
            <p className="mt-6 max-w-2xl mx-auto text-gray-400">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-5 p-6 rounded-2xl hover-lift text-center bg-gray-800">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm mb-1 text-gray-400">Email</p>
                  <a href="mailto:divyamailkumari@gmail.com" className="text-white hover:text-purple-400">
                    divyamailkumari@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5 p-6 rounded-2xl hover-lift text-center bg-gray-800">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm mb-1 text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/divya-kumari-91056833b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400"
                  >
                    Divya Kumari
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-gray-900 border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-center md:text-left text-gray-400">
              © {new Date().getFullYear()} Divya. Built with <span className="text-pink-400">♥</span> and AI.
            </p>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/divya-kumari-91056833b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/Divya-1121" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="mailto:divyamailkumari@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
