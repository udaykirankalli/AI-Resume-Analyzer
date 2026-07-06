import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Target, 
  Shield, 
  BarChart3, 
  FileText, 
  CheckCircle, 
  Eye, 
  Sparkles, 
  Download,
  Clock,
  Globe,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your resume content, structure, and formatting for maximum impact.",
      color: "from-yellow-500 to-orange-500",
      benefits: ["Deep content analysis", "Smart recommendations", "Industry-specific insights"]
    },
    {
      icon: Target,
      title: "ATS Optimization",
      description: "Ensure your resume passes through Applicant Tracking Systems with our comprehensive ATS compatibility checks.",
      color: "from-blue-500 to-cyan-500",
      benefits: ["Keyword optimization", "Format compatibility", "Parsing accuracy"]
    },
    {
      icon: Eye,
      title: "Visual Enhancement",
      description: "Professional formatting and layout improvements that make your resume visually appealing and easy to read.",
      color: "from-purple-500 to-pink-500",
      benefits: ["Clean layouts", "Professional fonts", "Optimal spacing"]
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "Get detailed scoring and analytics on your resume's performance across multiple criteria.",
      color: "from-green-500 to-emerald-500",
      benefits: ["ATS score", "Readability index", "Keyword density"]
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your personal information is encrypted and secure. We never store or share your resume data.",
      color: "from-gray-600 to-gray-800",
      benefits: ["End-to-end encryption", "No data storage", "GDPR compliant"]
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get your enhanced resume and detailed analysis in seconds, not hours or days.",
      color: "from-indigo-500 to-purple-500",
      benefits: ["Real-time processing", "Immediate feedback", "Quick iterations"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Analyze and enhance resumes in multiple languages with localized best practices."
    },
    {
      icon: Award,
      title: "Industry Templates",
      description: "Access professionally designed templates tailored for different industries."
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Download your enhanced resume in PDF, DOCX, or other popular formats."
    },
    {
      icon: Sparkles,
      title: "Content Suggestions",
      description: "Get AI-generated content suggestions to improve your resume descriptions."
    }
  ];

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover the comprehensive suite of AI-powered tools designed to transform your resume into a job-winning document
              </p>
            </div>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Additional Features */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Additional <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center p-6 backdrop-blur-sm bg-white/20 rounded-xl border border-white/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">ResumeAI</span>?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full backdrop-blur-sm bg-white/20 rounded-xl border border-white/30">
                <thead>
                  <tr className="border-b border-white/30">
                    <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center p-6 font-semibold text-blue-600">ResumeAI</th>
                    <th className="text-center p-6 font-semibold text-gray-600">Traditional Tools</th>
                    <th className="text-center p-6 font-semibold text-gray-600">Manual Review</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/20">
                    <td className="p-6 text-gray-800">AI-Powered Analysis</td>
                    <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><span className="text-red-500">✕</span></td>
                    <td className="p-6 text-center"><span className="text-red-500">✕</span></td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="p-6 text-gray-800">ATS Optimization</td>
                    <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-yellow-500 mx-auto" /></td>
                    <td className="p-6 text-center"><span className="text-red-500">✕</span></td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="p-6 text-gray-800">Instant Results</td>
                    <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-yellow-500 mx-auto" /></td>
                    <td className="p-6 text-center"><span className="text-red-500">Hours/Days</span></td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-800">Personalized Insights</td>
                    <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto" /></td>
                    <td className="p-6 text-center"><span className="text-red-500">✕</span></td>
                    <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-yellow-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Experience All Features Today
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Transform your resume with our comprehensive AI-powered platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-6 text-lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Try All Features Free
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-md bg-white/30 border border-white/50 px-8 py-6 text-lg">
                  <FileText className="mr-2 h-5 w-5" />
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}