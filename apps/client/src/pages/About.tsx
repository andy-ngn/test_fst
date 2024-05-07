import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const availablePaths = ["/", "/about", "/users"];
function About() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
  if (loading) return <h2>Loading...</h2>;
  return <h2>Message: {message}</h2>;
}

export default About;
