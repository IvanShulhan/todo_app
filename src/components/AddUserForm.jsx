import React, { useState } from 'react';
import { createUser } from '../api/api';
import '../styles/add-user-form.css';
import { AddUserFormInput } from './AddUserFormInput';

const emailValidRegEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const phoneValidRegEx = /[0-9]{9}/;

export const AddUserForm = ({ setUser: setNewUser, storageKey }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const changeUser = (target, key) => {
    setUser(curr => ({
      ...curr,
      [key]: target.value,
    }));
  };

  return (
    <form
      className="add-user-form"
      onSubmit={(event) => {
        event.preventDefault();
        setIsSubmitted(true);
        const { name, username, email, phone } = user;

        if (
          name.length >= 3
            && username.length >= 3
            && emailValidRegEx.test(email)
            && phoneValidRegEx.test(phone)
        ) {
          createUser(name, username, email, phone).then((res) => {
            setNewUser(res);
            const list = JSON.parse(localStorage.getItem(storageKey) || '[]');

            localStorage.setItem(storageKey, JSON.stringify([
              ...list,
              {
                id: res.id,
                name: res.name,
              },
            ]));
          });
          setUser({
            name: '',
            username: '',
            email: '',
            phone: '',
          });
          setIsSubmitted(false);
        }
      }}
    >
      <h3 className="add-user-form__title">
        Add user form
      </h3>
      <AddUserFormInput
        property={user.name}
        value="name"
        changeUser={changeUser}
        condition={user.name.length >= 3}
        isSubmitted={isSubmitted}
        description="(min 3 characters)"
      />
      <AddUserFormInput
        property={user.username}
        value="username"
        changeUser={changeUser}
        condition={user.username.length >= 3}
        isSubmitted={isSubmitted}
        description="(min 3 characters)"
      />
      <AddUserFormInput
        property={user.email}
        value="email"
        changeUser={changeUser}
        condition={emailValidRegEx.test(user.email)}
        isSubmitted={isSubmitted}
        description="address"
      />
      <AddUserFormInput
        property={user.phone}
        value="phone"
        changeUser={changeUser}
        condition={phoneValidRegEx.test(user.phone)}
        isSubmitted={isSubmitted}
        description="number (9 digits)"
      />
      <button
        className="add-user-form__button"
        type="submit"
      >
        Create user
      </button>
    </form>
  );
};
