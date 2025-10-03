import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      className="py-20 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12 relative overflow-hidden"
          variants={containerVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Pattern */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>

          <div className="relative">
            <motion.div className="text-center mb-12" variants={containerVariants}>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  ABOUT US
                </span>
              </motion.h2>
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                A super team of industry experts
              </motion.h3>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto text-center mb-12"
              variants={containerVariants}
            >
              <motion.p
                className="text-xl text-gray-300 leading-relaxed mb-8"
                variants={itemVariants}
              >
                The monetization magicians, revenue rangers, ad alchemists - well, you get the point. We love AdTech and we are highly skilled at it. We earn more when you do - so our goals are absolutely obvious.
              </motion.p>
              <motion.p
                className="text-lg text-gray-400 leading-relaxed"
                variants={itemVariants}
              >
                Give us a shot; we don't do lock-ins, so you can leave whenever you'd like (but we bet you won't want to)!
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/about" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center space-x-2">
                    <Users size={20} />
                    <span>Learn More About Us</span>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.button
                  className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get in touch</span>
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutSection