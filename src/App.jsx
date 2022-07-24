import React, { useState } from 'react';
import { TodoApp } from './components/TodoApp';
import { Info } from './components/Info';
import { AddUserForm } from './components/AddUserForm';
import { UsersList } from './components/UsersList';
import { WelcomeBlock } from './components/WelcomeBlock';
import './app.css';

export const App = () => {
  const [user, setUser] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isSavedList, setIsSavedList] = useState(false);

  const STORAGE_KEY = 'todoListStorageKey';

  return (
    <div className="app">
      {!isChecked && (
        <WelcomeBlock
          setIsChecked={setIsChecked}
          setIsSavedList={setIsSavedList}
        />
      )}

      {!user && isChecked && (
        isSavedList ? (
          <UsersList
            setUser={setUser}
            storageKey={STORAGE_KEY}
            setIsSavedList={setIsSavedList}
          />
        ) : (
          <AddUserForm
            setUser={setUser}
            storageKey={STORAGE_KEY}
          />
        ))}

      {user && (
        <div className="todoapp-wrapper">
          <section className="todoapp">
            <TodoApp id={user.id} />
          </section>
          <Info name={user.name} />
        </div>
      )}
    </div>
  );
};
