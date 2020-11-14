import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import CardRow1 from './components/CardRow1'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardRow2 from './components/CardRow2';
import CardRow3 from './components/CardRow3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        </header>
        <About/>
        <div>
      <h2>Projects</h2>
      <p id="proj">Here are a few of the projects I've worked on.</p>
      </div>
        <CardRow1/>
        <CardRow2/>
        <CardRow3/>
      

    </div>
  );
}

export default App;
