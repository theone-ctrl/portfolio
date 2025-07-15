import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, } from 'lucide-react';

const Hero = () => {


  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/nithyanandam-venu', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/nithyanandam-venu', label: 'GitHub' },
    { icon: FileText, href: 'https://nithyanandamv.substack.com', label: 'Substack' },
    { icon: Mail, href: 'mailto:nithyanandamv@outlook.com', label: 'Email' },
  ];

  const handleConnectClick = () => {
    window.location.href = 'mailto:nithyanandamv@outlook.com';
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
          <div className="ai-topics">
            <span className="topic-tag">Fine-Tuning LLMs</span>
            <span className="topic-tag">RAG Systems</span>
            <span className="topic-tag">Neural Networks</span>
            <span className="topic-tag">AI Automation</span>
          </div>
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
          overflow: hidden;
        }

        .ai-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: radial-gradient(circle at 25% 25%, rgba(var(--theme-accent), 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(var(--theme-accent), 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(var(--theme-accent), 0.05) 0%, transparent 70%);
        }

        .ai-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(45deg, transparent 40%, rgba(var(--theme-accent), 0.05) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(var(--theme-accent), 0.03) 50%, transparent 60%);
          background-size: 60px 60px;
          animation: networkPulse 8s ease-in-out infinite;
        }

        .ai-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(2px 2px at 20% 30%, rgba(var(--theme-accent), 0.3), transparent),
            radial-gradient(2px 2px at 40% 70%, rgba(var(--theme-accent), 0.2), transparent),
            radial-gradient(1px 1px at 60% 20%, rgba(var(--theme-accent), 0.4), transparent),
            radial-gradient(1px 1px at 80% 80%, rgba(var(--theme-accent), 0.2), transparent),
            radial-gradient(2px 2px at 90% 40%, rgba(var(--theme-accent), 0.3), transparent);
          background-size: 200px 200px, 300px 300px, 150px 150px, 250px 250px, 180px 180px;
          animation: floatNodes 12s linear infinite;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--theme-background);
          opacity: 0.8;
        }

        .background-toggle {
          position: absolute;
          top: 2rem;
          left: 2rem;
          width: 45px;
          height: 45px;
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 50%;
          color: var(--theme-textSecondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .background-toggle:hover {
          color: var(--theme-textPrimary);
          border-color: var(--theme-accent);
          transform: scale(1.05);
        }
        
        .hero-content {
          text-align: center;
          max-width: 800px;
          animation: fadeInUp 1s ease-out;
          position: relative;
          z-index: 2;
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
          margin-bottom: 2rem;
          letter-spacing: 0.5px;
        }

        .ai-topics {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .topic-tag {
          background: rgba(var(--theme-accent), 0.2);
          border: 1px solid var(--theme-accent);
          color: var(--theme-textPrimary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .topic-tag:hover {
          transform: translateY(-2px);
          background: rgba(var(--theme-accent), 0.3);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .topic-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .topic-tag:hover::before {
          left: 100%;
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
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 50%;
          color: var(--theme-textSecondary);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
          transform: translateY(-3px);
          border-color: var(--theme-accent);
          color: var(--theme-textPrimary);
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

        @keyframes networkPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes floatNodes {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 1rem;
          }

          .background-toggle {
            top: 1rem;
            left: 1rem;
            width: 40px;
            height: 40px;
          }

          .ai-topics {
            gap: 0.8rem;
            margin-bottom: 2rem;
          }

          .topic-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
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