import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          onError={(e) => {
            console.error("Video failed to load:", e);
          }}
          onLoadStart={() => console.log("Video loading started")}
          onCanPlay={() => console.log("Video can play")}
          onPlay={() => console.log("Video is playing")}
        >
          <source src="/assets/Base2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-5"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-8 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mt-28 leading-tight tracking-tight text-white drop-shadow-2xl"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          CHOOSE THE IDEAL PARTNER FOR MONETIZING YOUR ONLINE CONTENT TO THRIVE
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl mb-8 max-w-xl mx-auto font-light leading-relaxed text-gray-100 drop-shadow-lg"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Monetize 360 boasts proprietary technologies, our team of media
          scientists developed, to deliver the finest advertising solutions.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.button
            className="border-2 border-white bg-black/30 backdrop-blur-sm mb-10 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-2xl hover:shadow-white/25"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Smartphone size={18} />
            <span>REGISTER FOR MCM Network</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection