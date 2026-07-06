import { Shield, Lock, Eye, Database, Users, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          details: "When you create an account, we collect your name, email address, and password. We may also collect billing information if you subscribe to our paid services."
        },
        {
          subtitle: "Resume Data",
          details: "We process the content of resumes you upload for analysis. This includes text, formatting, and structural information."
        },
        {
          subtitle: "Usage Information",
          details: "We collect information about how you use our service, including features accessed, time spent, and interaction patterns."
        },
        {
          subtitle: "Technical Information",
          details: "We automatically collect IP addresses, browser type, device information, and other technical data for security and optimization purposes."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          details: "We use your information to provide resume analysis, generate recommendations, and deliver our core services."
        },
        {
          subtitle: "Improvement and Analytics",
          details: "We analyze usage patterns to improve our AI algorithms and enhance user experience."
        },
        {
          subtitle: "Communication",
          details: "We may send you service updates, security alerts, and marketing communications (which you can opt out of)."
        },
        {
          subtitle: "Legal Compliance",
          details: "We may use your information to comply with legal obligations and protect our rights and those of our users."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption",
          details: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption."
        },
        {
          subtitle: "Access Controls",
          details: "We implement strict access controls and authentication measures to protect your data."
        },
        {
          subtitle: "Regular Audits",
          details: "Our security practices are regularly audited by third-party security firms."
        },
        {
          subtitle: "Data Retention",
          details: "Resume content is automatically deleted after analysis unless you explicitly save it to your account."
        }
      ]
    },
    {
      title: "Sharing and Disclosure",
      icon: Users,
      content: [
        {
          subtitle: "No Sale of Personal Data",
          details: "We never sell your personal information or resume content to third parties."
        },
        {
          subtitle: "Service Providers",
          details: "We may share limited data with trusted service providers who help us operate our service, under strict confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          details: "We may disclose information when required by law or to protect our rights and the rights of our users."
        },
        {
          subtitle: "Business Transfers",
          details: "In the event of a merger or acquisition, your information may be transferred as part of the transaction."
        }
      ]
    }
  ];

  const rights = [
    "Access your personal data and obtain a copy",
    "Rectify inaccurate or incomplete data",
    "Erase your personal data under certain circumstances",
    "Restrict processing of your data",
    "Data portability - receive your data in a machine-readable format",
    "Object to processing based on legitimate interests",
    "Withdraw consent where processing is based on consent"
  ];

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Privacy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-gray-600 mt-4">Last updated: January 1, 2024</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              ResumeAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our resume analysis service. Please read this policy 
              carefully to understand our practices regarding your personal data.
            </p>
          </div>

          {/* Main Sections */}
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Your Rights */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3">
              {rights.map((right, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{right}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise any of these rights, please contact us at privacy@resumeai.com.
            </p>
          </div>

          {/* Data Retention */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Account Data</h3>
                <p className="text-gray-700">We retain your account information for as long as you maintain an active account with us.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Resume Content</h3>
                <p className="text-gray-700">Resume content is deleted immediately after analysis unless you save it to your account.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Usage Analytics</h3>
                <p className="text-gray-700">Anonymized usage data may be retained for up to 2 years for service improvement purposes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                <p className="text-gray-700">Some data may be retained longer if required by law or for legitimate business purposes.</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> phonalynx@gmail.com</p>
              <p><strong>Phone:</strong> +91 9849492822</p>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" 
              date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}