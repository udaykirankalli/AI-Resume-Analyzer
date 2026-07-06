import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; 
import { Users, Target, Award, Heart, Lightbulb, Globe, ArrowRight } from "lucide-react";

export default function AboutPage() {

    const team = [
    {
       name: "Uday Kiran Kalli",
    role: "AI & Full Stack Developer",
    background: "Experienced in AI, React.js and Python Full Stack Development with multiple internships and real-world projects in AI-powered systems, web applications.",
    image: "/UdayKiranKalli.jpg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate, actionable insights that make a real difference in your job search success."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand the challenges of job searching and create solutions that truly help people."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of AI technology to provide cutting-edge solutions."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We believe everyone deserves access to professional career tools, regardless of background."
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
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Phonalynx AI</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We're on a mission to democratize career success through AI-powered resume optimization, 
                helping millions of professionals land their dream jobs.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower every professional with AI-driven insights that transform resumes into powerful 
                career advancement tools. We believe that with the right guidance, anyone can present their 
                best professional self and unlock new opportunities.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a world where career success is determined by talent and potential, not by access 
                to expensive career services. We envision a future where AI levels the playing field for 
                job seekers everywhere.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                ResumeAI was born from a personal frustration. Our founders, Sarah and Marcus, were helping 
                friends optimize their resumes when they realized how time-consuming and subjective the process was. 
                Despite their technical backgrounds, they found it challenging to identify what made one resume 
                stand out over another.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                That's when they had the idea: what if AI could analyze thousands of successful resumes and 
                identify the patterns that lead to job interview success? After months of research and development, 
                they created the first version of ResumeAI in 2023.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we've helped over 100,000 professionals enhance their resumes and land jobs at top companies. 
                Our AI has analyzed millions of data points to become the most accurate resume optimization tool available, 
                and we're just getting started.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)] text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.background}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">100k+</div>
                <div className="text-gray-700">Resumes Enhanced</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-gray-700">Success Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700">Countries Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-700">AI Availability</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
<div className="text-center">
  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Join Our Mission
    </h2>
    <p className="text-xl text-gray-700 mb-8">
      Be part of the AI-powered career revolution. Transform your resume today.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Start Your Journey - Link to Analyze Page */}
      <Link to="/analyze">
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-6 text-lg">
          <Users className="mr-2 h-5 w-5" />
          Start Your Journey
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>

      {/* Contact Our Team - Link to Contact Page */}
      <Link to="/contact">
        <Button variant="outline" size="lg" className="backdrop-blur-md bg-white/30 border border-white/50 px-8 py-6 text-lg">
          Contact Our Team
        </Button>
      </Link>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
