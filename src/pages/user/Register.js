import { useEffect, useState } from "react";

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://xxx.onrender.com/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const jsonRes = await res.json();
      alert(jsonRes?.message);
    } catch (error) {
      alert("Failed create user...");
    }
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Register page</h1>
      <form onSubmit={handleSubmit}>
        <input value={newUser.name} onChange={handleChange} type="text" name="name" placeholder="your name" required />
        <input
          value={newUser.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="your mail address"
          required
        />
        <input
          value={newUser.password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="password"
          required
        />
        <button>register!</button>
      </form>
    </div>
  );
};

export default Register;
