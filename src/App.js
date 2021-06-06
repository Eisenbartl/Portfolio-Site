import './App.css';
import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';

{/* note: use cookies to see if a person has visited the site before */}

function App() {
  return (
    <div className="App">
      <Header/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
