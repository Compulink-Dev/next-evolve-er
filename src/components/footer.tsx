import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
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
  )
}
