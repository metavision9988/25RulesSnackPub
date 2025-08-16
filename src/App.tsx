import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// Placeholder for other pages
const BookListPage = () => <div className="container mx-auto p-8 text-center">도서 목록 페이지 (개발 중)</div>;
const SeriesPage = () => <div className="container mx-auto p-8 text-center">시리즈 소개 페이지 (개발 중)</div>;
const SupportPage = () => <div className="container mx-auto p-8 text-center">독자 지원 페이지 (개발 중)</div>;
const AboutPage = () => <div className="container mx-auto p-8 text-center">출판사 소개 페이지 (개발 중)</div>;
const NotFoundPage = () => <div className="container mx-auto p-8 text-center">404 - 페이지를 찾을 수 없습니다.</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BookListPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
