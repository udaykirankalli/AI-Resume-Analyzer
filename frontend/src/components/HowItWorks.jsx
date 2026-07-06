import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Upload,
  CheckCircle,
  Zap,
  Award,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                How It{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Works
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Transform your resume in 3 simple steps with the power of artificial intelligence
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold text-lg">Step 1</span>
                      <h2 className="text-3xl font-bold text-gray-900">Upload Your Resume</h2>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Simply drag and drop your existing resume or upload it from your device.
                    We support all major formats including PDF, DOC, and DOCX files.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Supports PDF, DOC, DOCX formats
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Secure file processing
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Instant text extraction
                    </li>
                  </ul>
                </div>
                <div className="backdrop-blur-sm bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl p-8 border border-white/30">
                  <div className="w-full h-64 bg-white/20 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
                    <div className="text-center">
                      <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <p className="text-blue-600 font-semibold">Drag & Drop Your Resume</p>
                      <p className="text-gray-600 text-sm">or click to browse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="backdrop-blur-sm bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-8 border border-white/30">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/30 rounded-lg">
                        <span className="text-gray-700">ATS Compatibility</span>
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="w-14 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-green-600 font-semibold">94%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/30 rounded-lg">
                        <span className="text-gray-700">Keyword Match</span>
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-blue-600 font-semibold">87%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/30 rounded-lg">
                        <span className="text-gray-700">Content Quality</span>
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="w-15 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-purple-600 font-semibold">91%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-purple-600 font-semibold text-lg">Step 2</span>
                      <h2 className="text-3xl font-bold text-gray-900">AI Analysis</h2>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Our advanced AI algorithms analyze your resume across multiple dimensions,
                    checking for ATS compatibility, keyword optimization, and content quality.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Content structure analysis
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      ATS compatibility check
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Industry-specific optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-green-600 font-semibold text-lg">Step 3</span>
                      <h2 className="text-3xl font-bold text-gray-900">Get Enhanced Resume</h2>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Receive your optimized resume with detailed insights, recommendations,
                    and a professional format that stands out to recruiters and ATS systems.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Professional formatting
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Detailed improvement suggestions
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Multiple download formats
                    </li>
                  </ul>
                </div>
                <div className="backdrop-blur-sm bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-2xl p-8 border border-white/30">
                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">Enhanced Resume Analysis</h3>
                      <div className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Ready</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600">
                      Get Enhanced Resume Analysis
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* CTA Section */}
<div className="text-center mt-16">
  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Ready to Transform Your Resume?
    </h2>
    <p className="text-xl text-gray-700 mb-8">
      Join thousands of professionals who have enhanced their careers with AI
    </p>
    <Link to="/analyze">
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-6 text-lg inline-flex items-center"
      >
        <Upload className="mr-2 h-5 w-5" />
        Start Your Analysis Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Link>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
