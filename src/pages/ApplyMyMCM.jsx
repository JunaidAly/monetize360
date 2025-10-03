import { motion } from 'framer-motion'
import SEO from '../components/SEO'

function ApplyMyMCM() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
      <SEO
        title="Apply for MCM - Monetize360 Global"
        description="Fill out the form to get your MCM MI/MA invite and start monetizing your content."
        keywords="MCM application, content monetization, MCM invite, Monetize360"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MCM Application
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Fill out the form on this page to get your MCM MI/MA invite!
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSexuxU5UXEAQFevJwVinCS1bRfKRrwb3vL4CRgPOs8JBn2_DQ/viewform?embedded=true"
              width="100%"
              height="2292"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ApplyMyMCM
