import { motion } from 'framer-motion'

function PaymentOptionsSection() {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Supported Payment Options
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Monetize prioritizes simplicity and efficiency in payment processing. Here are our three supported payment systems below.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/assets/supportpayment.png"
              alt="Supported Payment Options - Payoneer, Bitcoin, Tether, Bank Transfer, WebMoney"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PaymentOptionsSection
