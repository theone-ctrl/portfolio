import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & ML",
      skills: ["Prompt Engineering", "LoRA Fine-tuning", "RAG Systems", "LLM Deployment"]
    },
    {
      category: "Frameworks",
      skills: ["LangChain", "Hugging Face", "FastAPI", "Streamlit"]
    },
    {
      category: "Cloud & Tools",
      skills: ["Pinecone", "Vector DBs", "Agents", "Model Optimization"]
    }
  ];

  const allSkills = [
    "Prompt Engineering", "LoRA", "FastAPI", "Hugging Face", 
    "RAG", "Agents", "Deployment", "LangChain", "OpenAI", 
    "Fine-tuning", "Vector Search", "Streamlit", "TTS", 
    "Computer Vision", "NLP", "MLOps"
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills Cloud</h2>
        
        <div className="skills-cloud">
          {allSkills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-tag"
              style={{
                '--delay': `${index * 0.05}s`,
                '--size': Math.random() * 0.3 + 0.9
              }}
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category"
              style={{'--delay': `${index * 0.1}s`}}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="category-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .skills-section {
          padding: 8rem 2rem;
          position: relative;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--theme-textPrimary);
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .skills-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 6rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .skill-tag {
          background: var(--theme-cardBg);
          color: var(--theme-textPrimary);
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: calc(0.85rem * var(--size));
          font-weight: 500;
          border: 1px solid var(--theme-border);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          animation: popIn 0.5s ease-out var(--delay) both;
        }
        
        .skill-tag:hover {
          transform: translateY(-3px) scale(1.05);
          background: rgba(var(--theme-accent), 0.2);
          border-color: var(--theme-accent);
          color: var(--theme-textPrimary);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .skill-tag::before {
          content: '';
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
          transition: left 0.5s ease;
        }
        
        .skill-tag:hover::before {
          left: 100%;
        }
        
        .skills-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .skill-category {
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          animation: slideInUp 0.6s ease-out var(--delay) both;
        }
        
        .skill-category:hover {
          transform: translateY(-5px);
          border-color: var(--theme-accent);
          background: rgba(var(--theme-accent), 0.05);
        }
        
        .category-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--theme-textPrimary);
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .category-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--theme-border), var(--theme-accent), var(--theme-border));
          border-radius: 1px;
        }
        
        .category-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }
        
        .category-skill {
          background: rgba(var(--theme-accent), 0.1);
          color: var(--theme-textPrimary);
          padding: 0.4rem 0.9rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 400;
          border: 1px solid var(--theme-border);
          transition: all 0.3s ease;
        }
        
        .category-skill:hover {
          background: rgba(var(--theme-accent), 0.2);
          color: var(--theme-textPrimary);
          border-color: var(--theme-accent);
        }
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .skills-section {
            padding: 6rem 1rem;
          }
          
          .skills-cloud {
            gap: 0.8rem;
            margin-bottom: 4rem;
          }
          
          .skill-tag {
            font-size: calc(0.8rem * var(--size));
            padding: 0.5rem 1rem;
          }
          
          .skills-categories {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .skill-category {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;