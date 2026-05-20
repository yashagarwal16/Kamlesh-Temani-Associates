import React from 'react';
import CountUp from "react-countup";
import { Award, Users, Target, Briefcase, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import BeautyImage from './images/beauty.png';
import mousumiImage from './images/mausmi.png';
import kamleshImage from './images/Kamlesh.png';
import aartiImage from './images/aarti.jpeg'
import dipikaImage from './images/dipika.png'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Unwavering honesty and transparency in every financial transaction and advisory service.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail ensuring 100% accuracy in all financial reports and compliance.',
    },
    {
      icon: Users,
      title: 'Client-First',
      description: 'Your success is our priority. We build lasting relationships through dedicated service.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Continuous improvement and staying ahead of regulatory changes for optimal results.',
    },
  ];

  const team = [
    {
      name: 'CA Kamlesh Temani',
      role: 'Founder & Managing Partner',
      image: kamleshImage,
      experience: '6+ years',
      credentials: 'Chartered Accountant, ICAI Member',
    },
    {
      name: 'ADV Aarti Agarwal',
      role: 'Legal & Compliance Advisor',
      image: aartiImage,
      experience: '3+ years',
      credentials: 'Advocate, Bar Council of India | Corporate & Compliance Law',
    },
    {
      name: 'Beauty Adhikari',
      role: 'Senior Accountant',
      image: BeautyImage,
      experience: '4+ years',
      credentials: 'Accounting Operations, Financial Reporting & Client Support',
    },
    {
      name: 'Mousumi Dutta',
      role: 'Associate Accountant',
      image: mousumiImage,
      experience: '2+ years',
      credentials: 'Bookkeeping, GST Support & Compliance Coordination',
    },
    {
      name: 'Dipika Das',
      role: 'Junior Accountant',
      image: dipikaImage,
      experience: '1+ years',
      credentials: 'Accounting Assistance, Documentation & Data Processing',
    },
  ];

  const achievements = [
    { number: '5000+', label: 'Satisfied Clients', icon: Users },
    { number: '6+', label: 'Years of Excellence', icon: Award },
    { number: '100%', label: 'Compliance Rate', icon: CheckCircle2 },
    { number: '24/7', label: 'Client Support', icon: Shield },
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 transition-colors duration-300 dark:from-gray-800 dark:via-slate-800 dark:to-gray-900 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            About Our Firm
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Building Trust Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Professional Excellence
            </span>
          </h2>
        </div>

        {/* About Content */}
        <div className="mb-16 grid items-center gap-10 lg:mb-20 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-sm dark:border-gray-700/20 dark:bg-gray-800/80 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Founded in <span className="font-semibold text-blue-600 dark:text-blue-400">2018</span> by CA Kamlesh Temani, 
                our firm has grown from a vision of providing honest, reliable financial services to becoming 
                <span className="font-semibold text-gray-800 dark:text-gray-200"> West Bengal's trusted chartered accountancy practice</span>.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                We believe in building lasting relationships through transparency, expertise, and unwavering commitment 
                to our clients' financial success. Every service we provide is backed by professional integrity and 
                personalized attention.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="rounded-xl border border-white/20 bg-white/80 p-4 text-center shadow-lg transition-transform duration-300 hover:scale-105 dark:border-gray-700/20 dark:bg-gray-800/80 sm:p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">{achievement.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team consultation"
                className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96 lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Professional Badge */}
            <div className="absolute bottom-4 right-4 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 dark:border-gray-700/20 dark:bg-gray-800/95 sm:-bottom-6 sm:-right-6 sm:p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">ICAI Certified</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professional Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-10 text-center sm:mb-12">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Our Core Values</h3>
            <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              These principles guide every decision we make and every service we provide
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group rounded-2xl border border-white/20 bg-white/80 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700/20 dark:bg-gray-800/80 sm:p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="mb-10 text-center sm:mb-12">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Meet Our Expert Team</h3>
            <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              Experienced professionals dedicated to your financial success
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group rounded-2xl border border-white/20 bg-white/80 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700/20 dark:bg-gray-800/80 sm:p-8 md:col-span-1 lg:col-span-2 ${
                  index === 3 ? 'lg:col-start-2' : ''
                } ${
                  index === 4 ? 'lg:col-start-4' : ''
                }`}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.credentials}</p>
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  {member.experience} experience
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
