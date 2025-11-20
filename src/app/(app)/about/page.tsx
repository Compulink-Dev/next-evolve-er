import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Users, Lightbulb, Target, TrendingUp, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Discover the vision behind Africa&apos;s premier ICT Summit
          </p>
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border-l-8 border-purple-600">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Event Synopsis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start">
                  <span className="font-bold text-blue-900 mr-2 min-w-[120px]">Theme:</span>
                  <span>Empowering Africa&apos;s Digital Leap</span>
                </p>
                <p className="flex items-start">
                  <span className="font-bold text-blue-900 mr-2 min-w-[120px]">Dates:</span>
                  <span>11-12 June 2026</span>
                </p>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start">
                  <span className="font-bold text-blue-900 mr-2 min-w-[120px]">Venue:</span>
                  <span>Harare International Conference Centre (HICC)</span>
                </p>
                <p className="flex items-start">
                  <span className="font-bold text-blue-900 mr-2 min-w-[120px]">Organized by:</span>
                  <span>Evolve Africa</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Overview</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The Evolve ICT Summit stands as Zimbabwe&apos;s premier digital transformation forum,
              a flagship platform uniting leaders across policy, business, academia, and technology
              to shape Africa&apos;s digital future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Lightbulb className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Premier Digital Forum
              </h3>
              <p className="text-gray-700">
                Zimbabwe&apos;s flagship platform bringing together policy makers, business leaders,
                academics, and technology innovators.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Bold Collaboration</h3>
              <p className="text-gray-700">
                Calling for collaboration across borders and sectors to drive inclusive
                technological advancement in the Fourth Industrial Revolution.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Target className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Digital Hub</h3>
              <p className="text-gray-700">
                Positioning Zimbabwe as the epicenter of Africa&apos;s digital dialogue, bridging
                local creativity with continental opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Purpose</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              To accelerate Africa&apos;s digital transformation by fostering collaboration,
              knowledge sharing, and investment in ICT innovation, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Collaborative Platform</h3>
              <p className="text-gray-700">
                A collaborative platform between government, private sector, academia, and youth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation Showcase</h3>
              <p className="text-gray-700">
                A showcase stage for African-led innovation and success stories.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Policy Catalyst</h3>
              <p className="text-gray-700">
                A catalyst for regional policy dialogue and technology-driven development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Objectives</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Strategic Objectives */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-purple-500">
                Strategic Objectives
              </h3>
              <ol className="space-y-6">
                {[
                  "Champion Africa's Digital Leap by creating an ecosystem of shared innovation.",
                  "Showcase Zimbabwe's potential as a digital transformation hub.",
                  'Foster multi-sector collaboration between government, corporates, and startups.',
                  'Empower youth, women, and SMEs through technology access and participation.',
                  'Attract investment, partnerships, and technology transfer opportunities.',
                ].map((obj, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{obj}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Operational Objectives */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-purple-500">
                Operational Objectives
              </h3>
              <ol className="space-y-6">
                {[
                  'Target 2,000+ Delegates and 300 sign-ups across Africa and the Diaspora.',
                  'Target 100 Exhibitors showcasing innovation, solutions, and ICT tools.',
                  '30+ Sponsors & Partners driving ecosystem impact.',
                  'A two-day multi-track program blending dialogue, exhibition, and action.',
                ].map((obj, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-900 text-purple-300 rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{obj}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us at the Summit
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            <Calendar className="inline w-6 h-6 mr-2" />
            11-12 June 2026
            <span className="mx-4">•</span>
            <MapPin className="inline w-6 h-6 mr-2" />
            HICC, Harare, Zimbabwe
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-12 py-6"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-purple-400">EVOLVE</span> ICT
              </div>
              <p className="text-blue-200 text-sm">Empowering Africa&apos;s Digital Leap</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/" className="hover:text-purple-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-purple-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-purple-400 transition-colors">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Event Info</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/previous-summit" className="hover:text-purple-400 transition-colors">
                    Previous Summit
                  </Link>
                </li>
                <li>Speakers</li>
                <li>Schedule</li>
                <li>Sponsors</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>info@evolveictsummit.com</li>
                <li>+263 XXX XXX XXX</li>
                <li>HICC, Harare, Zimbabwe</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-sm text-blue-300">© 2026 Evolve Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
