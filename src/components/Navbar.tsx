import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);

  // Hover states for premium interactivity
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy active menu tracking
      const servicesEl = document.getElementById('services');
      const footerEl = document.querySelector('footer');

      if (footerEl && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 250) {
        setActiveItem('About');
      } else if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) {
          setActiveItem('Services');
        } else {
          setActiveItem('Home');
        }
      } else {
        setActiveItem('Home');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isMobile ? '16px 24px' : '20px 60px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.82)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.08)' : '1px solid transparent'
    }}>
      {/* Logo Section */}
      <div 
        className="logo-container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer',
          transform: isLogoHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        <h1 style={{ 
          fontFamily: "'Outfit', sans-serif", 
          fontSize: '1.6rem', 
          letterSpacing: '-0.02em',
          fontWeight: 600,
          color: '#ffffff',
          lineHeight: 1,
          margin: 0,
          textShadow: isLogoHovered 
            ? '0 0 15px rgba(0, 240, 255, 0.8), 0 0 30px rgba(0, 240, 255, 0.4)' 
            : 'none',
          transition: 'text-shadow 0.3s ease'
        }}>indyson</h1>
      </div>

      {/* Right aligned Navigation and CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '16px' : '40px' }}>
        {!isMobile && (
          <nav style={{ 
            display: 'flex', 
            gap: '32px', 
            alignItems: 'center'
          }}>
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => {
              const isActive = activeItem === item;
              const isHovered = hoveredItem === item;
              return (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item);
                    if (item === 'Home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (item === 'About' || item === 'Contact') {
                      const el = document.querySelector('footer');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      const el = document.getElementById(item.toLowerCase());
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  style={{
                    position: 'relative',
                    color: isActive ? '#ffffff' : (isHovered ? '#ffffff' : '#a0a0a0'),
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    textShadow: isActive 
                      ? '0 0 10px rgba(0, 240, 255, 0.6)' 
                      : (isHovered ? '0 0 10px rgba(0, 240, 255, 0.5)' : 'none'),
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    padding: '6px 0'
                  }}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item}
                  <span style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '0',
                    right: '0',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00f0ff 50%, transparent)',
                    borderRadius: '2px',
                    opacity: isActive || isHovered ? 1 : 0,
                    transform: isActive || isHovered ? 'scaleX(1)' : 'scaleX(0.3)',
                    boxShadow: '0 0 8px rgba(0, 240, 255, 0.8)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                  }} />
                </a>
              );
            })}
          </nav>
        )}

        {/* CTA Button */}
        <div>
          <a 
            href="https://forms.gle/WKa4BWxUBtvEs7Pn7"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            style={{ 
              background: isBtnHovered 
                ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)' 
                : 'transparent',
              border: `1px solid ${isBtnHovered ? '#00f0ff' : 'rgba(255, 255, 255, 0.25)'}`,
              color: '#ffffff',
              padding: '8px 20px', 
              fontSize: '0.9rem',
              borderRadius: '6px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isBtnHovered ? 'scale(1.04) translateY(-1px)' : 'scale(1) translateY(0)',
              boxShadow: isBtnHovered 
                ? '0 0 25px rgba(0, 240, 255, 0.45), inset 0 0 8px rgba(0, 240, 255, 0.2)' 
                : 'none',
              textShadow: isBtnHovered ? '0 0 8px rgba(255, 255, 255, 0.5)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Soft neon gradient border that fades beautifully at the edges */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.25) 20%, rgba(0, 240, 255, 0.25) 80%, transparent)',
        boxShadow: '0 1px 15px rgba(0, 240, 255, 0.12)',
        pointerEvents: 'none'
      }} />
    </header>
  );
};
