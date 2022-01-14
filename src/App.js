import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Review from './pages/Review';
import ReviewsList from './pages/ReviewsList';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">NC Games Reviews
        <Nav /></header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />

       <Route path="/reviews">
          <Route path="" element={<ReviewsList />} />
          <Route path=":review_id" element={<Review />} />
        </Route>

        <Route path="/users">
          <Route path="" element={<UserList />} />
          <Route path=":username" element={<Profile />} />
        </Route>

          {/* <Route path="/reviews" element={<ReviewsList />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
