import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, FileText, Mail, Phone, MessageCircle, ChevronRight, CheckCircle } from "lucide-react";

export default function HelpCenterPage() {
  const categories = [
    {
      icon: FileText,
      title: "Resume Analysis",
      description: "Learn how our AI analyzes and improves your resume",
      articles: 12,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "Account & Billing",
      description: "Manage your subscription and payment information",
      articles: 8,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: HelpCircle,
      title: "Getting Started",
      description: "First steps to optimize your resume with ResumeAI",
      articles: 15,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Technical Support",
      description: "Troubleshooting and technical assistance",
      articles: 6,
      color: "from-orange-500 to-red-500"
    }
  ];

  const popularArticles = [
    {
      title: "How does the AI resume analysis work?",
      views: "12.3k views",
      category: "Resume Analysis"
    },
    {
      title: "What file formats are supported?",
      views: "8.7k views",
      category: "Getting Started"
    },
    {
      title: "How to cancel my subscription?",
      views: "6.2k views",
      category: "Account & Billing"
    },
    {
      title: "ATS optimization explained",
      views: "15.1k views",
      category: "Resume Analysis"
    },
    {
      title: "My resume won't upload - troubleshooting",
      views: "4.8k views",
      category: "Technical Support"
    },
    {
      title: "Understanding your resume score",
      views: "9.5k views",
      category: "Resume Analysis"
    }
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "Send Email",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance (Pro+ only)",
      action: "Call Now",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                Help <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Center</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Find answers to common questions and get the support you need
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for help articles..."
                  className="pl-12 py-6 text-lg backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Browse by <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{category.articles} articles</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Popular <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 backdrop-blur-sm bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200 cursor-pointer">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Still Need <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Help?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <div key={index} className="text-center backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
                    <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-700 mb-4">{option.description}</p>
                    <Button className={`bg-gradient-to-r ${option.color} text-white w-full`}>
                      {option.action}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Quick <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Tips</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Upload in PDF format</h4>
                    <p className="text-gray-600 text-sm">PDF files maintain formatting and provide the best analysis results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Use clear file names</h4>
                    <p className="text-gray-600 text-sm">Name your files clearly for easy identification and tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Review all suggestions</h4>
                    <p className="text-gray-600 text-sm">Take time to review and implement our AI recommendations</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Keep it updated</h4>
                    <p className="text-gray-600 text-sm">Regularly update your resume with new skills and experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Test multiple versions</h4>
                    <p className="text-gray-600 text-sm">Try different versions to see which performs better</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Use keywords wisely</h4>
                    <p className="text-gray-600 text-sm">Include relevant industry keywords naturally in your content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}