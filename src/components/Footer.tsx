'use client'
import React from 'react'
import { Shield, ArrowUp, Twitter, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: 'https://github.com/TaiChiAuditGroup/Portfolio' },
      { name: 'Blog', href: '/blog' }
    ],
    resources: [
      { name: 'Security Best Practices', href: '#' },
      { name: 'DeFi Security Guide', href: '#' },
      { name: 'Vulnerability Database', href: '#' },
      { name: 'Research Papers', href: '#' }
    ],
    contact: [
      { name: 'Get in Touch', href: '#contact' },
      { name: 'Email Us', href: 'mailto:taichiweb3sec@gmail.com' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/TaiChiWeb3Sec', name: 'Twitter' },
    { icon: Github, href: 'https://github.com/TaiChiAuditGroup', name: 'GitHub' },
    { icon: MessageCircle, href: 'https://t.me/+egUmC7vd9TI4MGM9', name: 'Telegram' },
    { icon: Mail, href: 'mailto:taichiweb3sec@gmail.com', name: 'Email' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-primary-400 mr-2" />
                <span className="text-xl font-bold">Taichi Audit</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading DeFi security audit group incubated from DeFiHackLabs community. 
                Specializing in Solidity, Move, and Solana smart contract security reviews.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                {footerLinks.contact.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest security insights and updates.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:border-primary-400 focus:outline-none"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2024 Taichi Audit Group. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 p-2 rounded-lg transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 