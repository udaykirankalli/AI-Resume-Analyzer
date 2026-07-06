
import { Button } from "./ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Phonalynx AI
            </span>
          </div>

{/* Navigation */}
<nav className="hidden md:flex items-center space-x-8">
  <Link to="/how-it-works" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
    How it Works
  </Link>
  <Link to="/features-page" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
    Features
  </Link>
  <Link to="/about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
    About
  </Link>
</nav>


          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* ✅ Use asChild for proper routing without refreshing */}
            <Link to="/analyze">
              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/30 border border-white/50 hover:bg-white/50 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.08)] text-gray-800"
              >
                Analyze
              </Button>
            </Link>

            <Link to="/register">
              <Button className="backdrop-blur-md bg-gradient-to-r from-blue-500/90 to-purple-600/90 border border-white/30 hover:from-blue-600/90 hover:to-purple-700/90 transition-all duration-300 shadow-[0_8px_25px_rgba(59,130,246,0.25)] text-white">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
