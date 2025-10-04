import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Settings,
  TrendingUp,
  ArrowRight
} from 'lucide-react'

function ProcessSection() {
  const [currentProcessStep, setCurrentProcessStep] = useState(0)

  const processSteps = [
    {
      id: 1,
      step: "01.",
      title: "Website examination",
      description: "We'll take a look at your website, its content, your past performance on AdSense, AdX, or any other monetization partner, and analyse whether all our requirements are met - and how we can help you earn more.",
      icon: Search,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      step: "02.",
      title: "Execution & set-up",
      description: "We'll send you an MCM invite through Google Ad Manager, so that we can easily manage your inventory. Depending on your individual case, we may connect you to our additional demand stack.",
      icon: Settings,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      step: "03.",
      title: "Growth & scaling",
      description: "Watch the money pouring in! Once all the implementation-related tasks are taken care of, the only remaining step is to continue producing the content your viewers love - and just look at the earnings scale up!",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const nextStep = () => {
    setCurrentProcessStep((prev) => (prev + 1) % processSteps.length)
  }

  const prevStep = () => {
    setCurrentProcessStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
  }

  const goToStep = (index) => {
    setCurrentProcessStep(index)
  }

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
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            variants={itemVariants}
          >
            Our <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">Process</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300"
            variants={itemVariants}
          >
            A simple, yet powerful and efficient process
          </motion.p>
        </motion.div>

        <motion.div className="relative" variants={itemVariants}>
          {/* Card Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProcessStep}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                {(() => {
                  const step = processSteps[currentProcessStep]
                  const IconComponent = step.icon
                  return (
                    <motion.div
                      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12 mx-4 relative overflow-hidden min-h-[400px] flex items-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Pattern */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}
                        animate={{ opacity: [0.05, 0.15, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.div>

                      <div className="relative w-full">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          {/* Icon and Step Number */}
                          <motion.div
                            className="flex-shrink-0 text-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          >
                            <motion.div
                              className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${step.color} mb-4`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <IconComponent size={48} className="text-white" />
                            </motion.div>
                            <motion.div
                              className={`text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            >
                              {step.step}
                            </motion.div>
                          </motion.div>

                          {/* Content */}
                          <motion.div
                            className="flex-1 text-center md:text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <motion.h3
                              className="text-3xl md:text-4xl font-black text-white mb-6 capitalize"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p
                              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
                              {step.description}
                            </motion.p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevStep}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Previous step"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ChevronLeft size={24} className="text-white" />
          </motion.button>

          <motion.button
            onClick={nextStep}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Next step"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ChevronRight size={24} className="text-white" />
          </motion.button>

          {/* Indicators */}
          <motion.div
            className="flex justify-center mt-8 space-x-3"
            variants={containerVariants}
          >
            {processSteps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProcessStep
                    ? 'bg-gradient-to-r from-orange-500 to-red-600'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to step ${index + 1}`}
                variants={itemVariants}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentProcessStep ? 1.25 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Process Summary */}
        <motion.div
          className="text-center mt-16"
          variants={containerVariants}
        >
          <motion.p
            className="text-lg text-gray-400 mb-6"
            variants={itemVariants}
          >
            Ready to start your monetization journey?
          </motion.p>
          <Link to="/apply-my-mcm">
          <motion.div variants={itemVariants}>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Process</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProcessSection