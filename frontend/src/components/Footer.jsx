import { Facebook, Twitter, Linkedin, Github , Instagram } from "lucide-react";
import { Link } from "react-router-dom";


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PL</span>
              </div>
              <h3 className="text-lg font-semibold">Phonalynx AI</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering professionals to create perfect resumes with AI-powered analysis and optimization.
            </p>
          </div>

          <div>
  <h4 className="font-semibold mb-4">Product</h4>
  <ul className="space-y-2 text-sm text-gray-400">
    <li>
      <Link to="/features-page" className="hover:text-white transition-colors">
        Features
      </Link>
    </li>
  </ul>
</div>

<div>
  <h4 className="font-semibold mb-4">Support</h4>
  <ul className="space-y-2 text-sm text-gray-400">
    <li>
      <Link to="/help-center" className="hover:text-white transition-colors">
        Help Center
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-white transition-colors">
        Contact Us
      </Link>
    </li>
    <li>
      <Link to="/privacy-policy" className="hover:text-white transition-colors">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link to="/terms-of-service" className="hover:text-white transition-colors">
        Terms of Service
      </Link>
    </li>
  </ul>
</div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/kalliudaykiran/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/UdaykiranKalli" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
               <a href="https://www.instagram.com/phonalynx/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Phanolynx Resume Analyzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
