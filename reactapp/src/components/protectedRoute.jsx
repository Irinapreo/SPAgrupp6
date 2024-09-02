import React, { useEffect } from 'react';

const ProtectedComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:3000/protected-route", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,  // Skicka token i rubriken
          },
        });

        if (!response.ok) {
          throw new Error("Authorization failed");
        }

        const data = await response.json();
        console.log("Access granted:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Content</h1>
    </div>
  );
};

export default ProtectedComponent;
