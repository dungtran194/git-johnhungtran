import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projectlist from './Projectlist';
import Footer from './Footer';
import Contact from './contact';


function App () {
  return (
    <div>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Projectlist/>
    <Contact/>
    <Footer/>
    </div>
    );   
  }

export default App;