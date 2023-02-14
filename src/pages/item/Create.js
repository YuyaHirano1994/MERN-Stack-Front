import React, { useEffect, useState } from "react";
import useAuth from "../../utils/UseAuth";
import ImageInput from "../../components/ImageInput";

const Create = () => {
  const [newItem, setNewItem] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://xxx.onrender.com/item/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newItem),
      });
      const jsonRes = await response.json();
      alert(jsonRes?.message);
    } catch (error) {
      alert("Failed to create new item");
    }
  };

  useEffect(() => {
    document.title = "Create";
  }, []);

  const loginUser = useAuth();

  if (loginUser) {
    return (
      <div>
        <h1 className="page-title">Register new Item</h1>
        <ImageInput newItem={newItem} setNewItem={setNewItem} />
        <form onSubmit={handleSubmit}>
          <input
            value={newItem.title}
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Item name"
            required
          />
          <input
            value={newItem.price}
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Price"
            required
          />
          <input value={newItem.image} onChange={handleChange} type="text" name="image" placeholder="Image" required />
          <textarea
            value={newItem.description}
            onChange={handleChange}
            type="text"
            name="description"
            rows="15"
            placeholder="description"
            required
          ></textarea>
          <button>ADd new item</button>
        </form>
      </div>
    );
  }
};

export default Create;
