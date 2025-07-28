import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "hello@aval.com",
      subtitle: "Send us an email anytime!"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "San Francisco, CA",
      subtitle: "Come say hello at our HQ"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="cal-sans text-5xl md:text-6xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="dm-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about AVAL? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-animate" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="cal-sans text-2xl font-bold gradient-text">
                    Send Message
                  </h3>
                  <p className="dm-sans text-gray-400 text-sm">
                    Fill out the form below and we'll get back to you
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="dm-sans text-sm text-gray-300 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="dm-sans text-sm text-gray-300 block">
                      Email
                    </label>
                    <input
                      type="email"  
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="dm-sans text-sm text-gray-300 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="dm-sans text-sm text-gray-300 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-transparent py-4 flex items-center justify-center space-x-2 text-lg hover:scale-105 transition-transform duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex-shrink-0">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="cal-sans text-lg font-bold gradient-text mb-1">
                        {info.title}
                      </h4>
                      <p className="dm-sans text-white font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="dm-sans text-gray-400 text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Response Time */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="cal-sans text-lg font-bold gradient-text mb-1">
                      Response Time
                    </h4>
                    <p className="dm-sans text-white font-medium mb-1">
                      Within 24 hours
                    </p>
                    <p className="dm-sans text-gray-400 text-sm">
                      We aim to respond to all inquiries quickly
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="cal-sans text-lg font-bold gradient-text mb-3">
                  Prefer Direct Contact?
                </h4>
                <p className="dm-sans text-gray-300 text-sm mb-4">
                  For urgent matters or specific inquiries, you can reach out to us directly through our social channels or schedule a call.
                </p>
                <div className="flex space-x-3">
                  <button className="btn-transparent px-4 py-2 text-sm">
                    Schedule Call
                  </button>
                  <button className="btn-transparent px-4 py-2 text-sm">
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center scroll-animate" style={{ animationDelay: '0.3s' }}>
          <h3 className="cal-sans text-3xl font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h3>
          <p className="dm-sans text-gray-300 mb-8 max-w-2xl mx-auto">
            Looking for quick answers? Check out our FAQ section for common questions about AVAL.
          </p>
          <button className="btn-transparent px-8 py-4 text-lg">
            View FAQ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;