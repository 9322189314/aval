import React from 'react';
import { ExternalLink, Heart, Eye, Star } from 'lucide-react';

const Showcase = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Design System",
      category: "UI/UX Design",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      likes: 245,
      views: 1200,
      rating: 4.8,
      description: "Revolutionary design system powered by artificial intelligence for modern web applications."
    },
    {
      id: 2,
      title: "Quantum Computing Research",
      category: "Research Paper",
      author: "Dr. Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      likes: 189,
      views: 856,
      rating: 4.9,
      description: "Breakthrough research in quantum computing algorithms and their practical applications."
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Freelance Project",
      author: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      likes: 312,
      views: 1500,
      rating: 4.7,
      description: "Cross-platform mobile application with cutting-edge features and intuitive design."
    },
    {
      id: 4,
      title: "Startup Collaboration Hub",
      category: "Collaboration",
      author: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      likes: 156,
      views: 789,
      rating: 4.6,
      description: "Platform connecting startups with investors and collaborative opportunities worldwide."
    }
  ];

  return (
    <section id="showcase" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="cal-sans text-5xl md:text-6xl font-bold gradient-text mb-6">
            Featured Showcase
          </h2>
          <p className="dm-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover amazing projects, research papers, and collaborations from our vibrant community.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="scroll-animate glass-card overflow-hidden card-3d group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 text-sm dm-sans font-medium text-white">
                    {project.category}
                  </span>
                </div>

                {/* External Link */}
                <div className="absolute top-4 right-4">
                  <button className="glass-card p-2 text-white hover:bg-white/20 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="cal-sans text-xl font-bold gradient-text mb-2">
                  {project.title}
                </h3>
                
                <p className="dm-sans text-gray-400 text-sm mb-3">
                  by {project.author}
                </p>
                
                <p className="dm-sans text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{project.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center scroll-animate" style={{ animationDelay: '0.5s' }}>
          <button className="btn-transparent px-8 py-4 text-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;