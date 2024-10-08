import React from 'react';
import { useContext } from 'react';
import EventContext from '../context/EventContext';
import { Link, useLocation } from 'react-router-dom';

function UserDetails() {
  const { userUpdate } = useContext(EventContext);
  const { state } = useLocation();

  const userId = state?.userId;

  const user = userUpdate.find((user) => user.id === userId);

  return (
    <div>
      <div>
        <p>First Name: {user.firstName}</p>
        <p>Second Name: {user.secondName}</p>
        <p>Email: {user.email}</p>
      </div>

      <Link to="/signups">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default UserDetails;
