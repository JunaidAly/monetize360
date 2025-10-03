import { motion } from 'framer-motion'
import {
  Globe,
  Users,
  Building2,
  DollarSign,
  Target,
  Lightbulb,
  Heart,
  Shield,
  Handshake,
  TrendingUp,
  Star,
  Award
} from 'lucide-react'

function About() {
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

  const statistics = [
    {
      id: 1,
      icon: Globe,
      number: "50+",
      title: "Countries served",
      description: "We are happy to be able to onboard publishers in any non-sanctioned region of the world",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Users,
      number: "10+",
      title: "Team Members",
      description: "We're not a big team by any means - but we always work hard, play hard, and most importantly, get the job done.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Building2,
      number: "400+",
      title: "Active publishers",
      description: "Several hundreds of website & app owners choose to monetize with Monetize 360 - that's the statistic we are definitely proudest of!",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: DollarSign,
      number: "40m+",
      title: "Revenue generated",
      description: "It's true - our publishers have cumulatively earned almost 75 million USD with the use of our monetization solutions.",
      color: "from-orange-500 to-red-500"
    }
  ]

  const values = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Innovativeness",
      description: "We strive to stay at the forefront of the AdTech industry, constantly exploring new technologies and methodologies to enhance our service offerings and deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      icon: Heart,
      title: "Client centricity",
      description: "Our clients are at the heart of everything we do. We prioritize understanding their unique needs and challenges, ensuring that our solutions are tailored to deliver maximum value and success.",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      icon: Shield,
      title: "Accountability",
      description: "We take full responsibility for our actions and commitments. Our team is dedicated to delivering on our promises and maintaining the highest standards of reliability and trustworthiness.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 4,
      icon: Handshake,
      title: "Integrity",
      description: "We conduct all our business dealings with complete honesty and transparency. Our ethical approach builds long-lasting relationships and establishes us as a trusted partner in the industry.",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <motion.div
      className="min-h-screen bg-black text-white pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className="relative py-24 px-8" variants={containerVariants}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.p
              className="text-2xl md:text-3xl text-blue-400 font-semibold mb-2"
              variants={itemVariants}
            >
              Get to know us
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl text-gray-300"
              variants={itemVariants}
            >
              The monetization magicians behind your success
            </motion.p>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            variants={itemVariants}
          >
            ABOUT
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Monetize 360
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Revenue rangers, ad alchemists - well, you get the point. We love AdTech and we are highly skilled at it. We earn more when you do - so our goals are absolutely obvious.
          </motion.p>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={containerVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-black mb-4"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Our Impact
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Numbers that speak for themselves
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.id}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center transition-all duration-300 relative overflow-hidden cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background Pattern */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>

                    {/* Number */}
                    <motion.h3
                      className={`text-5xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.h3>

                    {/* Title */}
                    <motion.h4
                      className="text-xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {stat.title}
                    </motion.h4>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {stat.description}
                    </motion.p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-20 px-8"
        variants={containerVariants}
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

            <div className="relative text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-black mb-8"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </motion.h2>
              <motion.p
                className="text-2xl md:text-3xl text-white font-bold mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Empowering Publishers Worldwide
              </motion.p>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                variants={itemVariants}
              >
                At Monetize 360, we're dedicated to democratizing premium ad monetization by providing publishers of all sizes with access to enterprise-level advertising technology. We believe that every content creator deserves the opportunity to maximize their revenue potential through innovative, transparent, and ethical monetization solutions.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={containerVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-black mb-4"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.id}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, y: -8 }}
                  whileTap={{ scale: 0.97 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background Pattern */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-6`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-24 px-8"
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
              Ready to Work Together?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Give us a shot; we don't do lock-ins, so you can leave whenever you'd like (but we bet you won't want to)!
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
                <Users size={20} />
                <span>Join Our Network</span>
              </motion.button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.button
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp size={20} />
                <span>Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default About