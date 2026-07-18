import { Facebook, Twitter, Linkedin, Github , Instagram } from "lucide-react";
import { Link } from "react-router-dom";


export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b1f] py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-sky-400">
                <span className="text-white font-bold text-sm">PL</span>
              </div>
              <h3 className="text-lg font-semibold">Phonalynx AI</h3>
            </div>
            <p className="text-sm text-slate-400">
              Empowering professionals to create perfect resumes with AI-powered analysis and optimization.
            </p>
          </div>

          <div>
  <h4 className="font-semibold mb-4">Product</h4>
  <ul className="space-y-2 text-sm text-slate-400">
    <li>
      <Link to="/features-page" className="hover:text-white transition-colors">
        Features
      </Link>
    </li>
  </ul>
</div>

<div>
  <h4 className="font-semibold mb-4">Support</h4>
  <ul className="space-y-2 text-sm text-slate-400">
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
              <a href="https://www.linkedin.com/in/kalliudaykiran/" className="text-slate-400 transition-colors hover:text-cyan-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/UdaykiranKalli" className="text-slate-400 transition-colors hover:text-cyan-200">
                <Github className="h-5 w-5" />
              </a>
               <a href="https://www.instagram.com/phonalynx/" className="text-slate-400 transition-colors hover:text-cyan-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 Phanolynx Resume Analyzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
