import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [allItems, setAllItems] = useState();

  useEffect(() => {
    const getAllItems = async () => {
      const response = await fetch("https://xxx.onrender.com", {
        methoid: "GET",
      });
      const jsonRes = await response.json();
      setAllItems(jsonRes);
    };
    getAllItems();
  }, []);

  return (
    <div className="container">
      <div className="grid-container-in">
        {allItems?.allItems.map((item) => (
          <Link to={`/item/${item._id}`} key={item._id}>
            <img src={item.image} alt="item" />
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
