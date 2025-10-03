import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What is Monetize 360?",
      answer: "Monetize 360 is an advertising platform that specializes in providing header bidding solutions and serving as an intermediary (MCM) to connect publishers with other MCM companies to maximize ad revenue."
    },
    {
      question: "How monetize 360help publishers?",
      answer: "Monetize 360 helps publishers by optimizing ad placements through header bidding technology, ensuring higher fill rates and maximizing revenue through strategic partnerships with other MCM companies."
    },
    {
      question: "How can I become a partner with monetize 360?",
      answer: "To become a partner with Monetize 360, you can contact their sales team through their website or email. You will need to provide information about your website, traffic, and current advertising setup for evaluation."
    },
    {
      question: "Is there a minimum traffic requirement to partner with Monetize 360?",
      answer: "Yes, Monetize 360 typically requires a minimum traffic threshold to ensure effective monetization. This requirement may vary depending on the niche and quality of your traffic."
    },
    {
      question: "What is header bidding, and how does it work with Monetize 360?",
      answer: "Header bidding is an advanced programmatic advertising technique where multiple ad exchanges bid on your inventory in real-time. Monetize 360 integrates this technology to ensure you get the highest possible bids for your ad space."
    },
    {
      question: "How often are payments made?",
      answer: "Payments are typically made on a net-30 or net-60 basis, depending on the terms agreed upon in your partnership agreement."
    }
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300"
              variants={itemVariants}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-cyan-500 flex-shrink-0" size={24} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
