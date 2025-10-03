import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Settings, Briefcase, Mail, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: User, label: "About" },
    { to: "/services", icon: Settings, label: "Services" },
    { href: "#", icon: Briefcase, label: "Apply my MCM" }
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navigation */}
      <motion.nav
        className="bg-black/90 backdrop-blur-md border-b border-gray-800"
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(12px)" }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-4 lg:py-6">
          <div className="flex justify-between items-center relative">
            {/* Mobile Menu Button - Left on mobile */}
            <motion.button
              className="lg:hidden text-white p-2 order-1"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            {/* Logo - Center on mobile, left on desktop */}
            <Link to="/" className="flex-shrink-0 order-2 lg:order-1 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <motion.img
                src="/logo.jpg"
                alt="Monetize360 Global"
                className="h-10 lg:h-14 rounded-full w-auto"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center order-2">
              <motion.div
                className="flex space-x-8 xl:space-x-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, staggerChildren: 0.1 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-white font-medium hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group flex items-center space-x-2"
                      >
                        <item.icon size={18} />
                        <span>{item.label}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group flex items-center space-x-2"
                      >
                        <item.icon size={18} />
                        <span>{item.label}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Contact Button */}
            <Link to="/contact" className="order-3">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2 text-sm lg:text-base"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} className="lg:w-[18px] lg:h-[18px]" />
                <span className="hidden sm:inline">Get in touch</span>
                <span className="sm:hidden">Contact</span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-white font-medium hover:text-blue-400 transition-all duration-300 flex items-center space-x-3 py-2 border-b border-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-blue-400 transition-all duration-300 flex items-center space-x-3 py-2 border-b border-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  )
}

export default Header