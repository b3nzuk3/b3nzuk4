import React from 'react'
import { ChevronDownIcon } from 'lucide-react'
export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-4 neon-text-green glitch-hover">
            <span className="text-black dark:text-white">HUSSEIN</span>
            <span className="text-[#006400]">_SALIM</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-mono mb-8 text-black dark:text-white">
            <span className="typing-animation">
              Digital Alchemist & Web Architect
            </span>
          </h2>
          <p className="max-w-2xl mb-10 text-gray-700 dark:text-gray-300">
            I blend performance, timeless design, and playful experimentation to
            craft captivating websites. From sleek portals to immersive apps, I
            fuse creative vision with solid code to deliver digital solutions
            that look stunning, run flawlessly, and grow with your brand.
          </p>
          <a
            href="#about"
            className="neon-button-green px-8 py-3 font-mono text-lg rounded-md bg-[#006400] text-white hover:neon-glow-green transition-all duration-300"
          >
            ENTER MY WORLD
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDownIcon className="w-8 h-8 text-[#006400]" />
        </a>
      </div>
    </section>
  )
}
