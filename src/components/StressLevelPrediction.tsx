'use client'
import React, { useState } from "react";

function StressLevelPrediction() {
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [stepCount, setStepCount] = useState("");
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault(); 


    const requestData = {
      humidity: parseFloat(humidity),
      temperature: parseFloat(temperature),
      step_count: parseInt(stepCount, 10),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      setPrediction(data.prediction);
      
      setError("");
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setError(`Failed to fetch prediction: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-between items-center gap-12">
    <div className="container mx-auto px-4 mt-36 w-1/2">
      <h1 className="text-7xl text-center text-white font-semibold mb-4">Stress Level Prediction</h1>
\
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-white">Humidity:</label>
          <input
            type="text"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            required
            className="w-full border rounded py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-white">Body Temperature:</label>
          <input
            type="text"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
            className="w-full border rounded py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-white">Number of Steps:</label>
          <input
            type="text"
            value={stepCount}
            onChange={(e) => setStepCount(e.target.value)}
            required
            className="w-full border rounded py-2 px-3"
          />
        </div>

        
        <button type="submit" className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 mt-12">
          Predict
        </button>
      </form>

      {/* Display the prediction result */}
      {prediction && <h2 className="text-xl font-semibold mt-4 text-white">Prediction: {prediction}</h2>}

      {/* Display any error messages */}
      {error && (
        <div style={{ color: "red" }} className="mt-4">
          <p>{error}</p>
        </div>
      )}
    </div>
    <div>

    </div>
    </div>
  );
}

export default StressLevelPrediction;
