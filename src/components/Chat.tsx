'use client'
import React, { useState } from 'react'

function Chat() {
  const [user_input, setuser_input] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      user_input: user_input
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/chatbot/", {
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
      console.log(data.response);
      setResponse(data.response);
      setError("");
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setError(`Failed to fetch prediction: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 flex flex-col gap-6 mt-20">
      <div className='flex justify-center items-center'>
      <h1 className="text-2xl font-bold mb-4 text-white">Say hello to our chatbot</h1>
      </div>

      <form onSubmit={handleSubmit} className="mb-4 flex justify-center items-center gap-6 text-center">
        <div>
          <input
            type="text"
            value={user_input}
            onChange={(e) => setuser_input(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded ">Send</button>
      </form>
      {response && <h2 className="text-xl text-white text-center">{response}</h2>}

      {error && (
        <div style={{ color: "red" }} className="mt-4">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default Chat;
