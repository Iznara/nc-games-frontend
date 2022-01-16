import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { UserContext } from './contexts/user';
import CategoriesList from './pages/CategoriesList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Review from './pages/Review';
import ReviewsList from './pages/ReviewsList';
import UserList from './pages/UserList';

function App() {
  const [user, setUser] = useState({ username: "jessjelly" });
  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>

        <header className="App-header"  >NC Reviews
          <Nav /></header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home setUser={setUser} />} />

            <Route path="/reviews">
              <Route path="" element={<ReviewsList />} />
              <Route path=":review_id" element={<Review />} />
            </Route>


            <Route path="/categories">
              <Route path="" element={<CategoriesList />} />
              <Route path=":category_name" element={<ReviewsList />} />
            </Route>


            <Route path="/users">
              <Route path="" element={<UserList />} />
              <Route path=":username" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
