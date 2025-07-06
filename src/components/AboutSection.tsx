'use client'
import React from 'react'
import { Users, BookOpen, Target, Zap, Shield, Code, Award, Globe } from 'lucide-react'

export default function AboutSection() {
  const teamMembers = [
    {
      name: 'Security Researcher',
      role: 'Lead Auditor',
      expertise: 'Solidity, DeFi Protocols',
      description: 'Former security researcher at leading DeFi protocols with 5+ years of experience'
    },
    {
      name: 'Move Expert',
      role: 'Move Specialist',
      expertise: 'Aptos, Sui, Move Language',
      description: 'Core contributor to Move ecosystem security tools and best practices'
    },
    {
      name: 'Solana Developer',
      role: 'Solana Auditor',
      expertise: 'Rust, Solana Programs',
      description: 'Former Solana Labs engineer with deep knowledge of Solana runtime security'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every audit is conducted with the highest security standards and thoroughness'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'We stay at the forefront of security research and emerging threats'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Rooted in the DeFiHackLabs community, we contribute back to the ecosystem'
    },
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Specialized expertise in DeFi protocols and multi-chain security'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Taichi Audit</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Born from the DeFiHackLabs community, we represent the next generation of security researchers dedicated to protecting the DeFi ecosystem
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl mr-4">
                  <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Origin</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Taichi Audit Group emerged from the renowned DeFiHackLabs community, a collective of security researchers and ethical hackers dedicated to improving DeFi security. Our team brings together years of experience in identifying and preventing security vulnerabilities in decentralized finance protocols.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We've witnessed firsthand the evolution of DeFi security challenges and have developed specialized expertise in the most critical areas of smart contract security across multiple blockchain ecosystems.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-100 dark:bg-secondary-900 p-3 rounded-xl mr-4">
                  <Target className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our mission is to secure the DeFi ecosystem by providing comprehensive security audits that protect both protocols and users. We believe in the transformative power of decentralized finance and are committed to making it safer for everyone.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Through rigorous testing, innovative audit methodologies, and continuous security research, we help build a more secure and trustworthy DeFi landscape.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Values</h3>
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expert <span className="gradient-text">Security Team</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our diverse team of security experts brings specialized knowledge across multiple blockchain ecosystems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="font-medium">Expertise:</span> {member.expertise}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized knowledge across the most important blockchain ecosystems and security tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Solidity', desc: 'Ethereum & EVM' },
              { name: 'Move', desc: 'Aptos & Sui' },
              { name: 'Rust', desc: 'Solana Programs' },
              { name: 'Cairo', desc: 'StarkNet' }
            ].map((tech, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-slate-700">
                <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-2xl inline-flex mb-4">
                  <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 