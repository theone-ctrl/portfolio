import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pitch Deck Generator",
      description: "AI-powered tool that creates professional pitch decks from business ideas",
      tech: ["OpenAI", "React", "FastAPI"],
      status: "Live",
      statusColor: "#22c55e",
      link: "#"
    },
    {
      title: "PDF Contract Analyzer",
      description: "An LLM + RAG-powered tool that parses legal documents and explains clauses in plain English.",
      details: "Input: Any PDF contract | Output: Clause-by-clause plain English summary",
      tech: ["LangChain", "OpenAI", "Pinecone", "Streamlit"],
      status: "Working Prototype",
      statusColor: "#f59e0b",
      useCase: "Legal contract transparency for non-lawyers",
      link: "#"
    },
    {
      title: "Story-to-Video AI Workflow",
      description: "Converts a short story script into a complete video — narration, voiceover, and lip-synced avatar.",
      details: "Input: Script (text) | Output: Lip-synced AI video",
      tech: ["Bark TTS", "SadTalker", "ffmpeg", "ElevenLabs"],
      status: "Deployed",
      statusColor: "#22c55e",
      useCase: "YouTube Shorts, Instagram Reels, Storytelling Automation",
      note: "Tamil + English versions in progress",
      link: "#"
    },
    {
      title: "AgriQA LoRA Fine-Tune",
      description: "Fine-tuned TinyLlama-1.1B using LoRA on the AgriQA dataset to answer domain-specific agricultural queries.",
      details: "Input: Instructional prompt (Agri-related) | Output: Domain-aware response",
      tech: ["Hugging Face", "PEFT", "Transformers", "BitsandBytes"],
      status: "Published on Hugging Face",
      statusColor: "#22c55e",
      useCase: "Rural advisory bots, farming Q&A, chatbot base models",
      link: "#"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Builder Series</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{'--delay': `${index * 0.1}s`}}>
              <div className="card-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="status-badge" style={{backgroundColor: project.statusColor}}>
                    {project.status}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {project.details && (
                  <div className="project-details">
                    <p>{project.details}</p>
                  </div>
                )}
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {project.useCase && (
                  <div className="use-case">
                    <strong>Use Case:</strong> {project.useCase}
                  </div>
                )}
                
                {project.note && (
                  <div className="project-note">
                    <em>{project.note}</em>
                  </div>
                )}
                
                <div className="project-actions">
                  <a href={project.link} className="action-link">
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .projects-section {
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
          color: #ffffff;
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          display: inline-block;
          width: 100%;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #404040, #606060, #404040);
          border-radius: 2px;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .project-card {
          background: rgba(26, 26, 26, 0.8);
          border: 1px solid #404040;
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
          animation: slideInUp 0.6s ease-out var(--delay) both;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          border-color: #606060;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .card-content {
          position: relative;
          z-index: 2;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }
        
        .project-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.3;
          flex: 1;
        }
        
        .status-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #ffffff;
          white-space: nowrap;
        }
        
        .project-description {
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        
        .project-details {
          background: rgba(40, 40, 40, 0.5);
          padding: 0.8rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          border-left: 3px solid #606060;
        }
        
        .project-details p {
          color: #c0c0c0;
          font-size: 0.9rem;
          margin: 0;
        }
        
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .tech-tag {
          background: rgba(60, 60, 60, 0.6);
          color: #e0e0e0;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 400;
          border: 1px solid rgba(96, 96, 96, 0.3);
        }
        
        .use-case {
          background: rgba(40, 40, 40, 0.3);
          padding: 0.8rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #b0b0b0;
        }
        
        .use-case strong {
          color: #e0e0e0;
        }
        
        .project-note {
          color: #909090;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        
        .project-actions {
          display: flex;
          gap: 1rem;
        }
        
        .action-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #b0b0b0;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border: 1px solid #404040;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .action-link:hover {
          color: #ffffff;
          border-color: #606060;
          background: rgba(60, 60, 60, 0.2);
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255, 255, 255, 0.05),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .project-card:hover .card-glow {
          opacity: 1;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .projects-section {
            padding: 6rem 1rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .project-card {
            padding: 1.5rem;
          }
          
          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;