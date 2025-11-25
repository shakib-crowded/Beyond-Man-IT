import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";

const ProtectedAdminRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setIsAuth(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const data = await response.json();

        if (data.success) setIsAuth(true);
        else setIsAuth(false);
      } catch (error) {
        setIsAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  if (!isAuth) return <Navigate to={"/admin/login"} replace />;

  return children;
};

export default ProtectedAdminRoute;
