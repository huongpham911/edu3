import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Gambar placeholder untuk slide
  const slides = [
    {
      id: 1,
      image: '/image/518278709_24618685044382245_2119788954850869200_n.jpg',
      title: 'Selamat Datang di SMAN 3 Lawe Sigala-gala',
      subtitle: 'Membangun Generasi Berkualitas dan Berkarakter'
    },
    {
      id: 2,
      image: '/image/521532473_122212835006247601_8064058430936985152_n.jpg',
      title: 'Fasilitas Pembelajaran Modern',
      subtitle: 'Laboratorium dan Sarana Penunjang Terdepan'
    },
    {
      id: 3,
      image: '/image/526213209_24749135218003893_4607350456858563895_n.jpg',
      title: 'Prestasi dan Keunggulan',
      subtitle: 'Meraih Prestasi di Tingkat Regional dan Nasional'
    }
  ];

  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image}), url('https://via.placeholder.com/1200x600/4a90e2/ffffff?text=SMAN+3+Lawe+Sigala-gala')`
            }}
          >
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <div className="slide-buttons">
                <a href="#about" className="btn btn-primary">Tentang Sekolah</a>
                <a href="#contact" className="btn btn-secondary">Hubungi Kami</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-btn prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Quick Info Cards */}
      <div className="quick-info">
        <div className="info-card">
          <div className="info-icon">📚</div>
          <h3>Program Unggulan</h3>
          <p>Program akademik dan ekstrakurikuler terbaik</p>
        </div>
        <div className="info-card">
          <div className="info-icon">🏆</div>
          <h3>Prestasi Terbaik</h3>
          <p>Berbagai prestasi di tingkat regional</p>
        </div>
        <div className="info-card">
          <div className="info-icon">👥</div>
          <h3>Tenaga Pengajar</h3>
          <p>Guru profesional dan berpengalaman</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
