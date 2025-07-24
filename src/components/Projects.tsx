import React from 'react'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Neural Interface',
      description:
        'A futuristic dashboard for monitoring neural network activities with real-time data visualization.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
      tags: ['React', 'D3.js', 'WebGL'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Game City Electronics',
      description:
        'E-commerce platform for electronics and gaming products. Explore a wide range of gadgets and accessories.',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      tags: ['E-commerce', 'React', 'Shop'],
      liveUrl: 'https://www.gamecityelectronics.com/',
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'Mile Master Auto Care',
      description:
        'Full-service auto repair shop offering maintenance, diagnostics, and repairs for all vehicle makes and models. Trusted by the community for quality and reliability.',
      image:
        'https://www.milemasterautocare.com/wp-content/uploads/2022/09/milemasterautocare-logo.png',
      tags: ['Auto Repair', 'Maintenance', 'Diagnostics'],
      liveUrl: 'https://www.milemasterautocare.com/',
      repoUrl: '',
    },
    {
      id: 4,
      title: 'Data Nexus',
      description:
        'Secure data management platform with encryption and futuristic UI for sensitive information.',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'Encryption'],
      liveUrl: '#',
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
  return (
    <div className="terminal-card bg-white dark:bg-black text-gray-800 dark:text-[#00FF00] rounded-md overflow-hidden shadow-lg dark:shadow-none hover:neon-glow-green transition-all duration-300 border border-gray-200 dark:border-[#006400]">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:scanline-effect"
        />
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
