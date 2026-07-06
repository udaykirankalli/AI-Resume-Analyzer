// src/components/Hero.jsx
import { Button } from "./ui/button";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen bg-transparent pt-20 pb-16 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center pt-32">
            {/* Main Card with Motion */}
            <motion.div
              className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ rotateY: 6, rotateX: -4, y: -10 }}
              whileTap={{ scale: 0.97, rotateY: 0, rotateX: 0 }}
              style={{ transform: "perspective(1000px)" }}
            >
              {/* Tagline */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md text-blue-800 px-6 py-3 rounded-full font-medium mb-6 border border-blue-300/30">
                  <CheckCircle className="w-5 h-5" />
                  <span>AI-Powered Resume Analysis</span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transform Your Resume with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  AI Intelligence
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-2xl text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Experience the future of resume optimization. Our AI analyzes your resume in real-time, 
                providing instant feedback and enhancement suggestions to maximize your career opportunities.
              </motion.p>

              {/* Features */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { label: "Smart Analysis", color: "bg-green-500/80" },
                  { label: "ATS Ready", color: "bg-blue-500/80" },
                  { label: "Professional", color: "bg-purple-500/80" },
                  { label: "Instant Results", color: "bg-yellow-500/80" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95, rotateY: 0 }}
                    className="flex flex-col items-center space-y-3 backdrop-blur-sm bg-white/20 p-4 rounded-xl border border-white/30"
                  >
                    <div
                      className={`w-12 h-12 ${item.color} backdrop-blur-sm rounded-full flex items-center justify-center`}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <Link to="/analyze">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="backdrop-blur-md bg-gradient-to-r from-blue-500/90 to-purple-600/90 border border-white/30 
                                 hover:from-blue-600/90 hover:to-purple-700/90 transition-all duration-300 
                                 shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.4)] 
                                 text-white px-10 py-8 text-xl transform hover:-translate-y-2"
                    >
                      <Upload className="mr-3 h-6 w-6" />
                      Analyze Resume Now
                    </Button>
                  </motion.div>
                </Link>

                <Link to="/examples">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="backdrop-blur-md bg-white/30 border border-white/50 hover:bg-white/50 transition-all duration-300 
                                 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                                 px-10 py-8 text-xl text-gray-800 transform hover:-translate-y-2"
                    >
                      <FileText className="mr-3 h-6 w-6" />
                      View Examples
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex justify-center items-center space-x-12 text-lg text-gray-700"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>100,000+ Resumes Enhanced</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                  <span>99% Success Rate</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
