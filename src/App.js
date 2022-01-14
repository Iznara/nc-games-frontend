import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">NC Games Reviews
        <Nav /></header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />}></Route>

       <Route path="/users">
          <Route path="" element={<UserList />} />
          <Route path=":username" element={<Profile />} />
        </Route>

          {/* <Route path="/reviews" element={<ReviewsList />} /> */}
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
