import React, { useState, useEffect } from 'react';
import { MessageCircle, Bot, Sparkles, X } from 'lucide-react';
import axios from 'axios';

const ChatbotPlaceholder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm an AI assistant trained on Nithyanandam's work and experience. Ask me anything about his projects, skills, or background!" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sampleQuestions = [
    "What are Nithyanandam's key AI projects?",
    "What's his background in RAG systems?",
  ];

  const handleSampleQuestion = async (question) => {
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    setIsTyping(true);
    setHasAskedQuestion(true);

    try {
      // const res = await axios.post('http://localhost:7860/ask', {
      //   question,
      // });
      // const answer = res.data.answer;
      setIsTyping(false);
      setMessages(prev => [...prev, { 
                          type: 'bot', 
                          text: "The chatbot code is available in the repository but has not yet been deployed to the cloud. Once deployment is complete, you’ll be able to explore detailed insights about Nithyanandam’s work, projects, and expertise right here." 
                        }]);
    } catch (err) {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: "Sorry, something went wrong." }]);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="chatbot-container">
        <button
          className="chat-button"
          onClick={toggleChat}
          aria-label="Open AI Assistant"
        >
          <div className="chat-icon">
            <Bot size={24} />
            <div className="pulse-ring"></div>
          </div>
          <span className="chat-tooltip">Ask me about Nithyanandam</span>
        </button>

        {/* Chat Window */}
        {isOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <div className="header-content">
                <div className="bot-avatar">
                  <Sparkles size={18} />
                </div>
                <div className="header-text">
                  <h3>AI Assistant</h3>
                  <p>Ask me about Nithyanandam</p>
                </div>
              </div>
              <button className="close-button" onClick={toggleChat}>
                <X size={18} />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  {message.type === 'bot' && (
                    <div className="message-avatar">
                      <Bot size={16} />
                    </div>
                  )}
                  <div className="message-content">
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="message bot">
                  <div className="message-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="message-content typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

           {!hasAskedQuestion && (
              <div className="sample-questions">
                <p className="questions-header">Try asking:</p>
                <div className="questions-grid">
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="sample-question"
                      onClick={() => {
                        setHasAskedQuestion(true);
                        handleSampleQuestion(question);
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}


            <div className="chat-input-area">
              <div className="coming-soon">
                <MessageCircle size={16} />
                <div className="chat-input-area">
                  <form
                    className="chat-form"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!input.trim()) return;

                      const userMessage = input.trim();
                      setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
                      setInput('');
                      setIsTyping(true);

                      try {
                        // const res = await axios.post('http://localhost:7860/ask', {
                        //   question: userMessage,
                        // });
                        // const answer = res.data.answer;

                        // setIsTyping(false);
                        // setMessages(prev => [...prev, { type: 'bot', text: answer }]);
                         setMessages(prev => [...prev, { 
                              type: 'bot', 
                              text: "The chatbot code is available in the repository but has not yet been deployed to the cloud. Once deployment is complete, you’ll be able to explore detailed insights about Nithyanandam’s work, projects, and expertise right here." 
                            }]);
                      } catch (err) {
                        setIsTyping(false);
                        setMessages(prev => [...prev, { type: 'bot', text: "Sorry, something went wrong." }]);
                      }
                    }}
                  >
                    <input
                      type="text"
                      className="chat-input"
                      placeholder="Ask a question..."
                      disabled={true}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="send-button">
                      Send
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
        }
        
        .chat-button {
          position: relative;
          background: var(--theme-accent);
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        .chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
        }
        
        .chat-icon {
          position: relative;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .pulse-ring {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid var(--theme-accent);
          border-radius: 50%;
          animation: pulse 2s infinite;
          opacity: 0.6;
        }
        
        .chat-tooltip {
          position: absolute;
          bottom: 70px;
          right: 0;
          background: var(--theme-cardBg);
          color: var(--theme-textPrimary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          pointer-events: none;
          border: 1px solid var(--theme-border);
        }
        
        .chat-button:hover .chat-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
        
        .chat-window {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 350px;
          height: 650px;
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(20px);
          animation: slideUp 0.3s ease;
          overflow: hidden;
        }
        
        .chat-header {
          padding: 1rem;
          border-bottom: 1px solid var(--theme-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(var(--theme-accent), 0.1);
        }
        
        .header-content {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        
        .bot-avatar {
          width: 36px;
          height: 36px;
          background: var(--theme-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .header-text h3 {
          margin: 0;
          color: var(--theme-textPrimary);
          font-size: 1rem;
          font-weight: 600;
        }
        
        .header-text p {
          margin: 0;
          color: var(--theme-textSecondary);
          font-size: 0.8rem;
        }
        
        .close-button {
          background: none;
          border: none;
          color: var(--theme-textSecondary);
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .close-button:hover {
          background: rgba(var(--theme-accent), 0.2);
          color: var(--theme-textPrimary);
        }
        
        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .message {
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }
        
        .message.user {
          flex-direction: row-reverse;
        }
        
        .message-avatar {
          width: 24px;
          height: 24px;
          background: var(--theme-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .message-content {
          background: var(--theme-border);
          padding: 0.8rem;
          border-radius: 12px;
          max-width: 80%;
        }
        
        .message.user .message-content {
          background: var(--theme-accent);
          color: white;
        }
        
        .message-content p {
          margin: 0;
          color: var(--theme-textPrimary);
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .message.user .message-content p {
          color: white;
        }
        
        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        
        .typing-indicator span {
          width: 6px;
          height: 6px;
          background: var(--theme-textSecondary);
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        .sample-questions {
          padding: 1rem;
          border-top: 1px solid var(--theme-border);
          background: rgba(var(--theme-accent), 0.05);
        }
        
        .questions-header {
          color: var(--theme-textSecondary);
          font-size: 0.8rem;
          margin: 0 0 0.8rem 0;
          font-weight: 500;
        }
        
        .questions-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .sample-question {
          background: none;
          border: 1px solid var(--theme-border);
          color: var(--theme-textSecondary);
          padding: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.8rem;
          text-align: left;
          transition: all 0.3s ease;
        }
        
        .sample-question:hover {
          border-color: var(--theme-accent);
          color: var(--theme-textPrimary);
          background: rgba(var(--theme-accent), 0.1);
        }
        
        .chat-input-area {
          padding: 1rem;
          border-top: 1px solid var(--theme-border);
        }
        
        .coming-soon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--theme-textMuted);
          font-size: 0.9rem;
          justify-content: center;
          padding: 0.8rem;
          background: rgba(var(--theme-accent), 0.1);
          border-radius: 8px;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-8px);
          }
        }
        
        @media (max-width: 768px) {
          .chatbot-container {
            bottom: 1rem;
            right: 1rem;
          }
          
          .chat-window {
            width: calc(100vw - 2rem);
            right: -1rem;
            height: 600px; /* increase here too */
          }
          
          .chat-button {
            width: 55px;
            height: 55px;
          }
        }
          .chat-form {
  display: flex;
  gap: 0.5rem;
}

.chat-input {
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--theme-border);
  font-size: 0.9rem;
  background: var(--theme-bg);
  color: var(--theme-textPrimary);
}

.send-button {
  background: var(--theme-accent);
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.send-button:hover {
  background: var(--theme-accentDark);
}

      `}</style>
    </>
  );
};

export default ChatbotPlaceholder;