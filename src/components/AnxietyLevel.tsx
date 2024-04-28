'use client'
import React, { useState } from 'react'

function AnxietyLevel() {
    const [text, setText] = useState("");
    const [prediction, setPrediction] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault(); 
      const requestData = {
        text : text
      };
  
      try {
        const response = await fetch("http://127.0.0.1:8000/anxi/", {
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
  
        console.log(data);
        console.log(data.prediction);
        setPrediction(data.prediction);
       
        setError("");
      } catch (error) {
        console.error("Error fetching prediction:", error);
        setError(`Failed to fetch prediction: ${error.message}`);
      }
    };

  return (
    <div className="container mx-auto max-w-md p-4 mt-44">
      <h1 className="text-4xl text-white font-bold mb-4">Anxiety Level Prediction</h1>

 
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white">Enter text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button type="submit" className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Predict
        </button>
      </form>
      {prediction && <h2 className="text-xl font-bold mt-4">Prediction: {prediction}</h2>}

      {error && (
        <div className="text-red-500 mt-4">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default AnxietyLevel
