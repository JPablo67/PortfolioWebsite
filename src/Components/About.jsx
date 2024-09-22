/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/backdrop.avif";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m a Software Developer currently finishing my Bachelor’s Degree in Software Engineering. I enjoy building and applying solutions through software. While I primarily work on the back end, I am a full-stack software developer. I have a passion for learning new things and implementing the latest industry standards in my projects.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Back-end development with Java(8 / 11 / 17 / 22) and Python",
  "Front-end design with a focus on user experience",
  "Managing databases and optimizing data storage",
  "Using Docker and Kubernetes for project deployment",
  "Creating reliable, maintainable software using best practices",
  "Quick learning and adapting to new industry standards",
  "Collaborative problem-solving and teamwork",
  "Java (Spring Boot, Hibernate, JPA)",
  "Angular (TypeScript, JavaScript, HTML, CSS)",
  "RESTful APIs and microservices",
  "SOILD principles and design patterns",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about creating innovative software solutions that address user needs and enhance accessibility. By leveraging my development experience, I continuously seek new ways to improve the functionality and usability of technology for everyone. With the highest standards of quality, security and maintainability, I strive to deliver the best possible software solutions.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            textAlign: "left",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ flex: "1 1 45%", minWidth: "200px" }}>
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
