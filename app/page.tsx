'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [imageAnimation, setImageAnimation] = useState('floatPulse');
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero carousel images
  const heroImages = [
    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80', alt: 'Modern Development' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', alt: 'Team Collaboration' },
    { src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80', alt: 'UI/UX Design' },
    { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', alt: 'Cloud Infrastructure' },
    { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80', alt: 'Mobile Development' },
    { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80', alt: 'AI & Machine Learning' },
  ];

  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cycle through different animations
  useEffect(() => {
    const mobileAnimations = ['mobileFloatSubtle', 'mobileScaleSubtle', 'mobilePulseSubtle'];
    const desktopAnimations = ['floatPulse', 'floatRotate', 'floatTilt', 'scaleFloat'];
    const animations = isMobile ? mobileAnimations : desktopAnimations;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % animations.length;
      setImageAnimation(animations[currentIndex]);
    }, 8000); // Change animation every 8 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  // Animated counter for stats
  const [statsVisible, setStatsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, clients: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector('.stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, [statsVisible]);

  useEffect(() => {
    if (!statsVisible) return;

    const duration = 4000; // 4 seconds
    const targets = { projects: 50, satisfaction: 98, clients: 30 };
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        projects: Math.floor(progress * targets.projects),
        satisfaction: Math.floor(progress * targets.satisfaction),
        clients: Math.floor(progress * targets.clients),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [statsVisible]);

  // EXACT same services from services page (first 3)
  const services = [
    {
      title: 'Website Development',
      desc: 'High-performance, responsive websites built with Next.js and modern frameworks.',
      image: '/images/services/service-web-dev.avif'
    },
    {
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android using React Native.',
      image: '/images/services/service-mobile-app.avif'
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric design with stunning visuals and intuitive navigation flows.',
      image: '/images/services/service-ui-ux.avif'
    }
  ];

  // EXACT same projects from project page (first 3)
  const projects = [
    {
      title: 'Pinnacle Nepal',
      cat: 'EdTech • Consultancy',
      desc: 'Platform for educational consultancy & visas.',
      link: 'https://pinnacle-nepal.vercel.app/',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Edu SVCET',
      cat: 'Education • Ecosystem',
      desc: 'Digital ecosystem managing academics.',
      link: 'https://edu-svcet.vercel.app/',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'BFPS School',
      cat: 'Education • School Website',
      desc: 'Modern school website with event calendar.',
      link: 'https://bfps-ruddy.vercel.app/',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // EXACT same tech stack from technologies page (first 6)
  const techStack = [
    { icon: '⚛️', name: 'React.js' },
    { icon: '▲', name: 'Next.js' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '🍃', name: 'MongoDB' },
    { icon: '☁️', name: 'AWS' }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="page-section active" style={{ display: 'block', paddingTop: '6rem' }}>
          <div className="hero">
            <div className="container">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>Build Digital Excellence with DevSphere</h1>
                  <p>Full-stack development agency specializing in cutting-edge web & mobile applications. From AI integration to scalable cloud systems, we transform your ideas into reality.</p>
                  <div className="hero-buttons">
                    <Link href="/contact" className="btn-primary">Start Your Project</Link>
                    <Link href="/project" className="btn-secondary">View Our Work</Link>
                  </div>
                </div>
                <div className="hero-image">
                  <div className="hero-carousel">
                    {heroImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`hero-carousel-img ${index === currentImageIndex ? 'active' : ''}`}
                        style={{
                          animation: index === currentImageIndex && !isMobile ? `${imageAnimation} 8s ease-in-out infinite` : 'none'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="stats">
                <div className="stat-card">
                  <div className="stat-number">{counts.projects}+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{counts.satisfaction}%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{counts.clients}+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Preview - EXACT from services page */}
          <div className="section container" style={{ marginTop: '0.5rem' }}>
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">Comprehensive digital solutions tailored to your business needs</p>
            </div>
            <div className="services-grid">
              {services.map((service, i) => (
                <div key={i} className="service-card">
                  <div className="service-image-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/services" className="btn-primary">View All Services</Link>
            </div>
          </div>

          {/* Featured Projects - EXACT from project page */}
          <div className="section container" style={{ marginTop: '0.5rem' }}>
            <div className="section-header">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">Showcasing our best work and successful deliveries</p>
            </div>
            <div className="services-grid">
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div className="service-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="service-image"
                    />
                  </div>
                  <div className="service-content">
                    <h3>{project.title}</h3>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent-blue)',
                      marginBottom: '0.5rem'
                    }}>{project.cat}</p>
                    <p>{project.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/project" className="btn-primary">View All Projects</Link>
            </div>
          </div>

          {/* Tech Stack Preview - EXACT from technologies page (first 6) */}
          <div className="section container" style={{ marginTop: '0.5rem' }}>
            <div className="section-header">
              <h2 className="section-title">Technologies We Master</h2>
              <p className="section-subtitle">Leveraging cutting-edge technologies</p>
            </div>
            <div className="tech-grid-home">
              {techStack.map((tech, i) => (
                <div key={i} className="tech-item">
                  <div className="tech-logo">{tech.icon}</div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/technologies" className="btn-primary">View All Technologies</Link>
            </div>
          </div>

          {/* Why Choose DevSphere */}
          <div className="section container" style={{ marginTop: '0.5rem' }}>
            <div className="section-header">
              <h2 className="section-title">Why Choose DevSphere?</h2>
              <p className="section-subtitle">What makes us different</p>
            </div>
            <div className="services-grid">
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 1rem' }}>⚡</div>
                <h3 className="service-title">Lightning Fast Delivery</h3>
                <p className="service-desc">Agile development process ensures quick turnaround without compromising quality.</p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 1rem' }}>🎯</div>
                <h3 className="service-title">Tailored Solutions</h3>
                <p className="service-desc">Custom-built applications designed specifically for your unique business needs.</p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div className="service-icon" style={{ margin: '0 auto 1rem' }}>🛡️</div>
                <h3 className="service-title">Enterprise-Grade Security</h3>
                <p className="service-desc">Industry-leading security practices to protect your data and users.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="section container" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Ready to Start Your Project?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Let&apos;s discuss how we can help bring your vision to life with cutting-edge technology and expert development.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Get Started</Link>
                <Link href="/about" className="btn-secondary">Learn More About Us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
