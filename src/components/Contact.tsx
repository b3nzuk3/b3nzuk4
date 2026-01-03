import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { SendIcon, MessageCircleIcon } from 'lucide-react'
export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSuccess(null)
    setError(null)
    emailjs
      .sendForm(
        'service_2e2bxme', // Your EmailJS service ID
        'template_89xpj5o', // Your EmailJS template ID  
        form.current!,
        'gMNqDtyB168qX2uuD' // Your EmailJS public key
      )
      .then(
        () => {
          setSuccess('Message sent successfully!')
          setSending(false)
          if (form.current) form.current.reset()
        },
        (_error) => {
          setError('Failed to send message. Please try again.')
          setSending(false)
        }
      )
  }
  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-white dark:bg-black"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center text-black dark:text-white">
          <span className="neon-text-green">&lt;</span> Contact_Me{' '}
          <span className="neon-text-green">/&gt;</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="md:col-span-2">
              <h3 className="text-xl font-mono mb-4 text-black dark:text-white">
                <span className="text-[#006400]">$</span> send_message
              </h3>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-mono text-sm text-gray-700 dark:text-gray-300"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md text-black dark:text-white focus:neon-border-green"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-mono text-sm text-gray-700 dark:text-gray-300"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md text-black dark:text-white focus:neon-border-green"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="subject"
                className="block mb-2 font-mono text-sm text-gray-700 dark:text-gray-300"
              >
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md text-black dark:text-white focus:neon-border-green"
                placeholder="Project Inquiry"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 font-mono text-sm text-gray-700 dark:text-gray-300"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md text-black dark:text-white focus:neon-border-green"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="neon-button-green px-6 py-3 font-mono text-white bg-[#006400] rounded-md hover:neon-glow-green transition-all duration-300 flex items-center"
                disabled={sending}
              >
                <SendIcon className="w-4 h-4 mr-2" />
                {sending ? 'Sending...' : 'TRANSMIT MESSAGE'}
              </button>
            </div>
            {success && (
              <div className="md:col-span-2 text-green-600 font-mono text-center mt-2">
                {success}
              </div>
            )}
            {error && (
              <div className="md:col-span-2 text-red-600 font-mono text-center mt-2">
                {error}
              </div>
            )}
          </form>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-mono mb-4 text-black dark:text-white">
              Connect With Me
            </h3>
            <div className="flex justify-center space-x-6">
              <SocialLink
                icon={<MessageCircleIcon />}
                href="https://wa.me/254716848136"
                label="WhatsApp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
interface SocialLinkProps {
  icon: React.ReactNode
  href: string
  label: string
}
const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 text-[#006400] hover:neon-text-green glitch-hover transition-all duration-300"
      aria-label={label}
    >
      <div className="w-6 h-6">{icon}</div>
    </a>
  )
}
