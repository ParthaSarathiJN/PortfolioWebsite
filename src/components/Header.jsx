import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <h1 style={styles.logoText}>{'<Parthasarathi J N />'}</h1>
        </div>

        <nav style={styles.nav}>
          <button onClick={() => scrollToSection('about')} style={styles.navLink}>
            About
          </button>
          <button onClick={() => scrollToSection('skills')} style={styles.navLink}>
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} style={styles.navLink}>
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} style={styles.navLink}>
            Contact
          </button>
        </nav>

        <button 
          style={styles.mobileMenuBtn} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          <button onClick={() => scrollToSection('about')} style={styles.mobileNavLink}>
            About
          </button>
          <button onClick={() => scrollToSection('skills')} style={styles.mobileNavLink}>
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} style={styles.mobileNavLink}>
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} style={styles.mobileNavLink}>
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoText: {
    color: '#00ff88',
    fontSize: '1.5rem',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    transition: 'color 0.3s ease',
    fontFamily: 'inherit',
  },
  mobileMenuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#16213e',
    padding: '1rem',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.75rem',
    textAlign: 'left',
    width: '100%',
    fontFamily: 'inherit',
  },
};

export default Header;
