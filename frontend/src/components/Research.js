import React from 'react';
import { BookOpen, Download, Calendar, User, Tag } from 'lucide-react';

const Research = () => {
  const papers = [
    {
      id: 1,
      title: "Machine Learning Applications in Climate Change Prediction",
      authors: ["Dr. Sarah Johnson", "Prof. Michael Brown", "Dr. Lisa Wang"],
      abstract: "This research explores novel machine learning techniques for predicting climate change patterns and their impact on global ecosystems.",
      category: "Environmental Science",
      publishedDate: "2024-01-15",
      downloads: 1250,
      pages: 24,
      keywords: ["Machine Learning", "Climate Change", "Prediction Models", "Environmental Data"]
    },
    {
      id: 2,
      title: "Quantum Computing Algorithms for Cryptographic Security",
      authors: ["Dr. Alex Chen", "Prof. Robert Davis"],
      abstract: "Investigation of quantum computing applications in enhancing cryptographic security protocols for next-generation digital communications.",
      category: "Computer Science",
      publishedDate: "2024-01-08",
      downloads: 892,
      pages: 18,
      keywords: ["Quantum Computing", "Cryptography", "Security", "Algorithms"]
    },
    {
      id: 3,
      title: "Biomedical Imaging with AI-Enhanced Analysis",
      authors: ["Dr. Emily Rodriguez", "Dr. James Wilson", "Prof. Maria Garcia"],
      abstract: "Development of AI-enhanced biomedical imaging techniques for improved diagnosis and treatment planning in modern healthcare.",
      category: "Biomedical Engineering",
      publishedDate: "2023-12-22",
      downloads: 2100,
      pages: 32,
      keywords: ["Biomedical Imaging", "Artificial Intelligence", "Healthcare", "Diagnosis"]
    }
  ];

  return (
    <section id="research" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="cal-sans text-5xl md:text-6xl font-bold gradient-text mb-6">
            Research Hub
          </h2>
          <p className="dm-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access cutting-edge research papers and academic publications from leading researchers worldwide.
          </p>
        </div>

        {/* Research Papers */}
        <div className="space-y-8 mb-16">
          {papers.map((paper, index) => (
            <div
              key={paper.id}
              className="scroll-animate glass-card p-8 card-3d hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Paper Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="cal-sans text-2xl font-bold gradient-text mb-2">
                        {paper.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                        <User className="w-4 h-4" />
                        <span>{paper.authors.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <p className="dm-sans text-gray-300 leading-relaxed mb-4">
                    {paper.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Paper Stats & Actions */}
                <div className="lg:col-span-1">
                  <div className="glass-card p-6 h-full">
                    <div className="space-y-4">
                      {/* Category */}
                      <div className="text-center">
                        <div className="w-full py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white font-medium text-sm">
                          {paper.category}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400 flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Published</span>
                          </span>
                          <span className="text-white">{paper.publishedDate}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400 flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>Downloads</span>
                          </span>
                          <span className="text-white">{paper.downloads.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Pages</span>
                          <span className="text-white">{paper.pages}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-2 pt-4">
                        <button className="w-full btn-transparent flex items-center justify-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>Download PDF</span>
                        </button>
                        
                        <button className="w-full btn-transparent flex items-center justify-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Read Online</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Research CTA */}
        <div className="text-center scroll-animate glass-card p-8 rounded-3xl" style={{ animationDelay: '0.4s' }}>
          <h3 className="cal-sans text-3xl font-bold gradient-text mb-4">
            Share Your Research
          </h3>
          <p className="dm-sans text-gray-300 mb-6 max-w-2xl mx-auto">
            Contribute to the global research community by publishing your papers on AVAL.RESEARCH
          </p>
          <button className="btn-transparent px-8 py-4 text-lg">
            Submit Research Paper
          </button>
        </div>
      </div>
    </section>
  );
};

export default Research;