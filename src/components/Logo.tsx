import React from 'react';
import caLogo from '../logo.jpg'; // adjust path depending on your file location

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex min-w-0 items-center ${className}`}>
      <div className="flex-shrink-0 rounded-xl bg-transparent p-0 transition-colors duration-300 dark:bg-white/95 dark:p-1.5 dark:shadow-lg dark:ring-1 dark:ring-white/20">
        <img 
          src={caLogo} 
          alt="CA India Logo" 
          className="h-10 w-auto object-contain sm:h-12" 
        />
      </div>

      {showText && (
        <div className="ml-2 min-w-0 sm:ml-3">
          <h1 className="text-base font-bold text-[#1B5E20] dark:text-[#1B5E20] leading-tight sm:text-xl">
            Kamlesh Temani & Associates
          </h1>
        </div>
      )}
    </div>
  );
};

export default Logo;
