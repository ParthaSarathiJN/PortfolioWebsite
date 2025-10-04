import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "Java Developer | Spring Boot Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.greeting}>Hi there! 👋 I'm</p>
          <h1 style={styles.name}>Parthasarathi J N</h1>
          <h2 style={styles.subtitle}>
            {displayText}
            <span style={styles.cursor}>|</span>
          </h2>
          <p style={styles.description}>
            Building robust backend systems with Java, Spring Boot, and Kafka.
            Currently exploring the frontend world with React.
          </p>
          <div style={styles.buttonGroup}>
            <button 
              style={styles.primaryButton}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              style={styles.secondaryButton}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com"
              style={styles.socialLink}
            >
              Email
            </a>
          </div>
        </div>
        <div style={styles.decoration}>
          <div style={styles.codeBlock}>
            <code style={styles.code}>
              <span style={styles.comment}>// Backend Developer</span><br/>
              <span style={styles.keyword}>class</span> Developer &#123;<br/>
              &nbsp;&nbsp;<span style={styles.property}>skills</span>: [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.string}>"Java"</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.string}>"Spring Boot"</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.string}>"PostgreSQL"</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.string}>"Kafka"</span><br/>
              &nbsp;&nbsp;];<br/>
              &#125;
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    padding: '2rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  content: {
    animation: 'fadeIn 1s ease-in',
  },
  greeting: {
    fontSize: '1.2rem',
    color: '#00ff88',
    marginBottom: '0.5rem',
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '1.8rem',
    color: '#b8b8d1',
    marginBottom: '1.5rem',
    minHeight: '2.5rem',
  },
  cursor: {
    animation: 'blink 1s infinite',
    color: '#00ff88',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#d1d1e0',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '0.875rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#00ff88',
    color: '#0f0c29',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    fontFamily: 'inherit',
  },
  secondaryButton: {
    padding: '0.875rem 2rem',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    color: '#00ff88',
    border: '2px solid #00ff88',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    fontFamily: 'inherit',
  },
  socialLinks: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  socialLink: {
    color: '#d1d1e0',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  decoration: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeBlock: {
    backgroundColor: '#1a1a2e',
    padding: '2rem',
    borderRadius: '10px',
    border: '2px solid #00ff88',
    boxShadow: '0 10px 30px rgba(0, 255, 136, 0.2)',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: '1rem',
    lineHeight: '1.8',
  },
  comment: {
    color: '#6c757d',
  },
  keyword: {
    color: '#00d4ff',
  },
  property: {
    color: '#00ff88',
  },
  string: {
    color: '#ffd700',
  },
};

export default Hero;