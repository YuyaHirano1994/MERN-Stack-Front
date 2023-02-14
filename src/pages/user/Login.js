import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://xxx.onrender.com/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      localStorage.setItem("token", jsonResponse.token);
      alert(jsonResponse.message);
    } catch (err) {
      alert("Failed...");
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div>
      <h1 className="page-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
