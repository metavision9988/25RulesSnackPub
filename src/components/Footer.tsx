import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-primary text-white mt-16">
      <div className="container mx-auto px-6 py-12 text-center text-gray-400">
        <h4 className="text-xl font-bold mb-4 text-white">25 Rules Snack Publishing</h4>
        <p className="mb-8">실용과 성찰, 모두를 품는 출판사</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} 25 Rules Snack Publishing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
