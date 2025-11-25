import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";

const ProtectedLoginRoute = ({ children }) => {
  const [notLoggedIn, setNotLoggedIn] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) setNotLoggedIn(true);

      try {
        const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const data = await response.json();

        if (data.success) setNotLoggedIn(false);
        else {
          setNotLoggedIn(true);
          localStorage.removeItem("adminToken");
        }
      } catch (error) {
        setNotLoggedIn(true);
      }
    };

    checkStatus();
  }, []);

  if (notLoggedIn === null) return <div>Loading...</div>;
  if (!notLoggedIn) return <Navigate to={"/admin/dashboard"} replace />;

  return children;
};

export default ProtectedLoginRoute;
