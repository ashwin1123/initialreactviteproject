// import './App.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Contactform from './component/Contactform';
import Home from './pages/Home';
import About from './pages/About';
import Boardofdirector from './pages/Boardofdirector';
import Careerbenifits from './pages/Careerbenifits';
import Ceodesk from './pages/Ceodesk';
import Infrastructure from './pages/Infrastructure';
import Lifeatcompany from './pages/Lifeatcompany';
import Process from './pages/Process';
import Team from './pages/Team';
import { HashRouter, Routes, Route } from 'react-router-dom';

function startApp() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/boardofdirector" element={<Boardofdirector />}/>
        <Route path="/careerbenifits" element={<Careerbenifits />}/>
        <Route path="/ceodesk" element={<Ceodesk />}/>
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/lifeatcompany" element={<Lifeatcompany />} />
        <Route path="/process" element={<Process />}/>
        <Route path="/team" element={<Team />}/>
      </Routes>
      <Contactform />
      <Footer />
    </HashRouter>
  );
}

export default startApp;