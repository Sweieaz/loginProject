import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventContext from './context/EventContext';
import Login from './components/Login';
import Signups from './components/Signups';
import UserDetails from './components/UserDetails';

function App() {
  const [userUpdate, setUserUpdate] = useState([]);

  const addUser = (userData) => {
    setUserUpdate((previousState) => [...previousState, userData]);
  };

  return (
    <EventContext.Provider value={{ userUpdate, addUser, setUserUpdate }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signups" element={<Signups />} />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </EventContext.Provider>
  );
}

export default App;
