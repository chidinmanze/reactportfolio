import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import CardRow1 from './components/CardRow1'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardRow2 from './components/CardRow2';
import CardRow3 from './components/CardRow3';
import ResumeFile from './components/Resume';
import Contact from './components/Contact';
import ProjectIntro from './components/ProjectIntro';
import Name from './components/Name'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        </header>
        <Name/>
        <About/>
        <ProjectIntro/>
        <CardRow1/>
        <CardRow2/>
        <CardRow3/>
        <ResumeFile/>
        <Contact/>
      

    </div>
  );
}

export default App;
