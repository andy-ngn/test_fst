import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const availablePaths = ["/", "/about", "/users"];
function Users() {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (availablePaths.includes(currentPath)) {
      navigate(currentPath);
    }
  }, [currentPath, navigate]);
  if (!availablePaths.includes(currentPath)) {
    return <h1>404 Not Found</h1>;
  }
  return <h2>Users</h2>;
}
export default Users;
