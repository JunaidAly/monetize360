import { motion } from 'framer-motion'
import {
  Share2,
  DollarSign,
  Shield,
  BarChart3,
  Zap,
  Target,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { Link } from 'react-router-dom'

function ServicesOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              SERVICES
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-2"
            variants={itemVariants}
          >
            High-impact services to improve your earnings
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/services" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
              <span>Get in touch</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* MCM Connection */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 w-fit mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Share2 size={24} className="text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">MCM Connection</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Receive an invite to your Google Ad Manager and start monetizing your inventory, on your own terms. Automated payments by Google with customizable revenue shares.
            </p>
          </motion.div>

          {/* Reliable Payouts */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 w-fit mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <DollarSign size={24} className="text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">Reliable Payouts</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get your payments on a fixed and dependable schedule, starting at just $100 USD - with various payment methods including bank transfers and e-wallets.
            </p>
          </motion.div>

          {/* IVT Protection */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 w-fit mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Shield size={24} className="text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">IVT Protection</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leverage our advanced tech & specialized traffic-compliance team to prevent invalid/low-quality/automated traffic from publishers.
            </p>
          </motion.div>

          {/* Complex Analytics */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 w-fit mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <BarChart3 size={24} className="text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">Complex Analytics</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Never miss out on a trend - track and review your performance/earnings with an abundance of dimensions, metrics, and date filters.
            </p>
          </motion.div>

          {/* Header Bidding */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 w-fit mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Zap size={24} className="text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">Header Bidding</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Implement our stack of some of the best global demands, thereby increasing competition among advertisers and maximizing your revenues!
            </p>
          </motion.div>

          {/* That's not all */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 w-fit mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Target size={24} className="text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">That's not all!</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Take a look at what other services MONETIZE 360  can offer you by clicking on the button below.
            </p>
            <Link to="/services" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">
              <span>Browse services</span>
              <ExternalLink size={14} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/services" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ServicesOverview