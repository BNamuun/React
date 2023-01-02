import logo from './logo.svg';
// import './App.css';
import './style.css';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Link from './link';



function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Header/>
            <Body/>
            <Footer/>
            <Link/>
      </header>
    </div>
  );
}

export default App;
