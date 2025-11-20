'use client'

import React, { useState, useEffect } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Previous Summit', href: '/previous-summit' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900/95 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className={scrolled ? 'text-purple-600' : 'text-purple-400'}>EVOLVE</span>
              <span className={scrolled ? 'text-blue-300' : 'text-white'}> ICT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-base hover:text-purple-400 transition-colors duration-300 ${
                  scrolled ? 'text-blue-900' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`${
                scrolled
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-purple-500 hover:bg-purple-600 text-white'
              }`}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={
                    scrolled ? 'text-blue-900 hover:bg-blue-50' : 'text-white hover:bg-white/20'
                  }
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-900 font-medium text-lg hover:text-purple-600 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Register Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
