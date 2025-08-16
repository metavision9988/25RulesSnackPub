import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../data/types';
import SeriesIcon from './SeriesIcon';
import { seriesInfo } from '../data/mock';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const series = seriesInfo[book.series];

  // This is a simple way to get a color class.
  // In a real app, you might have a more robust mapping.
  const seriesPrimaryColor = book.series === 'snack' ? 'text-snack-primary' : 'text-soul-primary';
  const seriesBgColor = book.series === 'snack' ? 'bg-snack-primary' : 'bg-soul-primary';
  const seriesGradient = book.series === 'snack' ? 'bg-snack-gradient' : 'bg-soul-gradient';

  return (
    <Link to={`/books/${book.id}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className={`h-48 w-full flex items-center justify-center ${seriesGradient}`}>
        {/* In a real app, this would be an <img /> tag */}
        <div className="text-center text-white p-4">
            <SeriesIcon series={book.series} className="text-4xl" />
            <h3 className="font-bold mt-2">{book.title.split(':')[0]}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className={`px-3 py-1 text-xs text-white rounded-full ${seriesBgColor}`}>
            {series.name}
          </span>
        </div>
        <h4 className="text-xl font-bold text-text-primary mb-2 truncate group-hover:text-soul-secondary">{book.title}</h4>
        <p className="text-text-secondary text-sm mb-4 h-10">{book.tagline}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <span>⭐</span> {book.rating} ({book.reviews} reviews)
          </div>
          <div className={`text-lg font-bold ${seriesPrimaryColor}`}>
            {book.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
