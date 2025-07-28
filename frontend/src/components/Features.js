import React from 'react';
import { Brain, Code, Users, Handshake, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "AVAL.TECH",
      subtitle: "Display Tech Projects",
      description: "Showcase your technical projects, products, and portfolios in a stunning visual format.",
      color: "from-blue-500 to-cyan-500",
      delay: "0.1s"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "AVAL.FREELANCE", 
      subtitle: "Freelancer Platform",
      description: "Connect talented freelancers with amazing opportunities. Post profiles and get hired.",
      color: "from-purple-500 to-pink-500",
      delay: "0.2s"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AVAL.RESEARCH",
      subtitle: "Research Papers Hub",
      description: "Host, showcase and collaborate on cutting-edge research papers and academic work.",
      color: "from-green-500 to-teal-500",
      delay: "0.3s"
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "AVAL.COLLAB",
      subtitle: "Collaboration Board",
      description: "Connect with startups, join events, and explore open collaboration opportunities.",
      color: "from-orange-500 to-red-500",
      delay: "0.4s"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="cal-sans text-5xl md:text-6xl font-bold gradient-text mb-6">
            Four Platforms, One Destination
          </h2>
          <p className="dm-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build, showcase, collaborate, and grow in the digital ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="scroll-animate glass-card p-8 card-3d group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: feature.delay }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="cal-sans text-2xl font-bold gradient-text mb-2">
                    {feature.title}
                  </h3>
                  <h4 className="dm-sans text-lg text-gray-400 mb-4">
                    {feature.subtitle}
                  </h4>
                  <p className="dm-sans text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* CTA */}
                <button className="btn-transparent flex items-center space-x-2 group-hover:bg-opacity-30 transition-all duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate" style={{ animationDelay: '0.5s' }}>
          <h3 className="cal-sans text-3xl font-bold gradient-text mb-4">
            Ready to Join the Revolution?
          </h3>
          <p className="dm-sans text-gray-300 mb-8 max-w-2xl mx-auto">
            Start building your future with AVAL's comprehensive platform ecosystem.
          </p>
          <button className="btn-transparent px-8 py-4 text-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;