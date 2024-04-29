'use client'
import React, { useState } from 'react'

function Sleep() {
   
   const [sleep_duration, setsleep_duration] = useState("");
   const [sleep_efficiency, setsleep_efficiency] = useState("");
   const [sleep_disturbance, setsleep_disturbance] = useState("");
   const [prediction, setPrediction] = useState("");
   const [error, setError] = useState("");
 
   
   const handleSubmit = async (e) => {
     e.preventDefault(); 
     const requestData = {
        sleep_duration: parseFloat(sleep_duration),
        sleep_efficiency: parseFloat(sleep_efficiency),
        sleep_disturbance: parseInt(sleep_disturbance, 10),
     };
 
     try {
       
       const response = await fetch("http://127.0.0.1:8000/sleep/", {
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
     <div className="max-w-lg w-full mx-auto p-12 bg-mainb border border-white rounded-lg shadow-md mt-44">
       <h1 className="text-2xl font-bold mb-4 text-center text-white">Sleep Level Prediction</h1>
 
       <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label className="block text-gray-500 mb-2">Sleep Duration:</label>
           <input
             type="text"
             value={sleep_duration}
             onChange={(e) => setsleep_duration(e.target.value)}
             required
             className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
           />
         </div>
 
         <div>
           <label className="block text-gray-500 mb-2">Sleep Efficiency:</label>
           <input
             type="text"
             value={sleep_efficiency}
             onChange={(e) => setsleep_efficiency(e.target.value)}
             required
             className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
           />
         </div>
 
         <div>
           <label className="block text-gray-500 mb-2">Sleep Disturbance:</label>
           <input
             type="text"
             value={sleep_disturbance}
             onChange={(e) => setsleep_disturbance(e.target.value)}
             required
             className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4"
           />
         </div>
 
         <button type="submit" className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600">Predict</button>
       </form>
       {prediction && <h2 className="text-xl font-semibold mt-4">Prediction: {prediction}</h2>}
 
     
       {error && (
         <div style={{ color: "red" }} className="mt-4">
           <p>{error}</p>
         </div>
       )}
     </div>
   ); 
}

export default Sleep
