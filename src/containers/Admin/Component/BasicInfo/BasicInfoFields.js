import React from 'react';
import Input from '../Input';

const BasicInfoFields = ({ formData, onChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={onChange}
          required
        />
        <Input
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={onChange}
          required
        />
        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={onChange}
          required
        />
        <Input
          label="Country"
          name="country"
          value={formData.country}
          onChange={onChange}
          required
        />
        <Input
          label="Area"
          name="area"
          value={formData.area}
          onChange={onChange}
          required
        />
        <Input
          label="University"
          name="university"
          value={formData.university}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9e88]"
          required
        />
      </div>
    </>
  );
};

export default BasicInfoFields;