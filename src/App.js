import logo from './logo.svg';
import './App.css';

import NavBar from './Component/NavBar/Navbar';
import Hero from './Component/NavBar/Hero';
import Body from './Component/NavBar/Body/Body';
import Footer from './Component/NavBar/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
