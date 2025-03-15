import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

function Ahome() {
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:4000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });

    // Fetch vendors data
    axios.get(`http://localhost:4000/sellers`)
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings: ', error);
      });

    // Fetch items data
    axios.get(`http://localhost:4000/item`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings: ', error);
      });

    // Fetch orders data
    axios.get(`http://localhost:4000/orders`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings: ', error);
      });
  }, []);

  // Calculate the number of users and bookings
  const totalUsers = users.length;
  const totalvendors = vendors.length;
  const totalItems = items.length;
  const totalOrders = orders.length;

  // Define data for the bar chart
  const data = [
    { name: 'Users', value: totalUsers, fill: 'red' }, 
    { name: 'Vendors', value: totalvendors, fill: 'indigo' }, 
    { name: 'Items', value: totalItems, fill: 'magenta' },
    { name: 'Orders', value: totalOrders, fill: 'yellow' }
  ];

  return (
    <div style={{ 
      backgroundImage: 'url(https://img.freepik.com/free-photo/stock-market-graph-financial-data-electronic-board-laptop-screen_169016-14899.jpg?t=st=1741936146~exp=1741939746~hmac=9fac9e3c4f4af2eaac140ecaad2c43ef8338ac69a63a35c15cc216f209ad8dd2&w=1380)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh' 
    }}>
      <Anavbar />
      <h3 className="text-center" style={{ color: "" }}>DashBoard</h3>
      <Card body style={{ background: "skyblue", width: "80%", marginLeft: "10%", marginTop: "20px", height: "600px" }}>
        <div className="flex justify-around items-center p-4">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 bg-red-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
              USERS <br /> <br />{totalUsers}
            </div>
          </Link>
          <Link to="/vendors" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 bg-indigo-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
              Vendors <br /> <br /> {totalvendors}
            </div>
          </Link>
          <Link to="/items" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 bg-pink-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
              Items <br /> <br />{totalItems}
            </div>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 bg-yellow-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
              Total Orders <br /> <br />{totalOrders}
            </div>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div style={{ paddingLeft: "350px" }}>
          <BarChart width={400} height={300} data={data} >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" barSize={50} />
          </BarChart>
        </div>
      </Card>
    </div>
  );
}

export default Ahome;
