import { useState } from 'react';
import './App.css';
import { TextZoomScroll } from './components/TextZoomScroll';
import { Navbar } from './components/Navbar';
import { CanvasText } from './components/CanvasText';
import { AnimatedTerminal } from './components/AnimatedTerminal';
import { Footer } from './components/Footer';
import { ShootingStarsBackground } from './components/ShootingStarsBackground';
import { LampEffect } from './components/LampEffect';
import { motion, AnimatePresence } from 'framer-motion';

// We will import components as we build them
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Process from './components/Process';
// import LiveBotDemo from './components/LiveBotDemo';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  const [activeService, setActiveService] = useState('Web Development');

  const servicesData: {
    [key: string]: {
      cardPara: string;
      rightTitle: string;
      rightSubtitle: string;
      rightExtra: string;
      features: string[];
    }
  } = {
    'Web Development': {
      cardPara: 'Tailor-made web applications built with Next.js & React.',
      rightTitle: 'Elite Quality. Surprisingly Affordable.',
      rightSubtitle: 'We build custom, lightning-fast digital experiences at highly accessible rates. By utilizing rapid-deployment frameworks, we deliver premium performance without the enterprise-tier cost.',
      rightExtra: 'Whether you are a startup looking for your first landing page or an established brand seeking a premium upgrade, we provide unbeatable value with no compromises on quality, animations, or responsiveness.',
      features: [
        'Supercharged Performance & Speed',
        'SEO & Mobile Responsive Design',
        'Modern Animations & Micro-interactions',
        'Interactive High-End UX flows'
      ]
    },
    'Custom Discord Bots': {
      cardPara: 'Next-gen automated bots with advanced API features.',
      rightTitle: 'Elite Communities. Automated Power.',
      rightSubtitle: 'Bring your Discord community to life. We engineer industrial-grade, fully customized Discord integrations with rich media, advanced moderating systems, and gaming utilities.',
      rightExtra: 'Leverage smart automated operations to auto-assign roles, moderate servers, sync member profiles to web databases, and integrate third-party APIs flawlessly.',
      features: [
        '99.9% Cloud Hosting & Uptime',
        'Custom Slash Commands & Buttons',
        'Database & Web API Integrations',
        'Advanced Role & Moderation Engines'
      ]
    },
    'AI Automation': {
      cardPara: 'Smart AI workflows to optimize your operations.',
      rightTitle: 'Intelligent Systems. Peak Efficiency.',
      rightSubtitle: 'Supercharge your business workflows with artificial intelligence. We build custom OpenAI, Claude, and LLM automation pipelines that save you hundreds of manual hours every single week.',
      rightExtra: 'Empower your sales, support, and marketing teams with autonomous AI agents that handle lead generation, email responses, and data analysis instantly.',
      features: [
        'Custom GPTs & Agentic Workflows',
        'E-mail & Chatbot Auto-responders',
        'Data Extraction & Content Generation',
        'API Pipeline Orchestration'
      ]
    },
    'UI/UX Design': {
      cardPara: 'High-fidelity layouts with jaw-dropping visuals.',
      rightTitle: 'Stunning Visuals. Flawless Interaction.',
      rightSubtitle: 'Design is more than how it looks—it is how it feels. We craft ultra-premium, interactive high-fidelity user experiences that hook visitors instantly and maximize conversions.',
      rightExtra: 'Every wireframe, logo, and animation asset is designed from scratch to reflect your brand identity, complete with curated HSL color schemes and gorgeous typography.',
      features: [
        'Premium Color Systems & Fonts',
        'Interactive Prototypes & Wireframes',
        'Bespoke Micro-animations',
        'High-Density Dark Mode aesthetics'
      ]
    },
    'Custom Systems': {
      cardPara: 'Bespoke software tailored to your company blueprint.',
      rightTitle: 'Robust Foundations. Infinite Scale.',
      rightSubtitle: 'Got a complex project idea? We design and code custom databases, web portals, dashboard panels, and backend systems from the ground up, tailored precisely to your company\'s blueprint.',
      rightExtra: 'We engineer secure, high-concurrency cloud systems with modern stacks to handle authentication, real-time analytics, and secure administrative tasks seamlessly.',
      features: [
        'Scalable Cloud Architecture',
        'Robust REST & GraphQL APIs',
        'Secure Auth & Database systems',
        'Real-time Activity Analytics'
      ]
    }
  };

  return (
    <div className="app-container">
      {/* 3D Background Canvas */}
      <ShootingStarsBackground />

      <div className="content-container">
        <Navbar />

        <main>
          {/* Split Hero Section */}
          <section id="home" className="section container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <div style={{ display: 'flex', width: '100%', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <h1 style={{ fontSize: 'var(--hero-title-size)', marginBottom: '20px', lineHeight: 1.1 }}>
                   Elite Digital<br/>
                   <CanvasText text="Execution" />
                 </h1>
                 <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--subtitle-size, 1.2rem)', lineHeight: '1.6', marginBottom: '40px', maxWidth: '500px' }}>
                   Indyson is a team of elite creators and developers building modern digital systems. We craft custom Discord bots, AI automation, and premium UI/UX designs that elevate your brand beyond limits.
                 </p>
                 <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                   <button 
                     className="btn-primary"
                     onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                   >
                     View Services
                   </button>
                 </div>

                 {/* Elite stats dashboard */}
                 <div style={{ display: 'flex', gap: '40px', marginTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '30px', flexWrap: 'wrap' }}>
                   <div>
                     <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffffff', fontFamily: "'Outfit', sans-serif" }}>50+</div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>Builds Completed</div>
                   </div>
                   <div>
                     <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#00f0ff', fontFamily: "'Outfit', sans-serif" }}>99.9%</div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>Bot Uptime</div>
                   </div>
                   <div>
                     <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffffff', fontFamily: "'Outfit', sans-serif" }}>5★</div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>Client Rating</div>
                   </div>
                 </div>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                 <AnimatedTerminal />
              </div>
            </div>
          </section>

          <TextZoomScroll>
            <div style={{ textAlign: 'center', padding: '0 16px' }}>
              <h1 style={{ fontSize: 'var(--text-zoom-size)', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                Future of <span className="text-gradient-accent" style={{ fontSize: '1.1em' }}>Digital</span>
              </h1>
              <p className="section-subtitle" style={{ fontSize: 'var(--subtitle-size, 1.1rem)' }}>Websites, automation systems, custom bots, and scalable digital solutions.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn-primary">View Projects</button>
                <a 
                  className="btn-secondary"
                  href="https://forms.gle/WKa4BWxUBtvEs7Pn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Start a Project
                </a>
              </div>
            </div>
          </TextZoomScroll>

          <section id="services" className="section container" style={{ paddingTop: 0 }}>
             <LampEffect>
               <h2 className="section-title" style={{ margin: 0 }}>Our Services</h2>
               <p className="section-subtitle" style={{ margin: "10px 0 0 0" }}>Premium solutions for elite businesses</p>
             </LampEffect>

             {/* Featured Row with Left Card and Right Dynamic Panel */}
             <div className="services-row">
               {/* Left: Active Service Card */}
                <div className="service-card-wrapper">
                  <div 
                    className="card-service active"
                    style={{ height: '100%', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                  >
                    {/* Neon accent badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      color: '#00f0ff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '100px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)'
                    }}>Active</div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                      >
                        <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontFamily: "'Outfit', sans-serif", margin: 0 }}>
                          {activeService}
                        </h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', margin: 0 }}>
                          {servicesData[activeService].cardPara}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right: Dynamic Description Panel */}
                <div className="service-desc-wrapper">
                  <div className="glass service-desc-card">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeService}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.26, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                      >
                        <h3 style={{ 
                          fontSize: '2.2rem', 
                          color: '#ffffff', 
                          fontFamily: "'Outfit', sans-serif",
                          margin: 0,
                          lineHeight: 1.2
                        }}>
                          {servicesData[activeService].rightTitle.split('. ')[0]}. <br/>
                          <span className="text-gradient-accent" style={{ display: 'inline-block', marginTop: '4px' }}>
                            {servicesData[activeService].rightTitle.split('. ')[1]}
                          </span>
                        </h3>
                        <p style={{ 
                          color: 'var(--text-secondary)', 
                          fontSize: '1.05rem', 
                          lineHeight: '1.6',
                          margin: 0 
                        }}>
                          {servicesData[activeService].rightSubtitle}
                        </p>
                        <p style={{ 
                          color: 'rgba(255, 255, 255, 0.7)', 
                          fontSize: '0.9rem', 
                          lineHeight: '1.5',
                          borderLeft: '2px solid #00f0ff',
                          paddingLeft: '16px',
                          margin: 0
                        }}>
                          {servicesData[activeService].rightExtra}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
             </div>

             {/* Bottom Cards Grid */}
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginTop: '30px' }}>
                 {Object.keys(servicesData)
                   .filter((serviceName) => serviceName !== activeService)
                   .map((serviceName) => {
                     const data = servicesData[serviceName];
                     return (
                       <div 
                         key={serviceName} 
                         className="card-service"
                         onClick={() => setActiveService(serviceName)}
                         style={{ minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                       >
                         <h3 style={{ 
                           fontSize: '1.3rem', 
                           color: '#e0e0e0', 
                           fontFamily: "'Outfit', sans-serif", 
                           margin: '0 0 10px 0',
                           fontWeight: 600
                         }}>{serviceName}</h3>
                         <p style={{ 
                           margin: 0, 
                           fontSize: '0.85rem', 
                           color: 'var(--text-secondary)',
                           lineHeight: 1.4
                         }}>{data.cardPara}</p>
                       </div>
                     );
                   })}
             </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
