import { Navbar } from '@/components/navbar'
import { CountdownTimer } from '@/components/countdown-timer'
import { PricingCard } from '@/components/pricing-card'
import { StatsCounter } from '@/components/stats-counter'
import { Button } from '@/components/ui/button'
import {
  Calendar,
  MapPin,
  Users,
  Lightbulb,
  Target,
  TrendingUp,
  ArrowRight,
  Mail,
  Phone,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ContactForm } from '@/components/contact-form'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden"
      >
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-4 border-purple-400 rotate-45" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-purple-400 rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-4 border-white" />
        </div>

        <div className="text-center text-white max-w-6xl mx-auto relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center space-x-4">
              <div className="text-4xl md:text-6xl font-bold">
                <span className="text-purple-400">EVO</span>
                <span className="text-white">LVE</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-tight">
              ICT SUMMIT
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest leading-tight mt-4 text-purple-400">
              2026
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest mb-12 uppercase">
            Empowering Africa&apos;s Digital Leap
          </h2>

          {/* Date and Location */}
          <div className="space-y-6 mt-16">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6 text-purple-400" />
              <p className="text-2xl md:text-4xl font-bold tracking-wide">11-12 JUNE 2026</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-purple-400" />
              <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide">
                Harare International Conference Centre (HICC)
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Button
              size="lg"
              className="bg-purple-400 hover:bg-purple-500 text-blue-900 font-bold text-lg px-12 py-6"
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-4">
        <CountdownTimer />
      </section>

      {/* Synopsis Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border-l-8 border-blue-900">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Synopsis</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="flex items-start">
                <span className="font-bold text-blue-900 mr-2">Theme:</span>
                Empowering Africa&apos;s Digital Leap
              </p>
              <p className="flex items-start">
                <span className="font-bold text-blue-900 mr-2">Dates:</span>
                11-12 June 2026
              </p>
              <p className="flex items-start">
                <span className="font-bold text-blue-900 mr-2">Venue:</span>
                Harare International Conference Centre (HICC)
              </p>
              <p className="flex items-start">
                <span className="font-bold text-blue-900 mr-2">Organized by:</span>
                Evolve Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Overview</h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <Lightbulb className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Premier Digital Transformation Forum
              </h3>
              <p className="text-blue-100">
                The Evolve ICT Summit stands as Zimbabwe&apos;s flagship platform uniting leaders
                across policy, business, academia, and technology to shape Africa&apos;s digital
                future.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Bold Collaboration</h3>
              <p className="text-blue-100">
                The 2026 edition calls for bold collaboration across borders and sectors to drive
                inclusive technological advancement, innovation, and resilience in the Fourth
                Industrial Revolution.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <Target className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Africa&apos;s Digital Hub</h3>
              <p className="text-blue-100">
                This edition positions Zimbabwe as the epicenter of Africa&apos;s digital dialogue,
                a hub for innovation, talent, and investment that bridges local creativity with
                continental opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <StatsCounter end={2000} label="Delegates" suffix="+" />
            <StatsCounter end={100} label="Exhibitors" suffix="+" />
            <StatsCounter end={30} label="Sponsors" suffix="+" />
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section id="purpose" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Purpose</h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              To accelerate Africa&apos;s digital transformation by fostering collaboration,
              knowledge sharing, and investment in ICT innovation, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Collaborative Platform</h3>
              <p className="text-gray-700">
                A collaborative platform between government, private sector, academia, and youth.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation Showcase</h3>
              <p className="text-gray-700">
                A showcase stage for African-led innovation and success stories.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Policy Catalyst</h3>
              <p className="text-gray-700">
                A catalyst for regional policy dialogue and technology-driven development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Objectives</h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Strategic Objectives */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-purple-400">
                Strategic Objectives
              </h3>
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-purple-400 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </span>
                  <span className="text-gray-700">
                    Champion Africa&apos;s Digital Leap by creating an ecosystem of shared
                    innovation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-purple-400 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </span>
                  <span className="text-gray-700">
                    Showcase Zimbabwe&apos;s potential as a digital transformation hub.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-purple-400 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </span>
                  <span className="text-gray-700">
                    Foster multi-sector collaboration between government, corporates, and startups.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-purple-400 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </span>
                  <span className="text-gray-700">
                    Empower youth, women, and SMEs through technology access and participation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-purple-400 rounded-full flex items-center justify-center font-bold mr-4">
                    5
                  </span>
                  <span className="text-gray-700">
                    Attract investment, partnerships, and technology transfer opportunities.
                  </span>
                </li>
              </ol>
            </div>

            {/* Operational Objectives */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-purple-400">
                Operational Objectives
              </h3>
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-400 text-blue-900 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </span>
                  <span className="text-gray-700">
                    Target 2,000+ Delegates and 300 sign-ups across Africa and the Diaspora.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-400 text-blue-900 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </span>
                  <span className="text-gray-700">
                    Target 100 Exhibitors showcasing innovation, solutions, and ICT tools.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-400 text-blue-900 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </span>
                  <span className="text-gray-700">
                    30+ Sponsors & Partners driving ecosystem impact.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-400 text-blue-900 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </span>
                  <span className="text-gray-700">
                    A two-day multi-track program blending dialogue, exhibition, and action.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Pricing Section */}
      <section id="tickets" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Ticket Pricing & Registration
            </h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto mb-8" />
            <p className="text-xl text-gray-700">
              Early bird tickets available now. Registration closes June 30, 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <PricingCard
              title="Early Bird"
              price="150"
              period="Before April 30, 2026"
              features={[
                'Full event access',
                'Regular seating',
                'Lunch provided',
                'Networking sessions',
                'Conference materials',
              ]}
            />
            <PricingCard
              title="Early Bird"
              price="175"
              period="Before May 30, 2026"
              features={[
                'Full event access',
                'Regular seating',
                'Lunch provided',
                'Networking sessions',
                'Conference materials',
              ]}
              highlighted
            />
            <PricingCard
              title="Regular"
              price="200"
              period="From June 1, 2026"
              features={[
                'Full event access',
                'Regular seating',
                'Lunch provided',
                'Networking sessions',
                'Conference materials',
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              <span className="font-bold text-blue-900">Important:</span> The cut-off date for
              registration and payment is June 30, 2026.
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg px-12 py-6"
            >
              Become an Exhibitor
            </Button>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Speakers</h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto mb-8" />
            <p className="text-xl text-blue-100">Coming Soon</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Speaker {i}</h3>
                <p className="text-blue-200">Position & Company</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-purple-400 mb-8" />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Event Date</h3>
                    <p className="text-gray-700">11-12 June 2026</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Location</h3>
                    <p className="text-gray-700">
                      Harare International Conference Centre
                      <br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@evolveictsummit.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Phone</h3>
                    <p className="text-gray-700">+263 XXX XXX XXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="text-purple-400">EVOLVE</span> ICT SUMMIT
          </div>
          <p className="text-blue-200 mb-6">Empowering Africa&apos;s Digital Leap</p>
          <p className="text-sm text-blue-300">© 2026 Evolve Africa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
