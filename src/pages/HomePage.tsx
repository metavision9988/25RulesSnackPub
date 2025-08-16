import React from 'react';
import { Link } from 'react-router-dom';
import SeriesIcon from '../components/SeriesIcon';
import { books, seriesInfo } from '../data/mock';
import BookCard from '../components/BookCard';

const HomePage: React.FC = () => {
  const snack = seriesInfo.snack;
  const soul = seriesInfo.soul;

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4">25개의 룰로 완성하는 새로운 나</h2>
          <p className="text-xl text-text-secondary mb-8">
            빠르게 읽고 즉시 실행하는 <strong>SNACK Series</strong>와<br />
            천천히 음미하며 깊이 성찰하는 <strong>SOUL Series</strong>
          </p>
          <Link
            to="/books"
            className="bg-snack-primary hover:bg-snack-secondary text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
          >
            도서 둘러보기
          </Link>
        </div>
      </section>

      {/* Dual Track Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">두 가지 길, 하나의 목표</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl text-white bg-snack-gradient shadow-xl">
              <SeriesIcon series="snack" className="text-5xl mb-4" />
              <h4 className="text-2xl font-bold mb-2">{snack.name}</h4>
              <p className="italic mb-4">"{snack.tagline}"</p>
              <ul className="space-y-2 text-left">
                {snack.characteristics.map((char, i) => <li key={i}>✓ {char}</li>)}
              </ul>
            </div>
            <div className="p-8 rounded-2xl text-white bg-soul-gradient shadow-xl">
              <SeriesIcon series="soul" className="text-5xl mb-4" />
              <h4 className="text-2xl font-bold mb-2">{soul.name}</h4>
              <p className="italic mb-4">"{soul.tagline}"</p>
              <ul className="space-y-2 text-left">
                {soul.characteristics.map((char, i) => <li key={i}>✓ {char}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">추천 도서</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.slice(0, 3).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
