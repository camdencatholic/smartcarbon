"use client";
import { useState } from 'react';
import Icon from './icon';
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

  const milesTraveled = (formData.miles.planes || 0) + (formData.miles.cars || 0) + (formData.miles.boats || 0);
  const gOfCarbonReleasedByPlane = (formData.miles.planes || 0) * 41;
  const gOfCarbonReleasedByCar = (formData.miles.cars || 0) * 404;
  const gOfCarbonReleasedByBoat = (formData.miles.boats || 0) * 635;
  const totalCarbonEmissions = gOfCarbonReleasedByPlane + gOfCarbonReleasedByCar + gOfCarbonReleasedByBoat;
  
  
  return (
          <>
        <div className="flex content-center justify-center">
          <h2 className='text-center'>
          {formData.boats || formData.cars || formData.planes ? "Input the amount of miles you traveled via each mode of transportation" : "Get started by checking the modes of transportation you plan to use"} <br />
          {formData.miles.boats || formData.miles.cars || formData.miles.planes ? "Great! Now scroll down to see how much carbon you will release!" : ""}
          </h2>
        </div>
    <div className="flex content-center justify-center p-10 ">
        <div className="">
          <form>
            <div className="form-check form-control-lg">
              <input
                type="checkbox"
                className="form-check-input"
                id="planes"
                name="planes"
                checked={formData.planes}
                onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="planes">
                <Icon name="airplane-engines" />Planes
              </label>
            </div>
            {formData.planes && (
              <div className="form-group mb-3">
                <div className="transport-input-container flex">
                  <div className="input-group mb-3">
                    <span className="col-span-9 pr-5">
                      <input
                        type='range'
                        onChange={handleMilesChange}
                        name="planes"
                        min={1}
                        max={500}
                        step={1}
                        value={formData.miles.planes || 0}
                        className='form-range' />
                    </span>
                    <span className="col-span-1">
                      <input
                        type="number"
                        className="form-control"
                        name="planes"
                        placeholder="Miles"
                        value={formData.miles.planes || 0}
                        onChange={handleMilesChange} />
                    </span>
                    <span className="input-group-text">miles</span>
                  </div>
                </div>
              </div>
            )}

            <div className="form-check form-control-lg">
              <input
                type="checkbox"
                className="form-check-input"
                id="cars"
                name="cars"
                checked={formData.cars}
                onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="cars">
                <Icon name='car-front' />Cars
              </label>
            </div>
            {formData.cars && (
              <div className="form-group mb-3">
                <div className="transport-input-container flex">
                  <div className="input-group mb-3">
                    <span className="col-span-9 pr-5">
                      <input
                        type='range'
                        onChange={handleMilesChange}
                        name="cars"
                        min={1}
                        max={500}
                        step={1}
                        value={formData.miles.cars || 0}
                        className='form-range' />
                    </span>
                    <span className="col-span-1">
                      <input
                        type="number"
                        className="form-control"
                        name="cars"
                        placeholder="Miles"
                        value={formData.miles.cars || 0}
                        onChange={handleMilesChange} />
                    </span>
                    <span className="input-group-text">miles</span>
                  </div>
                </div>
              </div>
            )}

            <div className="form-check form-control-lg">
              <input
                type="checkbox"
                className="form-check-input"
                id="boats"
                name="boats"
                checked={formData.boats}
                onChange={handleCheckboxChange} />
              <label className="form-check-label" htmlFor="boats">
                <Icon name='water' />Boats
              </label>
            </div>
            {formData.boats && (
              <div className="form-group mb-3">
                <div className="transport-input-container flex">
                  <div className="input-group mb-3">
                    <span className="col-span-9 pr-5">
                      <input
                        type='range'
                        onChange={handleMilesChange}
                        name="boats"
                        min={1}
                        max={500}
                        step={1}
                        value={formData.miles.boats || 0}
                        className='form-range' />
                    </span>
                    <span className="col-span-1">
                      <input
                        type="number"
                        className="form-control"
                        name="boats"
                        placeholder="Miles"
                        value={formData.miles.boats || 0}
                        onChange={handleMilesChange} />
                    </span>
                    <span className="input-group-text">miles</span>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      {/* From this point onward is the progress bar thingy */}
      <div className='px-10'>
        <div className="progress-stacked">
          <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} style={{width: 33 + "%"}}>
            <div className="progress-bar bg-success">good amount of carbon</div>
          </div>
          <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} style={{width: 33 + "%"}}>
            <div className="progress-bar bg-warning">mid amount of carbon</div>
          </div>
          <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} style={{width: 34 + "%"}}>
            <div className="progress-bar bg-danger">you are climate change</div>
          </div>
        </div>
      </div>  
      </>
  );
}
