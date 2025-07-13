import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  // Mock blog posts - will be replaced with real Substack RSS feed data later
  const mockBlogPosts = [
    {
      title: "Fine-tuning LLMs with LoRA: A Practical Guide",
      date: "2024-03-15",
      excerpt: "Exploring parameter-efficient fine-tuning techniques for large language models using Low-Rank Adaptation.",
      url: "https://nithyanandamv.substack.com/p/fine-tuning-llms-with-lora"
    },
    {
      title: "Building RAG Systems That Actually Work",
      date: "2024-03-08",
      excerpt: "Common pitfalls in Retrieval-Augmented Generation and how to build production-ready RAG pipelines.",
      url: "https://nithyanandamv.substack.com/p/building-rag-systems"
    },
    {
      title: "The Future of AI-Powered Video Generation",
      date: "2024-02-28",
      excerpt: "From text-to-video models to lip-sync technology - exploring the cutting edge of AI video creation.",
      url: "https://nithyanandamv.substack.com/p/ai-video-generation"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Writings on AI</h2>
        <p className="section-subtitle">
          Latest insights from <a href="https://nithyanandamv.substack.com" target="_blank" rel="noopener noreferrer" className="substack-link">nithyanandamv.substack.com</a>
        </p>
        
        <div className="blog-grid">
          {mockBlogPosts.map((post, index) => (
            <article key={index} className="blog-card" style={{'--delay': `${index * 0.1}s`}}>
              <div className="card-content">
                <div className="blog-date">
                  <Calendar size={16} />
                  <span>{formatDate(post.date)}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <a 
                  href={post.url} 
                  className="read-more-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="card-shimmer"></div>
            </article>
          ))}
        </div>
        
        <div className="view-all-container">
          <a 
            href="https://nithyanandamv.substack.com" 
            className="view-all-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Posts
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .blog-section {
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
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          text-align: center;
          color: var(--theme-textSecondary);
          font-size: 1.1rem;
          margin-bottom: 4rem;
        }
        
        .substack-link {
          color: var(--theme-textPrimary);
          text-decoration: none;
          border-bottom: 1px solid var(--theme-accent);
          transition: all 0.3s ease;
        }
        
        .substack-link:hover {
          color: var(--theme-accent);
          border-bottom-color: var(--theme-accent);
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .blog-card {
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          animation: fadeInUp 0.6s ease-out var(--delay) both;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          border-color: var(--theme-accent);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        
        .card-content {
          position: relative;
          z-index: 2;
        }
        
        .blog-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--theme-textMuted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        
        .blog-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--theme-textPrimary);
          line-height: 1.4;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }
        
        .blog-card:hover .blog-title {
          color: var(--theme-accent);
        }
        
        .blog-excerpt {
          color: var(--theme-textSecondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        
        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--theme-textPrimary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border: 1px solid var(--theme-border);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .read-more-link:hover {
          color: var(--theme-accent);
          border-color: var(--theme-accent);
          background: rgba(var(--theme-accent), 0.1);
          transform: translateX(2px);
        }
        
        .card-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
          );
          transition: left 0.6s ease;
        }
        
        .blog-card:hover .card-shimmer {
          left: 100%;
        }
        
        .view-all-container {
          text-align: center;
          margin-top: 3rem;
        }
        
        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--theme-textPrimary);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 1rem 2rem;
          border: 2px solid var(--theme-border);
          border-radius: 50px;
          transition: all 0.3s ease;
          background: var(--theme-cardBg);
        }
        
        .view-all-link:hover {
          border-color: var(--theme-accent);
          background: rgba(var(--theme-accent), 0.1);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
        
        @media (max-width: 768px) {
          .blog-section {
            padding: 6rem 1rem;
          }
          
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .blog-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;