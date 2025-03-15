import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home'; // Import the Home component

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/asignup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/alogin');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Home />
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative max-w-md w-full bg-white p-8 rounded-md shadow-md overflow-hidden">
          {/* Front side of the card */}
          <div className="relative z-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
                Admin Registration
              </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                >
                  Signup
                </button>
              </div>

              <p className="text-sm text-gray-600">
                Already have an account{' '}
                <button
                  onClick={formHandle1}
                  className="text-indigo-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                >
                  Login
                </button>
              </p>
            </form>
          </div>

          {/* Backside tilted background */}
          <div
            className="absolute h-full w-full bg-indigo-500 transform -skew-y-6 origin-bottom-right"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Asignup;