import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import About from './components/About/About';
import ProductSection from './components/ProductSection/ProductSection';

function App() {
  return (
    <>
  
    <Nav/>
    <Home/>
    <Products/>
    <Services/>
    <About/>
    </>
  );
}

export default App;
