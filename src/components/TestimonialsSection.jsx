import { motion } from 'framer-motion'
import {
  Quote,
  Star,
  User,
  Building,
  ArrowRight,
  Users
} from 'lucide-react'
import { Link } from 'react-router-dom'

function TestimonialsSection() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
            <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
              TESTIMONIALS
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6"
            variants={itemVariants}
          >
            Don't take our word for it, take theirs!
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/services" className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
              <span>Get in touch</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* Testimonial 1 */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 relative overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <div className="relative">
              {/* Quote Icon */}
              <motion.div
                className="mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Quote size={32} className="text-yellow-400" />
              </motion.div>

              {/* Quote Title */}
              <motion.h3
                className="text-xl font-bold text-yellow-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                "MONETIZE 360  gave us a 40% revenue increase"
              </motion.h3>

              {/* Quote Content */}
              <motion.p
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We moved over to MONETIZE 360  from AdSense and the performance of Google AdX instantly became a game-changer for us. Their header bidding service is quite unique and interesting to us. The team was super helpful during onboarding too.
              </motion.p>

              {/* Rating */}
              <motion.div
                className="flex space-x-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={16} className="text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Author */}
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-2 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <User size={20} className="text-white" />
                </motion.div>
                <div>
                  <p className="font-semibold text-white">Hesham Goda</p>
                  <p className="text-sm text-gray-400">Website owner</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <div className="relative">
              {/* Quote Icon */}
              <motion.div
                className="mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Quote size={32} className="text-blue-400" />
              </motion.div>

              {/* Quote Title */}
              <motion.h3
                className="text-xl font-bold text-blue-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                "Our favourite agency partnership overall"
              </motion.h3>

              {/* Quote Content */}
              <motion.p
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Working together with MONETIZE 360  is very smooth, efficient, and they are really responsive. From the start, I could see that we have a lot of chemistry, and we can extend the offered services on both ends. I could not imagine a better partner.
              </motion.p>

              {/* Rating */}
              <motion.div
                className="flex space-x-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={16} className="text-blue-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Author */}
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building size={20} className="text-white" />
                </motion.div>
                <div>
                  <p className="font-semibold text-white">Abdul rehman</p>
                  <p className="text-sm text-gray-400">CONTENT CREATOR</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-1 cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <div className="relative">
              {/* Quote Icon */}
              <motion.div
                className="mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Quote size={32} className="text-green-400" />
              </motion.div>

              {/* Quote Title */}
              <motion.h3
                className="text-xl font-bold text-green-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                "The team from MONETIZE 360  are truly experts in this space"
              </motion.h3>

              {/* Quote Content */}
              <motion.p
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Joining MONETIZE 360  was probably the best decision we made this year. They made accessing Google AdX surprisingly simple, with the MCM MA invite being sent out in a matter of hours. I had a few questions during the setup, and their support was very quick. Working with them is a win-win, in my opinion.
              </motion.p>

              {/* Rating */}
              <motion.div
                className="flex space-x-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={16} className="text-green-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Author */}
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <User size={20} className="text-white" />
                </motion.div>
                <div>
                  <p className="font-semibold text-white">S.Narina</p>
                  <p className="text-sm text-gray-400">AdOps Expert at Profitlens.uk</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={containerVariants}
        >
          <motion.p
            className="text-lg text-gray-400 mb-6"
            variants={itemVariants}
          >
            Ready to join our satisfied clients?
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Success Story</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                  <span>Learn More About Us</span>
                  <Users size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TestimonialsSection