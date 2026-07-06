// src/components/CallToAction.jsx
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 3D Floating Papers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-16 left-16 w-20 h-28 bg-white/10 rounded-lg shadow-[0_15px_40px_rgba(255,255,255,0.1)]"
          style={{
            transform:
              "perspective(1000px) rotateY(-15deg) rotateX(8deg) translateZ(10px)",
          }}
        ></div>
        <div
          className="absolute top-32 right-24 w-24 h-32 bg-blue-300/20 rounded-lg shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
          style={{
            transform:
              "perspective(1000px) rotateY(12deg) rotateX(-5deg) translateZ(15px)",
          }}
        ></div>
        <div
          className="absolute bottom-24 left-1/4 w-28 h-20 bg-purple-300/15 rounded-lg shadow-[0_18px_45px_rgba(147,51,234,0.12)]"
          style={{
            transform:
              "perspective(1000px) rotateY(-8deg) rotateX(6deg) translateZ(8px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sparkles Icon */}
          <div className="flex justify-center mb-6 relative">
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-4 shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
            >
              <Sparkles className="h-8 w-8 text-white" />
              <div className="absolute inset-0 rounded-full bg-white/10 blur-md"></div>
            </motion.div>
          </div>

          {/* Title */}
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10">
              Ready to Transform Your Resume?
            </h2>
            <div className="absolute inset-0 bg-black/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform translate-y-2 translate-x-1 -z-10"></div>
          </div>

          {/* Subtitle */}
          <div className="relative mb-8">
            <p className="text-xl text-blue-100 max-w-2xl mx-auto relative z-10">
              Join thousands of professionals who have already improved their
              resumes and landed their dream jobs with our AI-powered analysis.
            </p>
            <div className="absolute inset-0 bg-white/5 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] transform translate-y-1 -z-10"></div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            style={{ perspective: "1000px" }}
          >
            <Link to="/analyze">
              <motion.div
                whileHover={{ y: -10, rotateY: 5, rotateX: -3 }}
                whileTap={{ scale: 0.95, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Button
                  size="lg"
                  className="backdrop-blur-md bg-white/90 text-blue-600 hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.1)] px-8 py-6 text-lg font-semibold"
                >
                  Start Analysis Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>

            <Link to="/features-page">
              <motion.div
                whileHover={{ y: -10, rotateY: -5, rotateX: -3 }}
                whileTap={{ scale: 0.95, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="backdrop-blur-md bg-transparent border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-300 shadow-[0_15px_35px_rgba(255,255,255,0.1)] px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[
              { label: "Resumes Analyzed", value: "50K+", rotation: -5 },
              { label: "Success Rate", value: "98%", rotation: 0 },
              { label: "Support Available", value: "24/7", rotation: 5 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, rotateY: item.rotation, rotateX: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              >
                <div className="text-3xl font-bold mb-2 relative">
                  {item.value}
                  <div className="absolute inset-0 text-white/30 transform translate-x-1 translate-y-1 -z-10">
                    {item.value}
                  </div>
                </div>
                <div className="text-blue-100">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
