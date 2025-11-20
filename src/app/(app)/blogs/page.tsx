import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FileText, Calendar, User } from 'lucide-react'
import React from 'react'

export default function BlogsPage() {
  const placeholderBlogs = [
    {
      title: 'Digital Transformation in Africa: The Road Ahead',
      excerpt: 'Exploring the key trends and opportunities in Africa\'s digital revolution...',
      date: 'March 15, 2026',
      author: 'Evolve Team',
    },
    {
      title: 'Why the 4th Industrial Revolution Matters for Zimbabwe',
      excerpt: 'Understanding the impact of Industry 4.0 on Zimbabwe\'s economy and future...',
      date: 'February 28, 2026',
      author: 'Tech Insights',
    },
    {
      title: 'Preparing for Evolve ICT Summit 2026',
      excerpt: 'What to expect and how to make the most of your summit experience...',
      date: 'January 20, 2026',
      author: 'Event Team',
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Blogs</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Insights, news, and updates from the world of ICT
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {placeholderBlogs.map((blog, index) => (
              <article
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all border border-purple-100"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">More Articles Coming Soon</h3>
              <p className="text-gray-700">
                We&apos;re working on bringing you more insightful content about digital
                transformation, technology trends, and ICT developments in Africa. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
