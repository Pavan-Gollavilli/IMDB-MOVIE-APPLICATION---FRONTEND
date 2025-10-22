import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Movie App</h3>
            <p className="text-gray-400">Your ultimate destination for movie discovery and entertainment.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Movies</a></li>
              <li><a href="#" className="hover:text-white">TV Shows</a></li>
              <li><a href="#" className="hover:text-white">Watchlist</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest movie updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l border-0 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Movie App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer