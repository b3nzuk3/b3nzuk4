import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './styles/custom.css';
export function App() {
  return <ThemeProvider>
      <div className="font-sans antialiased transition-colors duration-300 min-h-screen w-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Pricing />
          <Contact />
        </main>
      </div>
    </ThemeProvider>;
}