import React, { useEffect, useRef } from "react";
import "./FadeTransition.css";

const FadeUpSection = ({ children, transitionTime = 0.6 }) => {
  const fadeUpTime = {
    transitionDuration: `${transitionTime}s`,
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="fade-up" style={fadeUpTime} ref={sectionRef}>
      {children}
    </div>
  );
};

export default FadeUpSection;
