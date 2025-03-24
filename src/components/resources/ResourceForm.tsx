'use client';

import { useState } from 'react';
import { ResourceFormData } from '@/components/types/index';
import { Label } from '../ui/label';

interface ResourceFormProps {
  onSubmit: (data: ResourceFormData) => void;
}

export default function ResourceForm({ onSubmit }: Readonly<ResourceFormProps>) {
  const [formData, setFormData] = useState<ResourceFormData>({
    type: 'storage',
    amount: '',
    price: '',
    location: '',
    availability: 'Immediate',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      type: 'storage',
      amount: '',
      price: '',
      location: '',
      availability: 'Immediate',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Label className="block text-gray-700 mb-2">Resource Type</Label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="storage">Storage</option>
          <option value="compute">Compute</option>
          <option value="bandwidth">Bandwidth</option>
          <option value="gpu">GPU</option>
        </select>
      </div>

      <div className="mb-4">
        <Label className="block text-gray-700 mb-2">Capacity/Amount</Label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="e.g., 500GB, 4 vCPU, 1Gbps"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <Label className="block text-gray-700 mb-2">Price (ETH/hour)</Label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="0.05"
          step="0.01"
          min="0"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <Label className="block text-gray-700 mb-2">Location</Label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City, Country"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <Label className="block text-gray-700 mb-2">Availability</Label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="Immediate">Immediate</option>
          <option value="Starting next week">Starting next week</option>
          <option value="Starting next month">Starting next month</option>
          <option value="Custom">Custom</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        List Resource
      </button>
    </form>
  );
}