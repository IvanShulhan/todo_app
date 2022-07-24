import React from 'react';

export const AddUserFormInput = ({
  property,
  value,
  changeUser,
  condition,
  isSubmitted,
  description,
}) => (
  <label htmlFor={value}>
    <h4 className="add-user-form__input-title">
      {value}
    </h4>
    <input
      className="add-user-form__input"
      type="text"
      id={value}
      placeholder={`Enter your ${value}`}
      value={property}
      onChange={({ target }) => {
        changeUser(target, value, condition);
      }}
    />
    {!condition && isSubmitted && (
      <span className="add-user-form__input-error-message">
        {`Invalid ${value} ${description}`}
      </span>
    )}
  </label>
);
