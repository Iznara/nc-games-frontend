import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">NC Games Reviews
        <Nav /></header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
