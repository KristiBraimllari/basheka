'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Reset active section when returning to homepage
  useEffect(() => {
    if (isHomePage) {
      // Reset to no selection when first landing on homepage
      setActiveSection('')
    }
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      const sections = ['services', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 200

      // Show arrow once services section is reached and keep it visible for the rest
      const servicesElement = document.getElementById('services')
      if (servicesElement) {
        const rect = servicesElement.getBoundingClientRect()
        // Show arrow when services section top reaches viewport top (or has passed it)
        const hasReachedServices = rect.top <= window.innerHeight
        setShowScrollTop(hasReachedServices)
      } else {
        // Fallback to scroll position if services element not found
        setShowScrollTop(window.scrollY > 200)
      }

      // If at the very top, don't select anything
      if (window.scrollY < 100) {
        setActiveSection('')
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Also check on mount
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Determine active page for inner pages
  useEffect(() => {
    if (isHomePage) return
    
    const pathMap: Record<string, string> = {
      '/': 'home',
      '/about': 'about',
      '/services': 'services',
      '/portfolio': 'portfolio',
      '/contact': 'contact',
      '/quote': 'contact',
      '/resources': 'resources',
    }

    // Check if current path matches any route
    for (const [path, section] of Object.entries(pathMap)) {
      if (pathname === path || pathname.startsWith(path + '/')) {
        setActiveSection(section)
        break
      }
    }
  }, [pathname, isHomePage])

  const navLinks = [
    { href: '/services', label: 'Services', id: 'services', path: '/services' },
    { href: '/about', label: 'About', id: 'about', path: '/about' },
    { href: '/portfolio', label: 'Portfolio', id: 'portfolio', path: '/portfolio' },
    { href: '/contact', label: 'Contact', id: 'contact', path: '/contact' },
  ]

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    if (isHomePage) {
      // On homepage, use anchor links
      e.preventDefault()
      const element = document.getElementById(link.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(link.id)
      }
    }
    // Otherwise, let Next.js Link handle navigation
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveSection('')
  }

  // Hide navigation on inner pages (not homepage)
  if (!isHomePage) {
    return null
  }

  return (
    <>
      {/* Floating Navigation - Top Centered */}
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-full px-6 py-4 shadow-lg border border-apple-gray-200">
          <div className="flex items-center space-x-1">
            {/* Scroll to Top Arrow - Slides in when scrolled */}
            <AnimatePresence mode="wait">
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  onClick={handleScrollToTop}
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all text-apple-gray-700 hover:bg-apple-gray-100 flex items-center justify-center min-w-[40px] mr-1"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={16} />
                </motion.button>
              )}
            </AnimatePresence>
            
            {navLinks.map((link) => {
              const pathnameStr = pathname as string
              const isActive = activeSection === link.id || 
                (!isHomePage && pathnameStr === link.path) ||
                (!isHomePage && pathnameStr.startsWith(link.path + '/'))
              
              return (
                <Link
                  key={link.id}
                  href={isHomePage ? `#${link.id}` : link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? 'bg-apple-gray-700 text-white'
                      : 'text-apple-gray-700 hover:bg-apple-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-apple-gray-200 lg:hidden"
      >
        <div className="max-w-[1024px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold text-apple-gray-700">
              SteelWorks
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-apple-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border-t border-apple-gray-200 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-2">
                {/* Scroll to Top Arrow for Mobile */}
                {showScrollTop && (
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onClick={() => {
                      handleScrollToTop()
                      setIsOpen(false)
                    }}
                    className="w-full flex items-center justify-center px-4 py-3 text-base font-medium rounded-lg transition-colors text-apple-gray-700 hover:bg-apple-gray-50"
                    aria-label="Scroll to top"
                  >
                    <ArrowUp size={18} className="mr-2" />
                    Back to Top
                  </motion.button>
                )}
                
                {navLinks.map((link, index) => {
                  const pathnameStr = pathname as string
                  const isActive = activeSection === link.id || 
                    (!isHomePage && pathnameStr === link.path) ||
                    (!isHomePage && pathnameStr.startsWith(link.path + '/'))
                  
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={isHomePage ? `#${link.id}` : link.href}
                        onClick={(e) => {
                          handleNavClick(link, e)
                          setIsOpen(false)
                        }}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          isActive
                            ? 'bg-apple-gray-100 text-apple-gray-700'
                            : 'text-apple-gray-700 hover:bg-apple-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
