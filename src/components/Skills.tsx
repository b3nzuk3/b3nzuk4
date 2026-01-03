import React from 'react';
export const Skills: React.FC = () => {
  const skills = [{
    name: 'React',
    level: 90
  }, {
    name: 'TypeScript',
    level: 90
  }, {
    name: 'Next.js',
    level: 85
  }, {
    name: 'React Native',
    level: 85
  }, {
    name: 'Express.js',
    level: 85
  }, {
    name: 'REST APIs',
    level: 85
  }, {
    name: 'Python',
    level: 90
  }, {
    name: 'Node.js',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'Three.js',
    level: 70
  }, {
    name: 'WebGL',
    level: 65
  }];
  const tools = [{
    name: 'VS Code',
    icon: '💻'
  }, {
    name: 'Git',
    icon: '🔄'
  }, {
    name: 'Docker',
    icon: '🐳'
  }, {
    name: 'Figma',
    icon: '🎨'
  }, {
    name: 'Tailwind',
    icon: '🌊'
  }, {
    name: 'Postman',
    icon: '📮'
  }, {
    name: 'MongoDB',
    icon: '🍃'
  }, {
    name: 'Supabase',
    icon: '⚡'
  }, {
    name: 'AWS',
    icon: '☁️'
  }, {
    name: 'Jest',
    icon: '🧪'
  }, {
    name: 'Vercel',
    icon: '▲'
  }, {
    name: 'Render',
    icon: '🚀'
  }, {
    name: 'Expo',
    icon: '📱'
  }];
  return <section id="skills" className="relative w-full py-20 bg-gray-50 dark:bg-gray-900">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center text-black dark:text-white">
          <span className="neon-text-green">&lt;</span> Skills_&_Tools{' '}
          <span className="neon-text-green">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-mono font-bold mb-6 text-black dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map(skill => <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="font-mono text-sm text-[#006400]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full power-bar-green" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Tools */}
          <div>
            <h3 className="text-xl font-mono font-bold mb-6 text-black dark:text-white">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map(tool => <div key={tool.name} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-black rounded-md border border-gray-200 dark:border-gray-700 hover:neon-glow-green transition-all duration-300">
                  <div className="text-2xl mb-2 led-icon">{tool.icon}</div>
                  <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                    {tool.name}
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};