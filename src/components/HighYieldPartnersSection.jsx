import { motion } from 'framer-motion'

function HighYieldPartnersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const partners = [
    { id: 1, name: 'Adbumps', image: '/assets/partners/1.jpg' },
    { id: 2, name: 'AdSparc', image: '/assets/partners/2.jpg' },
    { id: 3, name: 'Zoklent', image: '/assets/partners/4.png' },
    { id: 4, name: 'MGID', image: '/assets/partners/3.png' },   
  ]

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              High Yield Partners
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            You get high-demand partners.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center p-10 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={logoVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-full h-auto object-contain max-h-40"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HighYieldPartnersSection
