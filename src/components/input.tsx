"use client";
import { useState } from 'react';
import Icon from './icon';
import type { FormData } from '../typescript/dataTypes'
import Link from 'next/link';

export default function Input() {
  const [formData, setFormData] = useState<FormData>({
    planes: true,
    cars: true,
    boats: true,
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

  // Basic Calculations

  const milesTraveled = (formData.miles.planes || 0) + (formData.miles.cars || 0) + (formData.miles.boats || 0);

  const planeCO2perMile = 400
  const carCO2perMile = 404
  const boatCO2perMile = 635

  const planeMaxMiles = 10000
  const carMaxMiles = 15000
  const boatMaxMiles = 20000

  const gOfCarbonReleasedByPlane = (formData.miles.planes || 0) * planeCO2perMile;
  const gOfCarbonReleasedByCar = (formData.miles.cars || 0) * carCO2perMile;
  const gOfCarbonReleasedByBoat = (formData.miles.boats || 0) * boatCO2perMile;
  const totalCarbonEmissions = gOfCarbonReleasedByPlane + gOfCarbonReleasedByCar + gOfCarbonReleasedByBoat;

  // Progress bar logic

  const totalThreshold = planeMaxMiles * planeCO2perMile + carMaxMiles * carCO2perMile + boatMaxMiles * boatCO2perMile
  const successThreshold = totalThreshold / 3 * 1;
  const warningThreshold = totalThreshold / 3 * 2;
  const dangerThreshold  = totalThreshold / 3 * 3;

  let successPercentage = (totalCarbonEmissions / successThreshold) * 100 / 3;
  let warningPercentage = ((totalCarbonEmissions - successThreshold) / (warningThreshold - successThreshold)) * 100 / 3;
  let dangerPercentage = ((totalCarbonEmissions - warningThreshold) / (dangerThreshold - warningThreshold)) * 100 / 3;

  // Ensure the percentages stay within 0% to 100%
  successPercentage = Math.min(100 / 3, Math.max(0, successPercentage));
  warningPercentage = Math.min(100 / 3, Math.max(0, warningPercentage));
  dangerPercentage = Math.min(100 / 3, Math.max(0, dangerPercentage));
  
  
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
                        min={0}
                        max={planeMaxMiles}
                        step={1}
                        value={formData.miles.planes || 0}
                        className='form-range' />
                    </span>
                    <span className="col-span-1">
                      <input
                        type="number"
                        className="form-control"
                        name="planes"
                        min={0}
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
                        min={0}
                        max={carMaxMiles}
                        step={1}
                        value={formData.miles.cars || 0}
                        className='form-range' />
                    </span>
                    <span className="col-span-1">
                      <input
                        type="number"
                        className="form-control"
                        name="cars"
                        min={0}
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
                        min={0}
                        max={boatMaxMiles}
                        step={1}
                        value={formData.miles.boats || 0}
                        className='form-range' />
                    </span>
                    <span className="col-span-1">
                      <input
                        type="number"
                        className="form-control"
                        min={0}
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
      <div className="flex content-center justify-center pb-2">
        {totalCarbonEmissions >= (1000 * dangerThreshold) ? 
          <h4>
            Climate change is a global crisis that requires immediate action from all of us. Your contribution to this problem is unacceptable, and I urge you to switch to more eco-friendly alternatives immediately.
          </h4> 
          : 
          <h4>
            Total Estimated*  Carbon Emissions: &nbsp; 
              <span>
                {(totalCarbonEmissions / 1000).toLocaleString("en-US")}
              </span>
            kg of carbon
          </h4>
        }
        
      </div>
      <div className="flex content-center justify-center pb-6">
        <div>
          <h4>
            Current rating: &nbsp;
            <span className={`text-bg-${totalCarbonEmissions >= dangerThreshold ? "danger" : totalCarbonEmissions >= warningThreshold ? "warning" : "success"} p-2 rounded transition-all`}>
              {totalCarbonEmissions >= dangerThreshold ? "Danger!" : totalCarbonEmissions >= warningThreshold ? "Warning!" : "Good!"}
            </span>
          </h4>
        </div>
      </div>
      <div className='px-10 pb-6'>
        <div className="progress-stacked">
          <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow={successPercentage} aria-valuemin={0} aria-valuemax={100} style={{ width: successPercentage + "%" }}>
            <div className="progress-bar  bg-success">Good</div>
          </div>
          <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow={warningPercentage} aria-valuemin={0} aria-valuemax={100} style={{ width: warningPercentage + "%" }}>
            <div className="progress-bar  bg-warning">Warning</div>
          </div>
          <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow={dangerPercentage} aria-valuemin={0} aria-valuemax={100} style={{ width: dangerPercentage + "%" }}>
            <div className="progress-bar  bg-danger">Danger</div>
          </div>
        </div>
      </div>
      
      <Link href="https://www.catf.us/" className="flex content-center justify-center">
        <button>Consider Donating to the <b>CLEAN AIR TASK FORCE</b></button>
      </Link>
      <div className="flex content-center justify-center">
        {totalCarbonEmissions >= dangerThreshold || totalCarbonEmissions >= warningThreshold ? <p>Consider reducing your travel <Link href={"/reduce/how-to-reduce/"} className={`link link-${totalCarbonEmissions >= dangerThreshold ? "danger" : totalCarbonEmissions >= warningThreshold ? "warning" : "success"} transition-all`}>Read More &rarr;</Link></p> : ""}
      </div>
      </>
  );
}
