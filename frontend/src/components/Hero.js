import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/nithyanandam-venu', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/nithyanandam-venu', label: 'GitHub' },
    { icon: FileText, href: 'https://nithyanandamv.substack.com', label: 'Substack' },
    { icon: Mail, href: 'mailto:nithya.ai.dev@gmail.com', label: 'Email' },
  ];

  const handleConnectClick = () => {
    window.location.href = 'mailto:nithya.ai.dev@gmail.com';
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            Nithyanandam Venu
          </h1>
          <p className="hero-subtitle">
            AI Builder | LLM Specialist | Product Engineer
          </p>
          <button 
            className="connect-button"
            onClick={handleConnectClick}
          >
            Let's Connect
            <span className="button-glow"></span>
          </button>
        </div>
        
        <div className="social-links">
          {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={24} />
              <span className="social-glow"></span>
            </a>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }
        
        .hero-content {
          text-align: center;
          max-width: 800px;
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-name {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          background: linear-gradient(135deg, var(--theme-textPrimary) 0%, var(--theme-textSecondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 300;
          color: var(--theme-textSecondary);
          margin-bottom: 3rem;
          letter-spacing: 0.5px;
        }
        
        .connect-button {
          background: linear-gradient(135deg, var(--theme-cardBg) 0%, var(--theme-background) 100%);
          border: 1px solid var(--theme-border);
          color: var(--theme-textPrimary);
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          margin-bottom: 3rem;
        }
        
        .connect-button:hover {
          transform: translateY(-2px);
          border-color: var(--theme-accent);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .button-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .connect-button:hover .button-glow {
          left: 100%;
        }
        
        .social-links {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(40, 40, 40, 0.5);
          border: 1px solid #404040;
          border-radius: 50%;
          color: #b0b0b0;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
          transform: translateY(-3px);
          border-color: #606060;
          color: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .social-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .social-link:hover .social-glow {
          opacity: 1;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          to {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 1rem;
          }
          
          .social-links {
            gap: 1rem;
          }
          
          .social-link {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;