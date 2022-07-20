import React, { useState } from 'react';
import { TodoApp } from './components/TodoApp';
import { Info } from './components/Info';
import { AddUserForm } from './components/AddUserForm';

export const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">

      {!user ? (
        <AddUserForm
          setUser={setUser}
        />
      ) : (
        <>
          <section className="todoapp">
            <TodoApp id={user.id} />
          </section>
          <Info name={user.name} />
        </>
      )}
    </div>
  );
};
