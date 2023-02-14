import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Item = () => {
  const params = useParams();

  const [item, setItem] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(`https://xxx.onrender.com/item/${params.id}`, {
        method: "GET",
      });
      const jsonRes = await response.json();

      setItem({
        ...item,
        title: jsonRes?.singleItem?.title,
        price: jsonRes?.singleItem?.price,
        image: jsonRes?.singleItem?.image,
        description: jsonRes?.singleItem?.description,
      });
    };
    getItem();
  }, [params.id]);

  return (
    <div className="grid-container-si">
      <div>{item.image && <img src={item.image} alt="item" />}</div>
      <div>
        <h1>{item.title}</h1>
        <h3>${item.price}</h3>
        <hr />
        <p>{item.description}</p>
        <Link to={`/item/update/${params.id}`}>Edit</Link>
        <br></br>
        <Link to={`/item/delete/${params.id}`}>Delete</Link>
      </div>
    </div>
  );
};

export default Item;
