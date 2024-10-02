import Header from './components/Header';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Services/Service';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
    </div>
  );
}

export default App;
