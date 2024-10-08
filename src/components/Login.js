import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EventContext from '../context/EventContext';

function Login() {
  const { addUser, editUser } = useContext(EventContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  let signup = state?.signup;
  let isEdit = state?.isEdit || false;

  let initialData = {
    id: uuid(),
    firstName: '',
    secondName: '',
    email: '',
  };

  // const navigate = useNavigate();
  const [formData, setFormData] = useState(signup || initialData);

  const handleChange = (e) => {
    e.preventDefault();

    let value = e.target.value;
    const name = e.target.name || e.target.id;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup) {
      editUser(formData);
    } else {
      addUser(formData);
    }
    setFormData(initialData);
    navigate('/signups');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <label>
            First Name :
            <input
              id="firstName"
              type="text"
              onChange={handleChange}
              value={formData.firstName}
              required="required"
            />
          </label>
          <label>
            Second Name :
            <input
              id="secondName"
              type="text"
              onChange={handleChange}
              value={formData.secondName}
              required="required"
            />
          </label>
        </section>

        <section>
          <label>
            Email :
            <input
              id="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              required="required"
            />
          </label>
        </section>
        <div>
          <button type="sumbmit">{isEdit ? 'Update' : 'Submit'}</button>
        </div>
      </form>

      <Link to="/signups" state={formData}>
        <button>signUps</button>
      </Link>
    </div>
  );
}

export default Login;
