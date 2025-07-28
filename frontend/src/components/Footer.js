import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Platform: [
      { name: 'AVAL.TECH', href: '#tech' },
      { name: 'AVAL.RESEARCH', href: '#research' },
      { name: 'AVAL.FREELANCE', href: '#freelancing' },
      { name: 'AVAL.COLLAB', href: '#collab' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press', href: '#press' }
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Community', href: '#community' },
      { name: 'Support', href: '#support' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Security', href: '#security' }
    ]
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="cal-sans text-3xl font-bold gradient-text mb-4">
                  AVAL
                </h3>
                <p className="dm-sans text-gray-300 leading-relaxed mb-6">
                  The ultimate platform for students, freelancers, and startups to collaborate, showcase, and grow together in the digital ecosystem.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="dm-sans font-semibold text-white mb-3">
                  Stay Updated
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:border-gray-400 focus:outline-none"
                  />
                  <button className="btn-transparent px-4 py-2 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="lg:col-span-1">
                <h4 className="cal-sans font-bold text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="dm-sans text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 AVAL. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for the future.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="glass-card p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="glass-card p-2 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="py-6 border-t border-gray-800">
          <div className="text-center">
            <p className="dm-sans text-gray-500 text-xs">
              AVAL is an open-source platform empowering the next generation of creators, researchers, and innovators.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-4 text-xs text-gray-500">
              <span>🌟 Star us on GitHub</span>
              <span>🚀 Join our Discord</span>
              <span>📧 Weekly Newsletter</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;