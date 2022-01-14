import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">NC Games Reviews
        <Nav /></header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          {/* <Route path="/reviews" element={<ReviewsList />} /> */}
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
