import React from "react";

export const FormField = ({ label, type, name, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="lead form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
