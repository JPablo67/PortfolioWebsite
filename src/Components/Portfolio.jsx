import React, { useState } from "react";

// Project list for portfolio
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner-friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "",
  },
  {
    title: "GitHub",
    description:
      "A collection of repositories that I've worked on. These include projects from school, personal projects, professional projects, and contributions to open source.",
    url: "https://github.com/JPablo67",
  },
];

// Portfolio Component
const Portfolio = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState(""); // For feedback to the user

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://200.118.101.70:5001/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ textAlign: "center" }}>Contact Me</h3>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <label htmlFor="email" style={{ marginBottom: "0.5rem" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <label htmlFor="message" style={{ marginBottom: "0.5rem" }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.7rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem", color: "green" }}>
          {status}
        </p>
      </div>
    </section>
  );
};

export default Portfolio;