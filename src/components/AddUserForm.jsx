import React, { useState } from 'react';
import { createUser } from '../api/api';
import '../styles/add-user-form.css';

export const AddUserForm = ({ setUser: setNewUser }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const changeUser = (target, key) => {
    setUser(curr => ({ ...curr, [key]: target.value }));
  };

  return (
    <form
      className="add-user-form"
      onSubmit={(event) => {
        event.preventDefault();
        const { name, username, email, phone } = user;

        if (user.name.length > 3 && user.username.length > 3) {
          createUser(name, username, email, phone).then((setNewUser));
          setUser({
            name: '',
            username: '',
            email: '',
            phone: '',
          });
        }

        return true;
      }}
    >
      <h3 className="add-user-form__title">
        Add user form
      </h3>
      <label htmlFor="name">
        <h4 className="add-user-form__input-title">
          Name
        </h4>
        <input
          className="add-user-form__input"
          type="text"
          id="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={({ target }) => changeUser(target, 'name')}
        />
      </label>
      <label htmlFor="userName">
        <h4 className="add-user-form__input-title">
          Username
        </h4>
        <input
          className="add-user-form__input"
          type="text"
          id="userName"
          placeholder="Enter your username"
          value={user.username}
          onChange={({ target }) => changeUser(target, 'username')}
        />
      </label>
      <label htmlFor="email">
        <h4 className="add-user-form__input-title">
          Email
        </h4>
        <input
          className="add-user-form__input"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={({ target }) => changeUser(target, 'email')}
        />
      </label>
      <label htmlFor="phone">
        <h4 className="add-user-form__input-title">
          Phone
        </h4>
        <input
          className="add-user-form__input"
          type="text"
          id="phone"
          placeholder="Enter your phone"
          pattern="[0][0-9]{9}"
          value={user.phone}
          onChange={({ target }) => changeUser(target, 'phone')}
        />
      </label>
      <button
        className="add-user-form__button"
        type="submit"
      >
        Create user
      </button>
    </form>
  );
};
