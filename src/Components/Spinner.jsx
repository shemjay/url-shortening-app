import React, { useState, useEffect } from "react";
import './Spinner.css';

const Spinner = ({variant}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Make sure to return JSX
  return (
    isLoading ? (
      <div className={`spinner-container ${variant}`}>
        <div className="spinner"></div>
      </div>
    ) : null
  );
};

export default Spinner;
