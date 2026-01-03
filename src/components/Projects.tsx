import React, { useState } from 'react'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Game City Electronics',
      description:
        'E-commerce platform for electronics and gaming products. Explore a wide range of gadgets and accessories.',
      image:
        'https://mini.s-shot.ru/1024x768/800/jpeg/?https://www.gamecityelectronics.com/',
      tags: ['E-commerce', 'React', 'Shop'],
      liveUrl: 'https://www.gamecityelectronics.com/',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Mile Master Auto Care',
      description:
        'Full-service auto repair shop offering maintenance, diagnostics, and repairs for all vehicle makes and models. Trusted by the community for quality and reliability.',
      image:
        'https://mini.s-shot.ru/1024x768/800/jpeg/?https://www.milemasterautocare.com/',
      tags: ['Auto Repair', 'Maintenance', 'Diagnostics'],
      liveUrl: 'https://www.milemasterautocare.com/',
      repoUrl: '',
    },
    {
      id: 3,
      title: 'Zawamu Properties',
      description:
        'Real estate platform showcasing property listings and services in Kenya. Browse available properties, view details, and connect with real estate professionals.',
      image:
        'https://mini.s-shot.ru/1024x768/800/jpeg/?https://www.zawamuproperties.co.ke',
      tags: ['Real Estate', 'Property Listings', 'Kenya'],
      liveUrl: 'https://www.zawamuproperties.co.ke/',
      repoUrl: '#',
    },
    {
      id: 4,
      title: 'Yoko Designs',
      description:
        'Full-stack web application featuring both frontend and backend components. Built with modern technologies and deployed on Vercel with a comprehensive backend system.',
      image:
        'https://mini.s-shot.ru/1024x768/800/jpeg/?https://yoko-front.vercel.app/',
      tags: ['React', 'Full-Stack', 'Backend'],
      liveUrl: 'https://yoko-front.vercel.app/',
      repoUrl: '#',
    },
  ]
  return (
    <section
      id="projects"
      className="relative w-full py-20 bg-white dark:bg-black"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center text-black dark:text-white">
          <span className="neon-text-green">&lt;</span> Projects{' '}
          <span className="neon-text-green">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  repoUrl: string
}
const ProjectCard: React.FC<{
  project: Project
}> = ({ project }) => {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(project.image)

  const handleImageError = () => {
    if (!imageError) {
      // Try alternative screenshot service as fallback
      const fallbackUrl = `https://mini.s-shot.ru/1024x768/800/jpeg/?${encodeURIComponent(project.liveUrl)}`
      setImageSrc(fallbackUrl)
      setImageError(true)
    } else {
      // If fallback also fails, use a placeholder
      setImageSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1024" height="768"%3E%3Crect fill="%23e5e7eb" width="1024" height="768"/%3E%3Ctext fill="%239ca3af" font-family="monospace" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Preview%3C/text%3E%3C/svg%3E')
    }
  }

  return (
    <div className="terminal-card bg-white dark:bg-black text-gray-800 dark:text-[#00FF00] rounded-md overflow-hidden shadow-lg dark:shadow-none hover:neon-glow-green transition-all duration-300 border border-gray-200 dark:border-[#006400]">
      <div className="h-48 overflow-hidden relative group">
        <img
          src={imageSrc}
          alt={project.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:scanline-effect"
        />
        {/* Preview Overlay */}
        {project.liveUrl !== '#' && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#00FF00] text-black px-6 py-3 rounded-lg font-mono font-bold hover:bg-white transition-colors duration-300 transform hover:scale-105"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              View Live Demo
            </a>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="terminal-header mb-2">
          <span className="text-[#006400] dark:text-[#00FF00]">$</span> project_
          <span className="text-gray-800 dark:text-white">{project.id}</span>
        </div>
        <h3 className="text-xl font-mono font-bold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-green-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-[#006400] dark:bg-green-900/30 dark:text-green-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.liveUrl}
            className="flex items-center text-sm text-[#006400] dark:text-[#00FF00] hover:text-green-800 dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="w-4 h-4 mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
