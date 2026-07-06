import { Button } from "@/components/ui/button";
import { Eye, Download, CheckCircle, ArrowRight, Star, Briefcase } from "lucide-react";
import { Link } from "react-router-dom"; 

export default function ViewExamplesPage() {
  const examples = [
    {
      title: "Software Engineer",
      industry: "Technology",
      experience: "5+ Years",
      score: 94,
      improvements: [
        "Optimized for ATS compatibility",
        "Enhanced technical skills section",
        "Quantified achievements with metrics",
        "Added relevant project descriptions"
      ],
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Marketing Manager",
      industry: "Marketing",
      experience: "3-5 Years",
      score: 91,
      improvements: [
        "Strengthened brand management keywords",
        "Highlighted campaign success metrics",
        "Improved professional summary",
        "Added digital marketing certifications"
      ],
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Financial Analyst",
      industry: "Finance",
      experience: "2-4 Years",
      score: 89,
      improvements: [
        "Enhanced financial modeling keywords",
        "Added industry-specific achievements",
        "Optimized education section",
        "Improved technical skills presentation"
      ],
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "UX Designer",
      industry: "Design",
      experience: "4-6 Years",
      score: 92,
      improvements: [
        "Highlighted design thinking process",
        "Added portfolio link prominence",
        "Enhanced collaboration keywords",
        "Optimized creative skills section"
      ],
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Scientist",
      industry: "Technology",
      experience: "3-5 Years",
      score: 96,
      improvements: [
        "Enhanced ML/AI keywords",
        "Added Python/R proficiency details",
        "Quantified data impact metrics",
        "Improved research publications section"
      ],
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Project Manager",
      industry: "Operations",
      experience: "6+ Years",
      score: 88,
      improvements: [
        "Added PMP certification prominence",
        "Enhanced team leadership examples",
        "Quantified project success metrics",
        "Improved stakeholder management keywords"
      ],
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      color: "from-teal-500 to-green-500"
    }
  ];

  const beforeAfter = {
    before: {
      score: 67,
      issues: [
        "Poor ATS compatibility",
        "Weak keyword optimization",
        "Generic job descriptions",
        "Inconsistent formatting",
        "Missing quantified achievements"
      ]
    },
    after: {
      score: 94,
      improvements: [
        "100% ATS compatible format",
        "Industry-specific keywords",
        "Achievement-focused descriptions",
        "Professional, consistent design",
        "Quantified impact metrics"
      ]
    }
  };

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                Resume <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Examples</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore real resume transformations across different industries and experience levels
              </p>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              The <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">Transformation</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before */}
              <div className="backdrop-blur-sm bg-red-50/50 border border-red-200/50 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
                    <span className="font-semibold">Before ResumeAI</span>
                  </div>
                  <div className="text-4xl font-bold text-red-600 mb-2">{beforeAfter.before.score}/100</div>
                  <div className="text-red-600">Poor Performance</div>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.before.issues.map((issue, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-5 h-5 text-red-500 mt-0.5">✗</span>
                      <span className="text-gray-700">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="backdrop-blur-sm bg-green-50/50 border border-green-200/50 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                    <span className="font-semibold">After ResumeAI</span>
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">{beforeAfter.after.score}/100</div>
                  <div className="text-green-600">Excellent Performance</div>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.after.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500/10 to-green-500/10 px-6 py-3 rounded-full">
                <span className="text-2xl font-bold text-red-600">{beforeAfter.before.score}%</span>
                <ArrowRight className="w-6 h-6 text-gray-500" />
                <span className="text-2xl font-bold text-green-600">{beforeAfter.after.score}%</span>
                <span className="text-lg font-semibold text-gray-700">
                  +{beforeAfter.after.score - beforeAfter.before.score}% Improvement
                </span>
              </div>
            </div>
          </div>

          {/* Industry Examples */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Industry <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Examples</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {examples.map((example, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-2">
                  {/* Preview Image */}
                  <div className="relative mb-6 bg-gray-100 rounded-xl overflow-hidden h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <div className="text-gray-600 font-medium">{example.title}</div>
                        <div className="text-sm text-gray-500">Resume Preview</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${example.color} text-white rounded-full text-sm font-semibold`}>
                        Score: {example.score}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{example.industry}</span>
                      </span>
                      <span>{example.experience}</span>
                    </div>
                  </div>

                  {/* Improvements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Improvements:</h4>
                    <ul className="space-y-2">
                      {example.improvements.slice(0, 3).map((improvement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 backdrop-blur-md bg-white/30 border border-white/50">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className={`flex-1 bg-gradient-to-r ${example.color} text-white`}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Proven <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">3.2x</div>
                <div className="text-gray-700">More Interviews</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-gray-700">ATS Pass Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-gray-700">Faster Job Placement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">100k+</div>
                <div className="text-gray-700">Success Stories</div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "ResumeAI transformed my resume and I got 5 interviews in the first week!"
                </p>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Software Engineer</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Finally landed my dream job at a Fortune 500 company. The AI suggestions were spot-on!"
                </p>
                <div className="font-semibold text-gray-900">Michael R.</div>
                <div className="text-sm text-gray-600">Marketing Manager</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The ATS optimization feature is incredible. My resume now passes every screening!"
                </p>
                <div className="font-semibold text-gray-900">Jessica L.</div>
                <div className="text-sm text-gray-600">Data Scientist</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
         <div className="text-center">
  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Ready to Transform Your Resume?
    </h2>
    <p className="text-xl text-gray-700 mb-8">
      Join thousands of professionals who have enhanced their careers with ResumeAI
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/analyze">
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-6 text-lg">
          <ArrowRight className="mr-2 h-5 w-5" />
          Analyze My Resume Now
        </Button>
      </Link>
      <Button variant="outline" size="lg" className="backdrop-blur-md bg-white/30 border border-white/50 px-8 py-6 text-lg">
        <Download className="mr-2 h-5 w-5" />
        Download Sample
      </Button>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
