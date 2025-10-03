import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Phone, Mail, MessageCircle, Send, Share2, Shield, Zap, Users } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    earnings: '',
    message: '',
    services: {
      mcm: false,
      ivt: false,
      hb: false,
      consulting: false
    }
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call us",
      description: "Send us a text or communicate with our team by phone",
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50"
    },
    {
      icon: Mail,
      title: "Send an email",
      email: "info@Monetize360.global",
      description: "Speak to us by email to discuss any topic relevant to cooperation",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50"
    },
    {
      icon: MessageCircle,
      title: "Use WhatsApp",
      description: "Click the link below to speak with our support team over WhatsApp",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/50"
    }
  ]

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <SEO
        title="Contact Us - Get Started with Monetize360 Global"
        description="Contact Monetize360 Global to start maximizing your ad revenue. Reach out via email, phone, or WhatsApp. Get expert monetization analysis and support."
        keywords="contact monetize360, publisher support, ad monetization contact, MCM inquiry, website monetization help"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to start maximizing your ad revenue
          </p>
        </motion.div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-16 px-8">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 border ${method.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className={`p-4 rounded-xl bg-gradient-to-br ${method.gradient} w-fit mb-6`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <method.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {method.title}
              </h3>
              {method.email && (
                <p className="text-blue-400 font-semibold mb-3">
                  {method.email}
                </p>
              )}
              <p className="text-gray-300 leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Send us a message
                  </span>
                </h2>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Get in touch today!
                </h3>
                <p className="text-lg mb-8 leading-relaxed text-gray-300">
                  Use the form to request an analysis of your website and start monetizing it
                </p>
                <div className="mb-8">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Mail size={64} className="text-blue-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-white">Send us a message</h4>
                  <a href="mailto:info@Monetize360.global" className="text-xl text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    info@Monetize360.global
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Website to monetize
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Monthly earnings
                    </label>
                    <input
                      type="text"
                      name="earnings"
                      value={formData.earnings}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Leave us a message
                    </label>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <motion.label
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          formData.services.mcm
                            ? 'bg-green-500/10 border-green-500'
                            : 'bg-gray-800 border-gray-700 hover:border-green-500/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.mcm}
                          onChange={() => handleCheckboxChange('mcm')}
                          className="w-5 h-5 text-green-500 bg-gray-900 border-gray-700 rounded focus:ring-green-500"
                        />
                        <span className="text-gray-300 flex items-center space-x-2">
                          <Share2 size={18} className="text-green-400" />
                          <span>MCM Invite</span>
                        </span>
                      </motion.label>

                      <motion.label
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          formData.services.ivt
                            ? 'bg-red-500/10 border-red-500'
                            : 'bg-gray-800 border-gray-700 hover:border-red-500/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.ivt}
                          onChange={() => handleCheckboxChange('ivt')}
                          className="w-5 h-5 text-red-500 bg-gray-900 border-gray-700 rounded focus:ring-red-500"
                        />
                        <span className="text-gray-300 flex items-center space-x-2">
                          <Shield size={18} className="text-red-400" />
                          <span>IVT Protection</span>
                        </span>
                      </motion.label>

                      <motion.label
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          formData.services.hb
                            ? 'bg-yellow-500/10 border-yellow-500'
                            : 'bg-gray-800 border-gray-700 hover:border-yellow-500/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.hb}
                          onChange={() => handleCheckboxChange('hb')}
                          className="w-5 h-5 text-yellow-500 bg-gray-900 border-gray-700 rounded focus:ring-yellow-500"
                        />
                        <span className="text-gray-300 flex items-center space-x-2">
                          <Zap size={18} className="text-yellow-400" />
                          <span>HB Tech</span>
                        </span>
                      </motion.label>

                      <motion.label
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          formData.services.consulting
                            ? 'bg-purple-500/10 border-purple-500'
                            : 'bg-gray-800 border-gray-700 hover:border-purple-500/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.consulting}
                          onChange={() => handleCheckboxChange('consulting')}
                          className="w-5 h-5 text-purple-500 bg-gray-900 border-gray-700 rounded focus:ring-purple-500"
                        />
                        <span className="text-gray-300 flex items-center space-x-2">
                          <Users size={18} className="text-purple-400" />
                          <span>Consulting</span>
                        </span>
                      </motion.label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
