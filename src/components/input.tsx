"use client";
import { useState } from 'react';
import type { FormData } from '../typescript/dataTypes'

export default function Input() {
  const [formData, setFormData] = useState<FormData>({
    planes: false,
    cars: false,
    boats: false,
    miles: {
      planes: null,
      cars: null,
      boats: null,
    },
  });

  const handleCheckboxChange = (event: { target: { name: any; checked: any; }; }) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleMilesChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      miles: {
        ...formData.miles,
        [name]: parseInt(value, 10),
      },
    });
  };

  const milesTraveled = (formData.miles.planes || 0) + (formData.miles.cars || 0) + (formData.miles.boats || 0)
  const gOfCarbonReleasedByPlane = (formData.miles.planes || 0) * 41
  const gOfCarbonReleasedByCar = (formData.miles.planes || 0) * 404
  const gOfCarbonReleasedByBoat = (formData.miles.planes || 0) * 635
  const totalCarbonEmissions = gOfCarbonReleasedByPlane + gOfCarbonReleasedByCar + gOfCarbonReleasedByBoat

  return (
    <div className="container">
      <h1>Travel Data</h1>
      <h2>you traveled {milesTraveled.toLocaleString("en-US")} miles and relesed {(milesTraveled / 1000).toLocaleString("en-US")} kgs ({milesTraveled.toLocaleString("en-US")} grams)  of carbon</h2>
      <h3>how wonderful!</h3>
      <form>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="planes"
            name="planes"
            checked={formData.planes}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="planes">
            Planes
          </label>
        </div>
        {formData.planes && (
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              name="planes"
              placeholder="Miles traveled by planes"
              value={formData.miles.planes}
              onChange={handleMilesChange}
            />
          </div>
        )}

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="cars"
            name="cars"
            checked={formData.cars}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="cars">
            Cars
          </label>
        </div>
        {formData.cars && (
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              name="cars"
              placeholder="Miles traveled by cars"
              value={formData.miles.cars}
              onChange={handleMilesChange}
            />
          </div>
        )}

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="boats"
            name="boats"
            checked={formData.boats}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="boats">
            Boats
          </label>
        </div>
        {formData.boats && (
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              name="boats"
              placeholder="Miles traveled by boats"
              value={formData.miles.boats}
              onChange={handleMilesChange}
            />
          </div>
        )}
      </form>
    </div>
  );
}
