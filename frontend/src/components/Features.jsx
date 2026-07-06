// src/components/Features.jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Target, Zap, Shield, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "ATS Optimization",
      description:
        "Ensure your resume passes Applicant Tracking Systems with our advanced scanning technology.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Keyword Analysis",
      description:
        "Identify missing keywords and optimize your resume for specific job descriptions.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Instant Feedback",
      description:
        "Get real-time suggestions to improve your resume's impact and readability.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Score Tracking",
      description:
        "Monitor your resume's performance with detailed scoring and analytics.",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "Industry Specific",
      description:
        "Tailored recommendations based on your target industry and role.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Privacy First",
      description: "Your data is secure and private. We never share your information.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background shapes stay same */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-20 w-24 h-32 bg-blue-50/60 rounded-lg shadow-[0_20px_50px_rgba(59,130,246,0.08)] rotate-45"
          style={{
            transform:
              "perspective(1000px) rotateY(-20deg) rotateX(10deg) translateZ(5px)",
          }}
        ></div>
        <div
          className="absolute top-32 right-16 w-28 h-36 bg-purple-50/50 rounded-lg shadow-[0_18px_45px_rgba(147,51,234,0.06)] -rotate-12"
          style={{
            transform:
              "perspective(1000px) rotateY(15deg) rotateX(-8deg) translateZ(8px)",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-12 w-32 h-20 bg-green-50/40 rounded-lg shadow-[0_15px_40px_rgba(34,197,94,0.05)] rotate-6"
          style={{
            transform:
              "perspective(1000px) rotateY(-12deg) rotateX(6deg) translateZ(3px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative z-10">
              Powerful Features for Resume Success
            </h2>
            <div className="absolute inset-0 bg-white/40 rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.06)] translate-y-1 translate-x-1 -z-10"></div>
          </div>

          <div className="relative inline-block">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto relative z-10">
              Our AI-powered platform provides comprehensive analysis and optimization tools to help you create the perfect resume.
            </p>
            <div className="absolute inset-0 bg-gray-50/30 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.03)] translate-y-0.5 -z-10"></div>
          </div>
        </div>

        {/* Features grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1000px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 8, rotateX: -4, y: -10 }}
              whileTap={{ scale: 0.95, rotateY: 0, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card
                className="backdrop-blur-md bg-white/60 border border-gray-200/60 
                           hover:shadow-[0_25px_60px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)] 
                           transition-all duration-500 relative group"
                style={{
                  boxShadow:
                    "0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-lg pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-gray-100/40 rotate-45 translate-x-3 -translate-y-3 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.1)] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>

                <CardHeader className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="relative inline-block">
                      {feature.icon}
                      <div className="absolute inset-0 blur-md opacity-30 translate-y-1">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl relative">
                    {feature.title}
                    <div className="absolute inset-0 text-gray-300/50 translate-x-0.5 translate-y-0.5 -z-10">
                      {feature.title}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 relative">
                    {feature.description}
                    <div className="absolute inset-0 text-gray-200/30 translate-x-0.5 translate-y-0.5 -z-10">
                      {feature.description}
                    </div>
                  </CardDescription>
                </CardContent>

                <div className="absolute -bottom-2 left-2 right-2 h-4 bg-black/5 rounded-lg blur-md transform group-hover:scale-110 group-hover:translate-y-1 transition-all duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Extra floating shape */}
        <div
          className="absolute bottom-32 right-20 w-16 h-24 bg-yellow-50/30 rounded-lg shadow-[0_12px_35px_rgba(234,179,8,0.08)]"
          style={{
            transform:
              "perspective(1000px) rotateY(25deg) rotateX(-12deg) translateZ(4px)",
          }}
        ></div>
      </div>
    </section>
  );
}
