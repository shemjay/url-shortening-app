import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Statistics from "./Components/Statistics";
import Boost from "./Components/Boost";
import Footer from "./Components/Footer";
import FadeUpSection from "./Components/FadeTransition";
import Spinner from "./Components/Spinner";
import "./Components/Spinner.css";

// API TO USE: https://cleanuri.com/docs it sucks

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="app__container">
            <FadeUpSection>
              <Navbar />
            </FadeUpSection>
            <FadeUpSection>
              <Banner />
            </FadeUpSection>
          </div>
          <FadeUpSection>
            <Statistics />
          </FadeUpSection>

          <FadeUpSection>
            <Boost />
          </FadeUpSection>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
