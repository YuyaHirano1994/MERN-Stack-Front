import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../utils/UseAuth";

const Delete = () => {
  const params = useParams();

  const [Item, setItem] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    email: "",
  });

  useEffect(() => {
    document.title = "Delete";
    const getItem = async () => {
      const response = await fetch(`https://xxx.onrender.com/item/${params.id}`, {
        method: "GET",
      });
      const jsonRes = await response.json();

      setItem({
        ...Item,
        title: jsonRes?.singleItem?.title,
        price: jsonRes?.singleItem?.price,
        image: jsonRes?.singleItem?.image,
        description: jsonRes?.singleItem?.description,
        email: jsonRes?.singleItem?.email,
      });
    };
    getItem();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://xxx.onrender.com/item/delete/${params.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("failed to delete");
    }
  };

  const loginUser = useAuth();

  if (loginUser === Item.email) {
    return (
      <div className="delete-page">
        <h1 className="page-title">Delete Item</h1>
        <form onSubmit={handleSubmit}>
          <h2>{Item.title}</h2>
          {Item.image && <img src={require(`../../images${Item.image}`)} alt="item" />}
          <h3>${Item.price}</h3>
          <p>{Item.description}</p>
          <button>Delete</button>
        </form>
      </div>
    );
  } else {
    return <h1>Not your Item</h1>;
  }
};

export default Delete;
