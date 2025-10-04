import { Heart, Code, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Monetize360 Global</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses with cutting-edge technology and creative excellence.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <Mail size={16} />
              <span>info@monetize360.global</span>
            </div>
            {/* <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <span>123 Tech Street, Innovation City</span>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/apply-my-mcm" className="text-gray-300 hover:text-blue-400 transition-colors">Apply MCM</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-2">
              <li className=' text-gray-300'>App Monetization</li>
              <li className=' text-gray-300'>Website Monetization</li>
              <li className=' text-gray-300'>Ad Exchange ORTB Integration</li>
              <li className=' text-gray-300'>MCM</li>
              <li className=' text-gray-300'>MCM MI Invites</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2024 Monetize360 Global. All rights reserved.</span>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer