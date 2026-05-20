import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Award, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-14 transition-colors duration-300 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 sm:pt-28 sm:pb-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Indicators Bar */}
        <div className="text-center mb-8">
          <div className="inline-flex max-w-full items-center rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-left shadow-lg backdrop-blur-sm dark:border-gray-700/20 dark:bg-gray-800/80 sm:rounded-full sm:px-6">
            <Award className="mr-2 h-5 w-5 shrink-0 text-amber-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
              Trusted by 5000+ Clients • 6+ Years Excellence • 100% Compliance Rate
            </span>
          </div>
        </div>
        
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Your Trusted
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  Financial Partner
                </span>
                <span className="mt-2 block text-2xl font-medium text-gray-600 dark:text-gray-300 sm:text-3xl lg:text-4xl">
                  Since 2018
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
                At <span className="font-semibold text-gray-800 dark:text-gray-200">Kamlesh Temani & Associates</span>, we provide comprehensive chartered accountant services with unwavering integrity and expertise. From tax planning to business registration, we're your partners in financial success.
              </p>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/20 bg-white/60 p-4 shadow-lg backdrop-blur-sm dark:border-gray-700/20 dark:bg-gray-800/60 sm:gap-6 sm:p-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="mb-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mb-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">5000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mb-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div className="mb-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link 
                to="/consultation"
                className="group flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 sm:px-8"
                onClick={(e) => {
                  // This will be handled by the ProtectedRoute component
                }}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919733412222" 
                className="group rounded-xl border-2 border-gray-300 bg-white/80 px-6 py-4 text-center font-semibold text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 sm:px-8"
              >
                Call: +91 97334-12222
              </a>
            </div>

            {/* Professional Credentials */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                CA Certified
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                ICAI Member
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Licensed Professional
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7681681/pexels-photo-7681681.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional chartered accountant consultation"
                  className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96 lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Trust Badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 dark:border-gray-700/20 dark:bg-gray-800/95 sm:-bottom-6 sm:left-4 sm:right-auto sm:max-w-xs sm:p-6 lg:-left-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="h-7 w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">Trusted & Certified</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Licensed CA Professional</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Rating Badge */}
              <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-2 text-xs font-bold text-white shadow-lg animate-pulse sm:top-6 sm:right-6 sm:px-4 sm:text-sm">
                ⭐ 4.9/5 Client Rating
              </div>
              
              {/* Floating Support Badge */}
              <div className="absolute left-4 right-4 bottom-20 top-auto sm:left-auto sm:right-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 lg:-right-4">
                <a
                  href="https://wa.me/919733412222?text=Hello%20Kamlesh%20Temani%20%26%20Associates%2C%20I%20need%20assistance%20with%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 sm:w-auto"
                  aria-label="Chat with us on WhatsApp"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4.5 w-4.5 text-[#25D366]" fill="currentColor" aria-hidden="true">
                      <path d="M19.11 17.23c-.27-.14-1.59-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.71-1.32-1.58-1.47-1.85-.15-.27-.02-.41.11-.55.12-.12.27-.31.41-.46.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.02-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.54.57.65.2 1.24.17 1.7.1.52-.08 1.59-.66 1.82-1.29.22-.63.22-1.18.15-1.29-.07-.11-.25-.18-.52-.31Z" />
                      <path d="M16.03 3.2c-7.06 0-12.78 5.72-12.78 12.78 0 2.25.58 4.45 1.69 6.39L3.2 28.8l6.59-1.73a12.72 12.72 0 0 0 6.24 1.61h.01c7.05 0 12.77-5.72 12.77-12.78 0-3.42-1.33-6.63-3.76-9.04A12.7 12.7 0 0 0 16.03 3.2Zm0 23.31h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.91 1.02 1.04-3.81-.25-.39a10.6 10.6 0 0 1-1.63-5.64c0-5.85 4.75-10.6 10.6-10.6 2.83 0 5.48 1.1 7.48 3.11a10.5 10.5 0 0 1 3.1 7.49c0 5.85-4.76 10.6-10.62 10.6Z" />
                    </svg>
                  </span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Trusted by leading businesses across West Bengal</p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-60 sm:gap-8">
            <div className="text-xl font-bold text-gray-400 sm:text-2xl">ICAI</div>
            <div className="hidden h-8 w-px bg-gray-300 sm:block"></div>
            <div className="text-xl font-bold text-gray-400 sm:text-2xl">GST</div>
            <div className="hidden h-8 w-px bg-gray-300 sm:block"></div>
            <div className="text-xl font-bold text-gray-400 sm:text-2xl">MCA</div>
            <div className="hidden h-8 w-px bg-gray-300 sm:block"></div>
            <div className="text-xl font-bold text-gray-400 sm:text-2xl">ROC</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
