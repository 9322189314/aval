// Mock data for AVAL platform components

export const mockUsers = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@example.com",
    role: "Freelancer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    skills: ["React", "UI/UX Design", "Figma"],
    rating: 4.9,
    projects: 23,
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    email: "michael@university.edu",
    role: "Researcher",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    skills: ["Quantum Computing", "Machine Learning", "Research"],
    rating: 4.8,
    projects: 12,
    location: "Boston, MA"
  },
  {
    id: 3,
    name: "Alex Thompson",
    email: "alex@techstartup.com",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    skills: ["Mobile Development", "Product Management", "Leadership"],
    rating: 4.7,
    projects: 8,
    location: "Austin, TX"
  }
];

export const mockProjects = [
  {
    id: 1,
    title: "AI-Powered Design System",
    description: "Revolutionary design system powered by artificial intelligence for modern web applications.",
    category: "UI/UX Design",
    author: "Sarah Chen",
    authorId: 1,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    likes: 245,
    views: 1200,
    rating: 4.8,
    tags: ["AI", "Design System", "React", "Figma"],
    createdAt: "2024-01-15",
    status: "Published"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile application with cutting-edge features and intuitive design.",
    category: "Mobile Development",
    author: "Alex Thompson",
    authorId: 3,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    likes: 312,
    views: 1500,
    rating: 4.7,
    tags: ["React Native", "iOS", "Android", "Mobile"],
    createdAt: "2024-01-10",
    status: "Published"
  }
];

export const mockResearchPapers = [
  {
    id: 1,
    title: "Machine Learning Applications in Climate Change Prediction",
    authors: ["Dr. Sarah Johnson", "Prof. Michael Brown", "Dr. Lisa Wang"],
    abstract: "This research explores novel machine learning techniques for predicting climate change patterns and their impact on global ecosystems.",
    category: "Environmental Science",
    publishedDate: "2024-01-15",
    downloads: 1250,
    pages: 24,
    keywords: ["Machine Learning", "Climate Change", "Prediction Models", "Environmental Data"],
    doi: "10.1000/xyz123",
    journal: "Environmental AI Research",
    status: "Peer Reviewed"
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
    keywords: ["Quantum Computing", "Cryptography", "Security", "Algorithms"],
    doi: "10.1000/abc456",
    journal: "Quantum Computing Today",
    status: "Published"
  }
];

export const mockFreelanceJobs = [
  {
    id: 1,
    title: "Senior React Developer for E-commerce Platform",
    company: "TechFlow Solutions",
    companyLogo: "https://via.placeholder.com/50x50/2563eb/ffffff?text=TF",
    location: "Remote",
    budget: "$5,000 - $8,000",
    duration: "3 months",
    rating: 4.9,
    description: "Looking for an experienced React developer to build a modern e-commerce platform with advanced features.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "E-commerce platform experience",
      "Node.js backend knowledge"
    ],
    skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    proposals: 12,
    urgent: true,
    postedDate: "2024-01-20",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Brand Identity Design for Startup",
    company: "GreenStart Inc.",
    companyLogo: "https://via.placeholder.com/50x50/059669/ffffff?text=GS",
    location: "San Francisco, CA",
    budget: "$2,500 - $4,000",
    duration: "6 weeks",
    rating: 4.7,
    description: "Create complete brand identity including logo, color palette, typography, and brand guidelines for eco-friendly startup.",
    requirements: [
      "Brand identity expertise",
      "Portfolio of startup work",
      "Adobe Creative Suite",
      "Figma proficiency"
    ],
    skills: ["Logo Design", "Brand Identity", "Illustrator", "Figma"],
    proposals: 8,
    urgent: false,
    postedDate: "2024-01-18",
    category: "Graphic Design"
  }
];

export const mockCollaborations = [
  {
    id: 1,
    type: "Startup Partnership",
    title: "FinTech Startup Seeking Technical Co-founder",
    company: "NeoBank Solutions",
    companyLogo: "https://via.placeholder.com/50x50/7c3aed/ffffff?text=NB",
    location: "San Francisco, CA",
    posted: "2 days ago",
    description: "Revolutionary digital banking platform looking for experienced technical co-founder to join founding team.",
    requirements: [
      "10+ years tech leadership experience",
      "Fintech industry background",
      "Startup experience preferred",
      "Equity-based compensation"
    ],
    skills: ["React", "Node.js", "Blockchain", "Financial APIs"],
    applicants: 23,
    category: "Co-founder",
    urgent: true,
    equityOffered: "15-25%",
    fundingStage: "Seed"
  },
  {
    id: 2,
    type: "Open Source Project",
    title: "AI-Powered Healthcare Platform Development",
    company: "HealthTech Collective",
    companyLogo: "https://via.placeholder.com/50x50/dc2626/ffffff?text=HC",
    location: "Remote",
    posted: "1 week ago",
    description: "Open-source initiative to build AI-powered healthcare diagnostic tools for underserved communities.",
    requirements: [
      "Python/TensorFlow experience",
      "Healthcare domain knowledge",
      "Open source contribution history",
      "Volunteer commitment"
    ],
    skills: ["Python", "TensorFlow", "Healthcare APIs", "ML"],
    applicants: 45,
    category: "Volunteer",
    urgent: false,
    impact: "Social Good",
    timeCommitment: "10-15 hours/week"
  }
];

export const mockJobCategories = [
  {
    id: 1,
    name: "Web Development",
    icon: "Code2",
    jobs: 1250,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Node.js", "Python", "PHP"],
    avgRate: "$50-120/hr",
    growth: "+15%"
  },
  {
    id: 2,
    name: "Graphic Design",
    icon: "Palette",
    jobs: 890,
    color: "from-purple-500 to-pink-500",
    skills: ["Photoshop", "Illustrator", "Figma", "Branding"],
    avgRate: "$35-85/hr",
    growth: "+12%"
  },
  {
    id: 3,
    name: "Content Writing",
    icon: "PenTool",
    jobs: 675,
    color: "from-green-500 to-teal-500",
    skills: ["SEO Writing", "Copywriting", "Blogging", "Technical Writing"],
    avgRate: "$25-75/hr",
    growth: "+18%"
  },
  {
    id: 4,
    name: "Video Editing",
    icon: "Camera",
    jobs: 445,
    color: "from-orange-500 to-red-500",
    skills: ["Premiere Pro", "After Effects", "DaVinci", "Motion Graphics"],
    avgRate: "$40-100/hr",
    growth: "+22%"
  },
  {
    id: 5,
    name: "Digital Marketing",
    icon: "Megaphone",
    jobs: 580,
    color: "from-indigo-500 to-purple-500",
    skills: ["Social Media", "PPC", "Analytics", "Email Marketing"],
    avgRate: "$30-90/hr",
    growth: "+20%"
  },
  {
    id: 6,
    name: "Data Analysis",
    icon: "BarChart3",
    jobs: 320,
    color: "from-yellow-500 to-orange-500",
    skills: ["Python", "SQL", "Tableau", "Excel"],
    avgRate: "$45-110/hr",
    growth: "+25%"
  }
];

export const mockStats = {
  totalUsers: 50000,
  totalProjects: 12500,
  totalResearchPapers: 2800,
  totalCollaborations: 1200,
  totalFreelancers: 15000,
  totalJobs: 8500,
  countriesServed: 120,
  averageRating: 4.8
};

// API simulation functions
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAPI = {
  // Users
  getUsers: async () => {
    await delay(500);
    return mockUsers;
  },
  
  getUserById: async (id) => {
    await delay(300);
    return mockUsers.find(user => user.id === id);
  },

  // Projects
  getProjects: async () => {
    await delay(600);
    return mockProjects;
  },

  getProjectsByCategory: async (category) => {
    await delay(400);
    return mockProjects.filter(project => project.category === category);
  },

  // Research Papers
  getResearchPapers: async () => {
    await delay(700);
    return mockResearchPapers;
  },

  // Freelance Jobs
  getFreelanceJobs: async () => {
    await delay(500);
    return mockFreelanceJobs;
  },

  getJobsByCategory: async (category) => {
    await delay(400);
    return mockFreelanceJobs.filter(job => job.category === category);
  },

  // Collaborations
  getCollaborations: async () => {
    await delay(600);
    return mockCollaborations;
  },

  // Job Categories
  getJobCategories: async () => {
    await delay(300);
    return mockJobCategories;
  },

  // Stats
  getStats: async () => {
    await delay(400);
    return mockStats;
  }
};