import React, { useEffect, useState } from 'react';
import { getUser } from '../api/api';
import '../styles/userslist.css';

export const UsersList = ({ storageKey, setUser, setIsSavedList }) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(storageKey) || '[]');

    setUsersList(list);
  }, []);

  const chooseUser = (id) => {
    getUser(id).then(setUser);
  };

  return (
    <ul className="users-list">
      {usersList.length ? (
        usersList.map(item => (
          <li
            className="users-list__item"
            key={item.id}
          >
            <button
              type="button"
              onClick={() => chooseUser(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))
      ) : (
        <div className="users-list__info">
          <span className="users-list__info-text">
            There are no users with todo list yet
          </span>
          <button
            type="button"
            onClick={() => setIsSavedList(false)}
          >
            Create new user
          </button>
        </div>
      )}
    </ul>
  );
};
