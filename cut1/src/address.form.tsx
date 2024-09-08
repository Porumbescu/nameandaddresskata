import React, { useState } from 'react';

export const AddressForm: React.FC = () => {
  const [formData, setFormData] = useState({
    street: '',
    houseNumber: '',
    town: '',
    city: '',
    county: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form aria-label="Address Form">
      <div>
        <label htmlFor="houseNumber">House name or number</label>
        <input
          type="text"
          id="houseNumber"
          name="houseNumber"
          value={formData.houseNumber}
          onChange={handleChange}
          aria-required="true"
          aria-label="House name or number"
        />
      </div>

      <div>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          aria-required="true"
          aria-label="Street"
        />
      </div>

      <div>
        <label htmlFor="town">Town</label>
        <input
          type="text"
          id="town"
          name="town"
          value={formData.town}
          onChange={handleChange}
          aria-required="true"
          aria-label="Town"
        />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          aria-required="true"
          aria-label="City"
        />
      </div>

      <div>
        <label htmlFor="county">County</label>
        <input
          type="text"
          id="county"
          name="county"
          value={formData.county}
          onChange={handleChange}
          aria-label="County"
        />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          aria-required="true"
          aria-label="Country"
        >
          <option value="">Select country</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </form>
  );
};


