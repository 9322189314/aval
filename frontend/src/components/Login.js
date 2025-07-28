import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
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
    console.log('Form submitted:', formData);
  };

  return (
    <section id="login" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="cal-sans text-5xl md:text-6xl font-bold gradient-text mb-6">
            {isLogin ? 'Welcome Back' : 'Join AVAL'}
          </h2>
          <p className="dm-sans text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {isLogin 
              ? 'Sign in to access your dashboard and continue your journey with AVAL.'
              : 'Create your account and join the future of collaborative innovation.'
            }
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Auth Toggle */}
          <div className="glass-card p-2 rounded-2xl mb-8 scroll-animate" style={{ animationDelay: '0.1s' }}>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsLogin(true)}
                className={`py-3 px-6 rounded-xl transition-all duration-300 ${
                  isLogin 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`py-3 px-6 rounded-xl transition-all duration-300 ${
                  !isLogin 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Auth Form */}
          <div className="glass-card p-8 rounded-3xl scroll-animate" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Sign Up Only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="dm-sans text-sm text-gray-300 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="dm-sans text-sm text-gray-300 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="dm-sans text-sm text-gray-300 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Sign Up Only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="dm-sans text-sm text-gray-300 block">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Forgot Password (Login Only) */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="dm-sans text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-transparent py-4 flex items-center justify-center space-x-2 text-lg hover:scale-105 transition-transform duration-300"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="px-4 text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full btn-transparent py-3 flex items-center justify-center space-x-3">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Continue with Google</span>
              </button>
              
              <button className="w-full btn-transparent py-3 flex items-center justify-center space-x-3">
                <img
                  src="https://github.com/favicon.ico"
                  alt="GitHub"
                  className="w-5 h-5"
                />
                <span>Continue with GitHub</span>
              </button>
            </div>

            {/* Terms */}
            {!isLogin && (
              <p className="dm-sans text-xs text-gray-400 text-center mt-6">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;