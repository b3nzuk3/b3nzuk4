import React from 'react'
import { CodeIcon, UserIcon, GlobeIcon } from 'lucide-react'
export const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-gray-50 dark:bg-gray-900"
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center text-black dark:text-white">
          <span className="neon-text-green">&lt;</span> About_Me{' '}
          <span className="neon-text-green">/&gt;</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Avatar */}
          <div className="relative w-48 h-48 mb-8 md:mb-0">
            <div className="absolute inset-0 rounded-full neon-border-green animate-pulse-slow"></div>
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-[#006400]"
            />
          </div>
          {/* Bio */}
          <div className="max-w-xl data-panel">
            <h3 className="text-xl font-mono font-bold mb-4 text-black dark:text-white">
              <span className="text-[#006400]">$</span> whoami
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              A full-stack developer with a passion for creating futuristic,
              user-centric digital experiences. With over 5 years of experience
              in the tech industry, I specialize in building cutting-edge web
              applications that blend form and function.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <InfoCard
                icon={<CodeIcon />}
                title="Developer"
                description="Crafting clean code and innovative solutions"
              />
              <InfoCard
                icon={<UserIcon />}
                title="Designer"
                description="Creating intuitive and beautiful interfaces"
              />
              <InfoCard
                icon={<GlobeIcon />}
                title="Explorer"
                description="Always learning new technologies"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
interface InfoCardProps {
  icon: React.ReactNode
  title: string
  description: string
}
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:neon-glow-green transition-all duration-300">
      <div className="flex items-center mb-2">
        <div className="mr-2 text-[#006400]">{icon}</div>
        <h4 className="font-mono font-bold text-black dark:text-white">
          {title}
        </h4>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}
