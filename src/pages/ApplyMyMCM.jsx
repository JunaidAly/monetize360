import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'

function ApplyMyMCM() {
  const [isLoading, setIsLoading] = useState(true)

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
          <div className="w-full max-w-4xl relative" style={{ minHeight: '2292px' }}>
            {/* Shimmer Loading Effect */}
            {isLoading && (
              <div className="absolute inset-0 bg-white rounded-lg shadow-2xl z-10 overflow-hidden" style={{ height: '2292px' }}>
                <div className="p-8 space-y-6">
                  {/* Header shimmer */}
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded-lg w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>

                  {/* Form fields shimmer */}
                  {[...Array(8)].map((_, index) => (
                    <div key={index} className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                      <div className="h-12 bg-gray-200 rounded-lg w-full animate-pulse"></div>
                    </div>
                  ))}

                  {/* Large text area shimmer */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                    <div className="h-32 bg-gray-200 rounded-lg w-full animate-pulse"></div>
                  </div>

                  {/* Button shimmer */}
                  <div className="h-12 bg-blue-200 rounded-full w-32 animate-pulse"></div>
                </div>

                {/* Shimmer overlay effect */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              </div>
            )}

            {/* Iframe */}
            <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSexuxU5UXEAQFevJwVinCS1bRfKRrwb3vL4CRgPOs8JBn2_DQ/viewform?embedded=true"
                width="100%"
                height="2292"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? 'none' : 'block' }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ApplyMyMCM
