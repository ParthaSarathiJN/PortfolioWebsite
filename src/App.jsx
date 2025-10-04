import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* Placeholder sections so navigation works */}
      <div id="about" style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <h2>About Section Coming Soon...</h2>
      </div>
      <div id="skills" style={{ padding: '4rem 2rem', textAlign: 'center', background: '#fff' }}>
        <h2>Skills Section Coming Soon...</h2>
      </div>
      <div id="projects" style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <h2>Projects Section Coming Soon...</h2>
      </div>
      <div id="contact" style={{ padding: '4rem 2rem', textAlign: 'center', background: '#fff' }}>
        <h2>Contact Section Coming Soon...</h2>
      </div>
    </div>
  );
}

export default App;