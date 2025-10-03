import { motion } from 'framer-motion'
import { Globe, Smartphone, Zap } from 'lucide-react'

function WorkWithUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      icon: Globe,
      title: "Website Monetization",
      description: "Optimize your website's ad revenue with our advanced programmatic ad solutions.",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50"
    },
    {
      icon: Smartphone,
      title: "App Monetization",
      description: "Monetize your mobile apps efficiently with Montize 360s innovative ad solutions.",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/50"
    },
    {
      icon: Zap,
      title: "Header Bidding And Ortb Integration",
      description: "Tailored ad monetization strategies to suit your specific needs and maximize your earnings.",
      gradient: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/50"
    }
  ]

  return (
    <section className="py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Here is what you can get{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              working with us
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group bg-gradient-to-br from-gray-900 to-black border ${service.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} w-fit mb-6`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkWithUsSection
