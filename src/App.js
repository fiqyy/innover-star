import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
