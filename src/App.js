import './App.css';
import Navbar from './components/Navbar';
import Education from './pages/Education';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr class="gray-line"/>
      <Education/>
      <br/>
      <br/>
      <hr class="gray-line"/>
      <Tech/>
      <br/>
      <br/>
      <hr class="gray-line"/>
      <Projects/>
      <br/>
      <br/>
      <hr class="gray-line"/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
