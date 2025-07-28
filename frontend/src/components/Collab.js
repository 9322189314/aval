import React from 'react';
import { Users, Briefcase, Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';

const Collab = () => {
  const collaborations = [
    {
      id: 1,
      type: "Startup Partnership",
      title: "FinTech Startup Seeking Technical Co-founder",
      company: "NeoBank Solutions",
      location: "San Francisco, CA",
      posted: "2 days ago",
      description: "Revolutionary digital banking platform looking for experienced technical co-founder to join founding team.",
      skills: ["React", "Node.js", "Blockchain", "Financial APIs"],
      applicants: 23,
      category: "Co-founder",
      urgent: true
    },
    {
      id: 2,
      type: "Open Source Project",
      title: "AI-Powered Healthcare Platform Development",
      company: "HealthTech Collective",
      location: "Remote",
      posted: "1 week ago",
      description: "Open-source initiative to build AI-powered healthcare diagnostic tools for underserved communities.",
      skills: ["Python", "TensorFlow", "Healthcare APIs", "ML"],
      applicants: 45,
      category: "Volunteer",
      urgent: false
    },
    {
      id: 3,
      type: "Business Collaboration",
      title: "E-commerce Platform Partnership Opportunity",
      company: "RetailFlow Inc.",
      location: "New York, NY",
      posted: "3 days ago",
      description: "Established e-commerce platform seeking strategic partnerships with logistics and payment processing companies.",
      skills: ["Business Strategy", "Logistics", "Partnerships", "E-commerce"],
      applicants: 12,
      category: "Partnership",
      urgent: false
    },
    {
      id: 4,
      type: "Innovation Lab",
      title: "Climate Tech Innovation Challenge",
      company: "GreenFuture Labs",
      location: "Austin, TX",
      posted: "5 days ago",
      description: "Join our 3-month innovation challenge to develop sustainable technology solutions for climate change.",
      skills: ["Environmental Science", "IoT", "Data Analytics", "Sustainability"],
      applicants: 67,
      category: "Challenge",
      urgent: true
    }
  ];

  return (
    <section id="collab" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="cal-sans text-5xl md:text-6xl font-bold gradient-text mb-6">
            Collaboration Hub
          </h2>
          <p className="dm-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with startups, join innovation challenges, and explore partnership opportunities that drive the future.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate" style={{ animationDelay: '0.1s' }}>
          {["All", "Co-founder", "Partnership", "Volunteer", "Challenge"].map((category, index) => (
            <button
              key={category}
              className={`btn-transparent px-6 py-2 text-sm ${
                index === 0 ? 'bg-gray-600' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Collaboration Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {collaborations.map((collab, index) => (
            <div
              key={collab.id}
              className="scroll-animate glass-card p-6 card-3d hover:scale-105 transition-all duration-500 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Urgent Badge */}
              {collab.urgent && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Urgent
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">{collab.type}</div>
                    <div className="text-sm bg-gray-700 px-2 py-1 rounded text-white">
                      {collab.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="cal-sans text-xl font-bold gradient-text mb-2">
                {collab.title}
              </h3>

              {/* Company & Meta Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>{collab.company}</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{collab.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{collab.posted}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="dm-sans text-gray-300 text-sm leading-relaxed mb-4">
                {collab.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {collab.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{collab.applicants} interested</span>
                </div>
                
                <button className="btn-transparent flex items-center space-x-2 px-4 py-2 text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Post Collaboration CTA */}
        <div className="text-center scroll-animate glass-card p-8 rounded-3xl" style={{ animationDelay: '0.5s' }}>
          <h3 className="cal-sans text-3xl font-bold gradient-text mb-4">
            Start Your Collaboration
          </h3>
          <p className="dm-sans text-gray-300 mb-6 max-w-2xl mx-auto">
            Post your collaboration opportunity and connect with talented individuals and innovative companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-transparent px-8 py-4 text-lg">
              Post Opportunity
            </button>
            <button className="btn-transparent px-8 py-4 text-lg">
              Browse All Collaborations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collab;