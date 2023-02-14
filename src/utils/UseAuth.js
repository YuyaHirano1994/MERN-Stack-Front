import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const useAuth = () => {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/user/login");
    }

    try {
      const decoded = jwt_decode(token);
      setLoginUser(decoded.email);
    } catch (error) {
      navigate("/user/login");
    }
  }, [navigate]);

  return loginUser;
};

export default useAuth;
