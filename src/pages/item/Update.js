import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../utils/UseAuth";

const Update = () => {
  const params = useParams();

  const [Item, setItem] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    email: "",
  });

  useEffect(() => {
    document.title = "Update";
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

  console.log(Item);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://xxx.onrender.com/item/update/${params.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(Item),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("failed to edit");
    }
  };

  const handleChange = (e) => {
    setItem({
      ...Item,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = useAuth();

  if (loginUser === Item.email) {
    return (
      <div>
        <h1 className="page-title">Edit Item</h1>
        <form onSubmit={handleSubmit}>
          <input value={Item.title} onChange={handleChange} type="text" name="title" placeholder="Item name" required />
          <input value={Item.price} onChange={handleChange} type="number" name="price" placeholder="Price" required />
          <input value={Item.image} onChange={handleChange} type="text" name="image" placeholder="Image" required />
          <textarea
            value={Item.description}
            onChange={handleChange}
            type="text"
            name="description"
            rows="15"
            placeholder="description"
            required
          ></textarea>
          <button>Edit</button>
        </form>
      </div>
    );
  } else {
    return <h1>Not your Item</h1>;
  }
};

export default Update;
