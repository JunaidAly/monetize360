import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import {
  Share2,
  DollarSign,
  Shield,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
  Headphones,
  Mail,
  Target,
  Award,
  CreditCard,
  Settings,
  MessageCircle
} from 'lucide-react'

function Services() {
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

  const services = [
    {
      id: 1,
      icon: Share2,
      title: "MCM Invitations",
      subtitle: "Social Media Marketing",
      description: "We cooperate directly with MCM parent account holders in order to provide you with Google-compliant access to AdX at profitable revenue shares.",
      features: ["Verified by Google", "Managed by you", "Payments by Google", "Free for you"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      icon: Zap,
      title: "Header Bidding",
      subtitle: "Paid Advertising",
      description: "The strongest and best demand partners, integrated directly in your stack, through our ad server or your Google Ad Manager - we're flexible like that!",
      features: ["More revenue", "Diversification", "No additional work", "No effect on UX"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Pro Analytics",
      subtitle: "Advanced Analytics",
      description: "Ever been angry that you can't find the information you're looking for on your monetization partner's platform? No more worries like that with lkzAi's top-of-the-line reporting!",
      features: ["Any dimension", "Updated each hour", "All important metrics", "Accurate numbers"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      icon: Shield,
      title: "IVT Prevention",
      subtitle: "Traffic Quality",
      description: "Leverage our advanced tech & specialized traffic-compliance team to prevent invalid/low-quality/automated traffic from publishers.",
      features: ["Real-time monitoring", "Advanced filtering", "Quality assurance", "Compliance support"],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      icon: DollarSign,
      title: "Reliable Payments",
      subtitle: "Payment Solutions",
      description: "Get your payments on a fixed and dependable schedule, starting at just $50 USD - with various payment methods including bank transfers and e-wallets.",
      features: ["Low minimum payout", "Multiple payment methods", "Fixed schedule", "Reliable processing"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      icon: Settings,
      title: "AdOps Consulting",
      subtitle: "Content Marketing",
      description: "Campaign optimization, ad trafficking, real-time-bidding - you name it, we do it! If you'd like to bring experts in to review anything related to ad operations, we'd be happy to help.",
      features: ["Great team", "Most SSPs & DSPs handled", "Fast responses", "Fair pricing rates"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <motion.div
      className="min-h-screen bg-black text-white pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SEO
        title="Our Services - MCM, Header Bidding, Analytics & More | Monetize360"
        description="Explore Monetize360's comprehensive monetization services: Google MCM invitations, Header Bidding, Pro Analytics, IVT Prevention, and AdOps Consulting. Maximize your ad revenue."
        keywords="MCM invitations, header bidding, ad analytics, IVT prevention, AdOps consulting, Google AdX, publisher services"
      />
      {/* Hero Section */}
      <motion.section className="relative py-24 px-8" variants={containerVariants}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.p
              className="text-2xl md:text-3xl text-blue-400 font-semibold mb-2"
              variants={itemVariants}
            >
              We're on your side
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl text-gray-300"
              variants={itemVariants}
            >
              Our goal is increasing your profit.
            </motion.p>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            variants={itemVariants}
          >
            HIGH-IMPACT
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              SERVICES
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Comprehensive monetization solutions designed to maximize your revenue potential
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in touch</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section className="py-16 px-8" variants={containerVariants}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-500 cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background Pattern */}
                  <motion.div
                    className={`absolute inset-0 opacity-5 bg-gradient-to-br ${service.color}`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <div className="relative p-8">
                    {/* Icon and Header */}
                    <motion.div
                      className="flex items-start space-x-4 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent size={28} className="text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.p
                          className="text-sm text-blue-400 font-medium mb-1 uppercase tracking-wider"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          {service.subtitle}
                        </motion.p>
                        <motion.h3
                          className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          {service.title}
                        </motion.h3>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6 text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      className="grid grid-cols-2 gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.7 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-24 px-8 bg-gradient-to-br from-gray-900 to-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Join thousands of publishers who have already maximized their revenue with our comprehensive monetization solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
                <span>Start Conversation</span>
              </motion.button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.button
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Send Email</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Services