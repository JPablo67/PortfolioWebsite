/**
 * Home component
 *
 * The section at the top of the page to display an image of your
 * choice, name, and title that describes your career focus.
 */

import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/wallpaper.avif";

const imageAltText = "Adult female in office setting...";

const Home = ({ name, title }) => {
  // State to hold the style for the name
  const [h1Style, setH1Style] = useState({ marginRight: "20px", width: "500px" });

  // Function to update styles based on window size
  const updateStyle = () => {
    if (window.innerWidth < 600) {
      setH1Style({ marginRight: "10px", width: "300px" }); // Adjust for narrow screens
    } else {
      setH1Style({ marginRight: "20px", width: "500px" }); // Adjust for wider screens
    }
  };

  useEffect(() => {
    updateStyle(); // Set initial style
    window.addEventListener("resize", updateStyle); // Update style on window resize

    return () => {
      window.removeEventListener("resize", updateStyle); // Cleanup listener on unmount
    };
  }, []);

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1 style={h1Style}>{name}</h1> {/* Adjusted to use dynamic style */}
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
