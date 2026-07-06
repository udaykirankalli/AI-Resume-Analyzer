import { Scale, FileText, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: "By accessing and using ResumeAI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Description of Service",
      icon: FileText,
      content: "ResumeAI provides AI-powered resume analysis and optimization services. Our platform analyzes resume content, structure, and formatting to provide recommendations for improvement and ATS compatibility."
    },
    {
      title: "User Accounts",
      icon: Shield,
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
    },
    {
      title: "Prohibited Uses",
      icon: XCircle,
      content: "You may not use our service for any unlawful purpose, to upload malicious content, to attempt to gain unauthorized access to our systems, or to interfere with the proper working of our service."
    }
  ];

  const serviceTerms = [
    {
      title: "Service Availability",
      details: "We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance."
    },
    {
      title: "Data Processing",
      details: "Resume content is processed by our AI systems for analysis. Content is not stored permanently unless you save it to your account."
    },
    {
      title: "Accuracy Disclaimer",
      details: "While our AI provides recommendations based on best practices, we cannot guarantee specific job search outcomes."
    },
    {
      title: "Usage Limits",
      details: "Free accounts have monthly usage limits. Paid plans offer increased limits and additional features."
    }
  ];

  const paymentTerms = [
    "All fees are non-refundable except as required by law",
    "Subscriptions automatically renew unless cancelled",
    "Price changes will be communicated 30 days in advance",
    "Taxes may apply based on your location",
    "Payment processing is handled by secure third-party providers"
  ];

  const intellectualProperty = [
    "ResumeAI retains all rights to our software, algorithms, and platform",
    "You retain ownership of your resume content",
    "Our analysis and recommendations are provided under license",
    "You may not reverse engineer or copy our service",
    "Trademarks and logos are property of their respective owners"
  ];

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Terms of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Please read these terms carefully before using our service. These terms govern your use of ResumeAI.
              </p>
              <p className="text-gray-600 mt-4">Effective Date: January 1, 2024</p>
            </div>
          </div>

          {/* Main Terms Sections */}
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            );
          })}

          {/* Service Terms */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceTerms.map((term, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30">
                  <h3 className="font-semibold text-gray-900 mb-2">{term.title}</h3>
                  <p className="text-gray-700 text-sm">{term.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Terms */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
            <ul className="space-y-3">
              {paymentTerms.map((term, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <ul className="space-y-3">
              {intellectualProperty.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                ResumeAI provides its service "as is" without warranties of any kind. We do not guarantee that our 
                service will meet your specific requirements or that the operation of our service will be uninterrupted or error-free.
              </p>
              <p>
                In no event shall ResumeAI be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p>
                Our total liability to you for any claim arising out of or relating to these terms or our service shall 
                not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">By You</h3>
                <p className="text-gray-700">You may terminate your account at any time by contacting us or using the account deletion feature in your dashboard.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">By Us</h3>
                <p className="text-gray-700">We may suspend or terminate your account if you violate these terms or engage in prohibited activities.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Effect of Termination</h3>
                <p className="text-gray-700">Upon termination, your access to the service will cease and your data will be deleted according to our privacy policy.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Survival</h3>
                <p className="text-gray-700">Certain provisions of these terms will survive termination, including intellectual property rights and limitation of liability.</p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Disputes</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                These terms shall be governed by and construed in accordance with the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising out of or relating to these terms or our service shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                You waive any right to participate in a class action lawsuit or class-wide arbitration against ResumeAI.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Material changes will be communicated to users 
              via email or through our service. Continued use of our service after changes constitutes acceptance of 
              the new terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> Phanolynx@gmail.com</p>
              <p><strong>Address:</strong> Hyderabad</p>
              <p><strong>Phone:</strong> +91 9849492822</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}