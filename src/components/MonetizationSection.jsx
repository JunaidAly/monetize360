import { ArrowRight, MessageCircle, TrendingUp, DollarSign, BarChart3, Users } from 'lucide-react'

function MonetizationSection() {
  return (
    <section className="relative py-20 px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Top monetization solutions for your{' '}
              <span className="text-blue-400">online content</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Start making more money from your properties! With IkzAi's proprietary tech and years of experience,
              you'll earn more than ever before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Register for MCM MA</span>
                <ArrowRight size={20} />
              </button>

              <button className="border border-gray-600 hover:border-blue-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10 flex items-center justify-center space-x-2">
                <MessageCircle size={20} />
                <span>Speak with us</span>
              </button>
            </div>
          </div>

          {/* Right Stats/Features */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <TrendingUp className="text-blue-400" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">250%</h3>
              <p className="text-gray-400">Revenue Increase</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Users className="text-purple-400" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">10K+</h3>
              <p className="text-gray-400">Active Users</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <DollarSign className="text-green-400" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">$2M+</h3>
              <p className="text-gray-400">Generated Revenue</p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <BarChart3 className="text-orange-400" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MonetizationSection