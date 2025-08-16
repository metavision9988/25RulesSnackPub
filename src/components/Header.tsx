import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: '홈' },
  { path: '/books', label: '도서' },
  { path: '/series', label: '시리즈 소개' },
  { path: '/support', label: '독자 지원' },
  { path: '/about', label: '출판사 소개' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-soul-secondary text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <h1 className="text-2xl font-bold">
            📚 25 Rules Snack Publishing
          </h1>
          <p className="text-sm opacity-90">
            실용과 성찰, 모두를 품는 출판사
          </p>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {/* Mobile menu button will be added later */}
      </div>
    </header>
  );
};

export default Header;
