import React from 'react';
import '../styles/welcome-block.css';

export const WelcomeBlock = ({ setIsChecked, setIsSavedList }) => (
  <div className="welcome-block app__welcome-block">
    <h3 className="welcome-block__title">
      Hi, wellcome!
    </h3>
    <div className="welcome-block__question">
      <h3 className="welcome-block__question-title">
        Do you have saved todo list?
      </h3>
      <div className="welcome-block__question-buttons">
        <button
          type="button"
          className="welcome-block__question-button"
          onClick={() => {
            setIsChecked(true);
            setIsSavedList(true);
          }}
        >
          Yes
        </button>
        <button
          type="button"
          className="welcome-block__question-button"
          onClick={() => {
            setIsChecked(true);
          }}
        >
          No
        </button>
      </div>
    </div>
  </div>
);
