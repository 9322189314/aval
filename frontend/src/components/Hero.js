import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="scroll-animate space-y-8">
          <div className="space-y-6">
            <h1 className="cal-sans text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text">DESIGN.</span><br />
              <span className="gradient-text">DEVELOP.</span><br />
              <span className="gradient-text">DOMINATE.</span>
            </h1>
            
            <p className="dm-sans text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              The ultimate platform combining freelance opportunities, project showcase, research collaboration, and startup partnerships - all in one revolutionary ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-transparent flex items-center space-x-2 group">
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-transparent flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Explore Platform</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="cal-sans text-3xl gradient-text font-bold">10K+</div>
              <div className="dm-sans text-gray-400 text-sm">Freelancers</div>
            </div>
            <div className="text-center">
              <div className="cal-sans text-3xl gradient-text font-bold">5K+</div>
              <div className="dm-sans text-gray-400 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="cal-sans text-3xl gradient-text font-bold">2K+</div>
              <div className="dm-sans text-gray-400 text-sm">Research Papers</div>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Spline */}
        <div className="scroll-animate flex justify-center">
          <div className="w-full max-w-2xl h-96 lg:h-[600px] relative">
            <div className="absolute inset-0 rounded-3xl glass-card p-4">
              <Spline
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                className="w-full h-full rounded-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card p-4 float-animation">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 float-animation" style={{animationDelay: '2s'}}>
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;