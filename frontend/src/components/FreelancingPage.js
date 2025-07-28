import React from 'react';
import { Palette, Code2, PenTool, Camera, Megaphone, BarChart3, ArrowRight, Star, MapPin } from 'lucide-react';

const FreelancingPage = () => {
  const categories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      jobs: 1250,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Node.js", "Python", "PHP"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      jobs: 890,
      color: "from-purple-500 to-pink-500",
      skills: ["Photoshop", "Illustrator", "Figma", "Branding"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Writing",
      jobs: 675,
      color: "from-green-500 to-teal-500",
      skills: ["SEO Writing", "Copywriting", "Blogging", "Technical Writing"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Video Editing",
      jobs: 445,
      color: "from-orange-500 to-red-500",
      skills: ["Premiere Pro", "After Effects", "DaVinci", "Motion Graphics"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      jobs: 580,
      color: "from-indigo-500 to-purple-500",
      skills: ["Social Media", "PPC", "Analytics", "Email Marketing"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis",
      jobs: 320,
      color: "from-yellow-500 to-orange-500",
      skills: ["Python", "SQL", "Tableau", "Excel"]
    }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer for E-commerce Platform",
      company: "TechFlow Solutions",
      location: "Remote",
      budget: "$5,000 - $8,000",
      duration: "3 months",
      rating: 4.9,
      description: "Looking for an experienced React developer to build a modern e-commerce platform with advanced features.",
      skills: ["React", "TypeScript", "Node.js", "MongoDB"],
      proposals: 12,
      urgent: true
    },
    {
      id: 2,
      title: "Brand Identity Design for Startup",
      company: "GreenStart Inc.",
      location: "San Francisco, CA",
      budget: "$2,500 - $4,000",
      duration: "6 weeks",
      rating: 4.7,
      description: "Create complete brand identity including logo, color palette, typography, and brand guidelines for eco-friendly startup.",
      skills: ["Logo Design", "Brand Identity", "Illustrator", "Figma"],
      proposals: 8,
      urgent: false
    },
    {
      id: 3,
      title: "Technical Content Writer for SaaS Blog",
      company: "CloudTech Media",
      location: "Remote",
      budget: "$1,200 - $2,000",
      duration: "Ongoing",
      rating: 4.8,
      description: "Write technical blog posts and documentation for cloud computing and SaaS platforms.",
      skills: ["Technical Writing", "SEO", "Cloud Computing", "SaaS"],
      proposals: 15,
      urgent: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="cal-sans text-5xl md:text-6xl font-bold gradient-text mb-6">
            Freelancing Opportunities
          </h2>
          <p className="dm-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover amazing freelance opportunities and connect with clients looking for your expertise.
          </p>
        </div>

        {/* Job Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="scroll-animate glass-card p-6 card-3d hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="cal-sans text-xl font-bold gradient-text mb-2">
                {category.title}
              </h3>
              
              <p className="dm-sans text-gray-400 text-sm mb-4">
                {category.jobs} jobs available
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {category.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <button className="w-full btn-transparent text-sm">
                Browse Jobs
              </button>
            </div>
          ))}
        </div>

        {/* Featured Jobs */}
        <div className="mb-16">
          <h3 className="cal-sans text-3xl font-bold gradient-text text-center mb-12 scroll-animate">
            Featured Opportunities
          </h3>
          
          <div className="space-y-6">
            {featuredJobs.map((job, index) => (
              <div
                key={job.id}
                className="scroll-animate glass-card p-6 card-3d hover:scale-[1.02] transition-all duration-500 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {job.urgent && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Urgent
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Job Details */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="cal-sans text-xl font-bold gradient-text mb-2">
                          {job.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm mb-2">
                          <span>{job.company}</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{job.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="dm-sans text-gray-300 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span>Budget: {job.budget}</span>
                      <span>Duration: {job.duration}</span>
                      <span>{job.proposals} proposals</span>
                    </div>
                  </div>

                  {/* Action Panel */}
                  <div className="lg:col-span-1">
                    <div className="glass-card p-4 h-full flex flex-col justify-center">
                      <div className="text-center mb-4">
                        <div className="cal-sans text-2xl font-bold gradient-text mb-1">
                          {job.budget.split(' - ')[0]}
                        </div>
                        <div className="text-gray-400 text-sm">Starting budget</div>
                      </div>
                      
                      <button className="w-full btn-transparent mb-2">
                        Apply Now
                      </button>
                      
                      <button className="w-full btn-transparent text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Now Section */}
        <div className="scroll-animate glass-card p-8 rounded-3xl text-center" style={{ animationDelay: '0.4s' }}>
          <h3 className="cal-sans text-3xl font-bold gradient-text mb-4">
            Ready to Start Freelancing?
          </h3>
          <p className="dm-sans text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of talented freelancers earning from their skills. Create your profile and start applying today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-transparent px-8 py-4 text-lg flex items-center space-x-2">
              <span>Create Profile</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-transparent px-8 py-4 text-lg">
              Browse All Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancingPage;