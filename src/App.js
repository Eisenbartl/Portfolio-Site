import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Work from './components/Work';
import Contact from './components/Contact';

{/* use cookies to see if a person has visited the site before */}

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <Header/>
      <Work />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
