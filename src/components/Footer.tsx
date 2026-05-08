import React from 'react';

const DiscordIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.12 15.85A9.7 9.7 0 0 0 19.3 12a10.06 10.06 0 0 0-4.07-8.31s-1.15-.9-3.23-.9H12c-2.08 0-3.23.9-3.23.9A10.06 10.06 0 0 0 4.7 12a9.7 9.7 0 0 0 1.18 3.85L5 19.18A.5.5 0 0 0 5.61 19.8l2.9-2.22s1.42.42 3.49.42c2.07 0 3.49-.42 3.49-.42l2.9 2.22a.5.5 0 0 0 .61-.62z" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer = () => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer style={{
      position: 'relative',
      padding: '80px 40px 40px 40px',
      background: 'rgba(5, 5, 5, 0.95)',
      borderTop: '1px solid rgba(0, 240, 255, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden'
    }}>
      {/* Background ambient glow matching LampEffect */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '150px',
        background: 'radial-gradient(ellipse at bottom, rgba(0, 240, 255, 0.08), transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ width: '100%', maxWidth: '1200px', zIndex: 1 }}>

        {/* Main Columns Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>

          {/* Column 1: Brand & Mission */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '-0.02em',
                color: '#ffffff',
                margin: 0,
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              indyson
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              maxWidth: '280px'
            }}>
              Bespoke web applications, AI automation agents, custom Discord bots, and next-generation systems engineered for elite performance.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              {[
                {
                  Icon: InstagramIcon,
                  name: 'Instagram',
                  url: 'https://www.instagram.com/_indyson_/',
                  color: '#ff4575',
                  hoverColor: '#ff1a53',
                  shadowColor: 'rgba(255, 69, 117, 0.4)',
                  hoverShadowColor: 'rgba(255, 26, 83, 0.8)'
                },
                {
                  Icon: DiscordIcon,
                  name: 'Discord',
                  url: 'https://discord.gg/NasNZRfp',
                  color: '#5865F2',
                  hoverColor: '#404eed',
                  shadowColor: 'rgba(88, 101, 242, 0.4)',
                  hoverShadowColor: 'rgba(88, 101, 242, 0.8)'
                },
                {
                  Icon: YoutubeIcon,
                  name: 'YouTube',
                  url: '#',
                  color: '#ff2a2a',
                  hoverColor: '#ff0000',
                  shadowColor: 'rgba(255, 42, 42, 0.4)',
                  hoverShadowColor: 'rgba(255, 0, 0, 0.8)'
                }
              ].map(({ Icon, name, url, color, hoverColor, shadowColor, hoverShadowColor }) => (
                <a
                  key={name}
                  href={url}
                  target={url !== '#' ? '_blank' : undefined}
                  rel={url !== '#' ? 'noopener noreferrer' : undefined}
                  style={{
                    color: color,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    filter: `drop-shadow(0 0 4px ${shadowColor})`
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.filter = `drop-shadow(0 0 10px ${hoverShadowColor})`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.filter = `drop-shadow(0 0 4px ${shadowColor})`;
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: 0
            }}>
              Site map
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'projects' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <span
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: "'Inter', sans-serif",
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    alignSelf: 'flex-start'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#00f0ff';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {link.name}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Expertise */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: 0
            }}>
              Expertise
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Web Development',
                'Custom Discord Bots',
                'AI Automation',
                'UI/UX Design',
                'Custom Systems'
              ].map((service) => (
                <span
                  key={service}
                  onClick={() => scrollToSection('services')}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: "'Inter', sans-serif",
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    alignSelf: 'flex-start'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#00f0ff';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Start Project (CTA) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: 0
            }}>
              Launch
            </h4>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              Ready to elevate your operations or web presence? Let's build.
            </p>
            <div>
              <a
                href="https://forms.gle/WKa4BWxUBtvEs7Pn7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff 0%, #8a2be2 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: "'Outfit', sans-serif",
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.25)';
                }}
              >
                Start Project
              </a>
            </div>
            <span style={{
              fontSize: '0.85rem',
              color: '#a0a0a0',
              fontFamily: "'Inter', sans-serif"
            }}>
              Contact: <a href="mailto:contact@indyson.com" style={{ color: '#00f0ff', textDecoration: 'none' }}>contact@indyson.com</a>
            </span>
          </div>

        </div>

        {/* Futuristic horizontal divider matching navbar with glowing neon head */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 240, 255, 0.3) 50%, transparent 100%)',
          boxShadow: '0 0 8px rgba(0, 240, 255, 0.15)',
          marginBottom: '30px'
        }}></div>

        {/* Bottom copyright row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: '#666', fontSize: '0.85rem', margin: 0, fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Indyson. All rights reserved.
          </p>

          <p style={{ color: '#555', fontSize: '0.85rem', margin: 0, fontFamily: "'Inter', sans-serif" }}>
            Systems Operational • Engineered with Pride
          </p>
        </div>

      </div>
    </footer>
  );
};
