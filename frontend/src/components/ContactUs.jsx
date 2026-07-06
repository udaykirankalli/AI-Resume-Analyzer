import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageCircle, Clock, Send } from "lucide-react";
import { toast } from 'react-hot-toast';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: `Category: ${formData.category}\n\n${formData.message}`
    };

    emailjs.send(
      'service_wemeg6j',      // 🔁 Replace this
      'template_znxg229',     // 🔁 Replace this
      templateParams,
      'J6Rz86a7LJrZrP0vC'       // 🔁 Replace this
    )
    .then(() => {
      toast.success("✅ Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', category: '', message: '' });
    })
    .catch((error) => {
      toast.error("❌ Failed to send message:", error);
      alert("Something went wrong. Please try again.");
    });
  };


  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      details: "phonalynx@gmail.com",
      availability: "24/7",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      details: "Available in app",
      availability: "Mon-Fri 9AM-6PM PST",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      details: "+91 9849492822",
      availability: "Mon-Fri 9AM-6PM PST",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer: "We typically respond to emails within 24 hours during business days. Live chat and phone support are available for immediate assistance during business hours."
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include as much detail as possible about your issue, including your account email, the steps you've taken, and any error messages you've encountered."
    },
    {
      question: "Can I schedule a demo or consultation?",
      answer: "Yes! We offer personalized demos for Enterprise customers and consultations for users with specific needs. Contact us to schedule."
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
                Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We're here to help! Reach out to our support team with any questions or feedback
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Category</label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger className="backdrop-blur-sm bg-white/20 border border-white/30">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Account</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <Input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Brief description of your inquiry" />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} rows={6} required placeholder="Please provide as much detail as possible..." />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 text-lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 backdrop-blur-sm bg-white/20 rounded-xl border border-white/30">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{method.title}</h4>
                          <p className="text-gray-700 text-sm mb-2">{method.description}</p>
                          <p className="font-medium text-gray-900">{method.details}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-xs text-gray-500">{method.availability}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Email</span>
                    <span className="font-medium text-gray-900">&lt; 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Live Chat</span>
                    <span className="font-medium text-gray-900">&lt; 5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Phone</span>
                    <span className="font-medium text-gray-900">Immediate</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9AM - 6PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium text-gray-900">10AM - 4PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="text-gray-600">Email only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
