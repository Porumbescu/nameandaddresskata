import React, { useState } from 'react';

export const NameForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form aria-label="Name Form">
      <div>
        <label htmlFor="title">Title</label>
        <select
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          aria-label="Title"
        >
          <option value="">Select title</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Mrs">Mrs</option>
          <option value="Dr">Dr</option>
          <option value="Prof">Prof</option>
        </select>
      </div>

      <div>
        <label htmlFor="firstName">First Name(s)</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          aria-required="true"
          aria-label="First Name(s)"
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          aria-required="true"
          aria-label="Last Name"
        />
      </div>
    </form>
  );
};


