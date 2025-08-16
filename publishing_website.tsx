import React, { useState } from 'react';

const PublishingWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);

  // 시리즈별 색상 정의
  const seriesColors = {
    snack: {
      primary: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8500 100%)'
    },
    soul: {
      primary: '#6C5CE7',
      gradient: 'linear-gradient(135deg, #6C5CE7 0%, #3D5A80 100%)'
    }
  };

  // 도서 데이터
  const books = [
    {
      id: 1,
      series: 'snack',
      title: 'Business SNACK: Market Rules',
      subtitle: '25 Rules for Smart Entrepreneurs',
      tagline: '지하철 2정거장 거리의 창업 지혜',
      author: '25 Rules Snack Publishing',
      publishDate: '2025-01-15',
      pages: 120,
      readingTime: '10-15분',
      rating: 4.8,
      reviews: 247,
      price: '$9.99',
      description: '바쁜 1인 창업자를 위한 한 입 크기 비즈니스 지혜. 90% 실패율의 창업 현실을 극복할 수 있는 Smart vs Dumb 접근법을 제시합니다.'
    },
    {
      id: 2,
      series: 'snack',
      title: 'Money SNACK: Investment Rules',
      subtitle: '25 Rules for Smart Investors',
      tagline: '개인투자자를 위한 현명한 투자 철학',
      author: '25 Rules Snack Publishing',
      publishDate: '2025-02-01',
      pages: 115,
      readingTime: '10-15분',
      rating: 4.7,
      reviews: 189,
      price: '$9.99',
      description: '복잡한 투자 이론이 아닌, 개인투자자가 실제로 적용할 수 있는 Smart vs Dumb 투자 사고방식을 제시합니다.'
    },
    {
      id: 3,
      series: 'soul',
      title: 'Timeless Wisdom: The Little Prince',
      subtitle: '25 Meditations on Love and Loss',
      tagline: '어린왕자를 통해 발견하는 25가지 인생의 진리',
      author: '25 Rules Snack Publishing',
      publishDate: '2025-03-01',
      pages: 180,
      readingTime: '30-60분',
      rating: 4.9,
      reviews: 156,
      price: '$12.99',
      description: '생텍쥐페리의 불멸의 작품을 현대적 관점에서 재해석한 25편의 명상적 에세이. 삶의 본질적 가치를 탐구합니다.'
    }
  ];

  const getSeriesStyle = (series) => seriesColors[series] || seriesColors.snack;

  const SeriesIcon = ({ series, size = 24 }) => {
    const emoji = series === 'snack' ? '🍿' : '🌙';
    return <span style={{ fontSize: `${size}px` }}>{emoji}</span>;
  };

  const Header = () => (
    <header style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1rem 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>
              📚 25 Rules Snack Publishing
            </h1>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              실용과 성찰, 모두를 품는 출판사
            </p>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            {[
              { id: 'home', label: '홈' },
              { id: 'books', label: '도서목록' },
              { id: 'about', label: '출판사 소개' },
              { id: 'support', label: '독자지원' },
              { id: 'contact', label: '문의' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  backgroundColor: currentPage === item.id ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
            25개의 룰로 완성하는 새로운 나
          </h2>
          <p style={{ fontSize: '1.3rem', color: '#7f8c8d', marginBottom: '2rem' }}>
            빠르게 읽고 즉시 실행하는 <strong>SNACK Series</strong>와<br/>
            천천히 음미하며 깊이 성찰하는 <strong>SOUL Series</strong>
          </p>
          <button
            onClick={() => setCurrentPage('books')}
            style={{
              background: seriesColors.snack.gradient,
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            도서 둘러보기
          </button>
        </div>
      </section>

      {/* Dual Track Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#2c3e50' }}>
            두 가지 길, 하나의 목표
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div style={{
              background: seriesColors.snack.gradient,
              padding: '2rem',
              borderRadius: '20px',
              color: 'white',
              textAlign: 'center'
            }}>
              <SeriesIcon series="snack" size={48} />
              <h4 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>SNACK Series</h4>
              <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '1rem' }}>
                "Think Smart, Not Hard"
              </p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 지하철 2정거장 (10-15분)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Smart vs Dumb 명확한 대비</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 즉시 실행 가능한 솔루션</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 바쁜 현대인 맞춤형</li>
              </ul>
            </div>
            <div style={{
              background: seriesColors.soul.gradient,
              padding: '2rem',
              borderRadius: '20px',
              color: 'white',
              textAlign: 'center'
            }}>
              <SeriesIcon series="soul" size={48} />
              <h4 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>SOUL Series</h4>
              <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '1rem' }}>
                "Deep Thinking, Slow Reading"
              </p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 저녁 독서, 주말 카페 (30-60분)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 시적이고 철학적인 성찰</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 내면의 성장과 깨달음</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 삶의 의미 탐구</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#2c3e50' }}>
            추천 도서
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {books.map(book => (
              <div key={book.id} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '1.5rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
              onClick={() => { setSelectedBook(book); setCurrentPage('books'); }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <SeriesIcon series={book.series} size={24} />
                  <span style={{
                    marginLeft: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    background: getSeriesStyle(book.series).primary,
                    color: 'white'
                  }}>
                    {book.series.toUpperCase()} Series
                  </span>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2c3e50' }}>
                  {book.title}
                </h4>
                <p style={{ color: '#7f8c8d', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  {book.tagline}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>
                      ⭐ {book.rating} ({book.reviews} reviews)
                    </span>
                  </div>
                  <span style={{ fontWeight: 'bold', color: getSeriesStyle(book.series).primary }}>
                    {book.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const BooksPage = () => (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#2c3e50' }}>
          출간 도서
        </h2>
        
        {selectedBook ? (
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <button
              onClick={() => setSelectedBook(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#7f8c8d',
                cursor: 'pointer',
                marginBottom: '1rem'
              }}
            >
              ← 목록으로 돌아가기
            </button>
            
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
              <div style={{
                width: '100%',
                height: '400px',
                background: getSeriesStyle(selectedBook.series).gradient,
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '1rem'
              }}>
                <SeriesIcon series={selectedBook.series} size={48} />
                <h3 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{selectedBook.title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{selectedBook.subtitle}</p>
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <SeriesIcon series={selectedBook.series} size={24} />
                  <span style={{
                    marginLeft: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    background: getSeriesStyle(selectedBook.series).primary,
                    color: 'white'
                  }}>
                    {selectedBook.series.toUpperCase()} Series
                  </span>
                </div>
                
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#2c3e50' }}>
                  {selectedBook.title}
                </h2>
                <h3 style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '1rem' }}>
                  {selectedBook.subtitle}
                </h3>
                <p style={{ fontSize: '1rem', color: getSeriesStyle(selectedBook.series).primary, marginBottom: '1rem', fontStyle: 'italic' }}>
                  {selectedBook.tagline}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                  <div><strong>저자:</strong> {selectedBook.author}</div>
                  <div><strong>출간일:</strong> {selectedBook.publishDate}</div>
                  <div><strong>페이지:</strong> {selectedBook.pages}쪽</div>
                  <div><strong>독서 시간:</strong> {selectedBook.readingTime}</div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.1rem', marginRight: '1rem' }}>
                    ⭐ {selectedBook.rating} / 5.0
                  </span>
                  <span style={{ color: '#7f8c8d' }}>
                    ({selectedBook.reviews} reviews)
                  </span>
                </div>
                
                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  {selectedBook.description}
                </p>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{
                    background: getSeriesStyle(selectedBook.series).gradient,
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}>
                    Amazon에서 구매 - {selectedBook.price}
                  </button>
                  <button style={{
                    background: 'transparent',
                    color: getSeriesStyle(selectedBook.series).primary,
                    border: `2px solid ${getSeriesStyle(selectedBook.series).primary}`,
                    padding: '1rem 2rem',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}>
                    샘플 읽기
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {books.map(book => (
              <div key={book.id} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '2rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedBook(book)}
              >
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{
                    width: '120px',
                    height: '160px',
                    background: getSeriesStyle(book.series).gradient,
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    padding: '0.5rem'
                  }}>
                    <SeriesIcon series={book.series} size={32} />
                    <div style={{ marginTop: '0.5rem', fontSize: '0.7rem' }}>
                      {book.title.split(':')[0]}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <SeriesIcon series={book.series} size={16} />
                      <span style={{
                        marginLeft: '0.5rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        background: getSeriesStyle(book.series).primary,
                        color: 'white'
                      }}>
                        {book.series.toUpperCase()}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2c3e50' }}>
                      {book.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '1rem' }}>
                      {book.tagline}
                    </p>
                    <div style={{ fontSize: '0.8rem', color: '#6c757d', marginBottom: '1rem' }}>
                      📅 {book.publishDate} • 📖 {book.pages}쪽 • ⏱️ {book.readingTime}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.8rem' }}>
                          ⭐ {book.rating} ({book.reviews})
                        </span>
                      </div>
                      <span style={{ fontWeight: 'bold', color: getSeriesStyle(book.series).primary }}>
                        {book.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'books': return <BooksPage />;
      case 'about': return <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>출판사 소개 페이지 (개발 중)</div>;
      case 'support': return <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>독자지원 페이지 (개발 중)</div>;
      case 'contact': return <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>문의 페이지 (개발 중)</div>;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      <main>
        {renderCurrentPage()}
      </main>
      <footer style={{
        background: '#2c3e50',
        color: 'white',
        padding: '3rem 0 2rem',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', color: '#bdc3c7' }}>
            <h4 style={{ marginBottom: '1rem' }}>25 Rules Snack Publishing</h4>
            <p style={{ marginBottom: '2rem' }}>실용과 성찰, 모두를 품는 출판사</p>
            <p>© 2025 25 Rules Snack Publishing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublishingWebsite;