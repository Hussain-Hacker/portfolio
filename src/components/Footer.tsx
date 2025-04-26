import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; {currentYear} Muzammal Hussain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
