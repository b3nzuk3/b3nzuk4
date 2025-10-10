import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
export const Pricing: React.FC = () => {
  const tiers = [{
    name: 'Basic Website',
    price: '$150-$300',
    time: '3-5 days',
    examples: 'Portfolio, landing page, small business site',
    features: ['1-5 static pages (Home, About, Services, Contact)', 'Mobile-responsive', 'Basic SEO', 'Contact form', 'No database']
  }, {
    name: 'Standard Website',
    price: '$1200-$1800',
    time: '5-10 days',
    examples: 'Blog, NGO site, small e-commerce, business site with CMS',
    features: ['5-15 pages', 'CMS (WordPress, Sanity, etc.)', 'Blog or basic product listing', 'User authentication (optional)', 'Basic animations', 'Email integration'],
    featured: true
  }, {
    name: 'Advanced Website',
    price: '$1800-$3000',
    time: '10-20+ days',
    examples: 'Full e-commerce site, platform MVP, dashboard',
    features: ['15+ pages or dynamic sections', 'Advanced features (checkout, admin dashboard, filters, search)', 'API integration (Stripe, Firebase, WhatsApp, etc.)', 'Custom frontend/backend', 'Database + Authentication']
  }];
  const difficultyAddons = [{
    level: 'Low (default)',
    description: 'Standard layout, no logic-heavy work',
    increase: '0%'
  }, {
    level: 'Medium',
    description: 'Custom components, APIs, form validation, etc.',
    increase: '+20%'
  }, {
    level: 'High',
    description: 'Dashboards, authentication, real-time data, logic-heavy',
    increase: '+50%'
  }, {
    level: 'Ultra/Enterprise',
    description: 'Scaling, complex backend, payment systems, security',
    increase: '+100%'
  }];
  const additionalServices = [{
    service: 'UI/UX Design',
    price: '$100-$500'
  }, {
    service: 'Logo & Branding',
    price: '$50-$300'
  }, {
    service: 'Monthly Maintenance & Support',
    price: '$50-$150/month'
  }, {
    service: 'Hosting Setup & Domain',
    price: '$50-$100'
  }, {
    service: 'SEO Optimization',
    price: '$100-$300'
  }, {
    service: 'Performance Optimization',
    price: '$100-$250'
  }];
  return <section id="pricing" className="relative w-full py-20 bg-gray-50 dark:bg-gray-900">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center text-black dark:text-white">
          <span className="neon-text-green">&lt;</span> Pricing{' '}
          <span className="neon-text-green">/&gt;</span>
        </h2>
        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => <div key={tier.name} className={`terminal-card bg-white dark:bg-black rounded-md overflow-hidden border ${tier.featured ? 'border-[#00FF00] dark:border-[#00FF00] shadow-lg dark:shadow-[#00FF00]/20' : 'border-gray-200 dark:border-gray-800'} hover:neon-glow-green transition-all duration-300`}>
              {tier.featured && <div className="bg-[#006400] text-white py-1 text-center text-sm font-mono">
                  MOST POPULAR
                </div>}
              <div className="p-6">
                <div className="terminal-header mb-2">
                  <span className="text-[#006400] dark:text-[#00FF00]">$</span>{' '}
                  tier_
                  <span className="text-gray-800 dark:text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-mono font-bold mb-2 text-gray-800 dark:text-white">
                  {tier.name}
                </h3>
                <div className="text-2xl font-bold mb-4 text-[#006400] dark:text-[#00FF00]">
                  {tier.price}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Examples:</span>{' '}
                  {tier.examples}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Estimated Time:</span>{' '}
                  {tier.time}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mb-6">
                  <h4 className="font-mono text-sm mb-3 text-gray-800 dark:text-white">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {tier.features.map(feature => <li key={feature} className="flex items-start">
                        <CheckIcon className="w-4 h-4 mr-2 mt-0.5 text-[#006400] dark:text-[#00FF00]" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>)}
                  </ul>
                </div>
                <button className="w-full neon-button-green py-2 font-mono text-white bg-[#006400] rounded-md hover:neon-glow-green transition-all duration-300">
                  GET STARTED
                </button>
              </div>
            </div>)}
        </div>
        {/* Difficulty Add-ons */}
        <div className="mb-16">
          <h3 className="text-xl font-mono font-bold mb-6 text-center text-black dark:text-white">
            <span className="text-[#006400] dark:text-[#00FF00]">🧠</span>{' '}
            Difficulty Add-ons (Modifiers)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/50 dark:bg-black/50">
                  <th className="p-4 text-left font-mono text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800">
                    Difficulty Level
                  </th>
                  <th className="p-4 text-left font-mono text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800">
                    Description
                  </th>
                  <th className="p-4 text-left font-mono text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800">
                    % Price Increase
                  </th>
                </tr>
              </thead>
              <tbody>
                {difficultyAddons.map(level => <tr key={level.level} className="hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-mono text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800">
                      {level.level}
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                      {level.description}
                    </td>
                    <td className="p-4 text-[#006400] dark:text-[#00FF00] font-mono border-b border-gray-200 dark:border-gray-800">
                      {level.increase}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        {/* Additional Services */}
        <div>
          <h3 className="text-xl font-mono font-bold mb-6 text-center text-black dark:text-white">
            <span className="text-[#006400] dark:text-[#00FF00]">⚙️</span>{' '}
            Additional Services
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/50 dark:bg-black/50">
                  <th className="p-4 text-left font-mono text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800">
                    Service
                  </th>
                  <th className="p-4 text-left font-mono text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800">
                    Price Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map(service => <tr key={service.service} className="hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-mono text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800">
                      {service.service}
                    </td>
                    <td className="p-4 text-[#006400] dark:text-[#00FF00] font-mono border-b border-gray-200 dark:border-gray-800">
                      {service.price}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>;
};