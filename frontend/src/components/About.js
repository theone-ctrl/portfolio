import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About</h2>
          <div className="divider"></div>
          <p className="about-text">
            10+ years in tech. I build LLM-powered tools, prompt workflows, and AI-first products.
            <span className="highlight-text"> Transforming complex AI concepts into practical solutions </span> 
            that real people can use and love.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .about-section {
          padding: 8rem 2rem;
          position: relative;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .about-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--theme-textPrimary);
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--theme-border), var(--theme-accent), var(--theme-border));
          border-radius: 2px;
        }
        
        .divider {
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--theme-accent), transparent);
          margin: 2rem auto 3rem;
          position: relative;
        }
        
        .divider::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: var(--theme-accent);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--theme-accent);
        }
        
        .about-text {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          line-height: 1.8;
          color: var(--theme-textSecondary);
          font-weight: 300;
          letter-spacing: 0.3px;
        }
        
        .highlight-text {
          color: var(--theme-textPrimary);
          font-weight: 400;
          position: relative;
        }
        
        .highlight-text::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--theme-border), var(--theme-accent));
          opacity: 0.6;
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 6rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;