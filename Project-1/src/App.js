import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import './App.scss';
import './media-queries.scss';
function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/services" element={<Services/>} />
        
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
