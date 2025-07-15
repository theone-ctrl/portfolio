import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:nithyanandamv@outlook.com?subject=Let\'s Work Together&body=Hi Nithyanandam,%0A%0AI would like to discuss a potential collaboration.%0A%0ABest regards,';
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-description">
            Ready to build something amazing with AI? 
            <br />
            <span className="highlight">Let's turn your ideas into reality.</span>
          </p>
          
          <button 
            className="contact-button"
            onClick={handleEmailClick}
          >
            <Mail size={20} />
            Get in Touch
            <div className="button-glow"></div>
          </button>
          
          <div className="contact-info">
            <p>nithyanandamv@outlook.com</p>
          </div>
        </div>
        
        <div className="background-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Nithyanandam Venu. Building the future with AI.</p>
        </div>
      </footer>
      
      <style jsx>{`
        .contact-section {
          padding: 8rem 2rem 4rem;
          position: relative;
          overflow: hidden;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .contact-content {
          text-align: center;
          padding: 4rem 2rem;
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }
        
        .contact-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--theme-accent), transparent);
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--theme-textPrimary);
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--theme-textPrimary) 0%, var(--theme-textSecondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-description {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          line-height: 1.6;
          color: var(--theme-textSecondary);
          margin-bottom: 3rem;
          font-weight: 300;
        }
        
        .highlight {
          color: var(--theme-textPrimary);
          font-weight: 400;
        }
        
        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, var(--theme-cardBg) 0%, var(--theme-background) 100%);
          border: 2px solid var(--theme-border);
          color: var(--theme-textPrimary);
          padding: 1.2rem 3rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-bottom: 2rem;
        }
        
        .contact-button:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: var(--theme-accent);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        
        .button-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }
        
        .contact-button:hover .button-glow {
          left: 100%;
        }
        
        .contact-info {
          color: var(--theme-textMuted);
          font-size: 1rem;
        }
        
        .background-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(var(--theme-accent), 0.1), transparent);
          animation: float 6s ease-in-out infinite;
        }
        
        .circle-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .circle-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .circle-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }
        
        .footer {
          border-top: 1px solid var(--theme-border);
          padding: 2rem 0;
          margin-top: 4rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          color: var(--theme-textMuted);
          font-size: 0.9rem;
          padding: 0 2rem;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 6rem 1rem 3rem;
          }
          
          .contact-content {
            padding: 3rem 1.5rem;
            border-radius: 20px;
          }
          
          .contact-button {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
          
          .floating-circle {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;