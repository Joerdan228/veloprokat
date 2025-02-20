import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios.get("/api/bikes")
      .then(response => setBikes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Доступные велосипеды</h1>
      <ul>
        {bikes.map(bike => (
          <li key={bike.id}>
            {bike.model} - {bike.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;