"use client"

import { useState, useEffect } from "react";
import Nav from "@/components/nav";
import styles from "@/app/style.css"
import Footer from "@/components/footer";



export default function About() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/about/kanye")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

    return(
        <>
        <Nav/>
        <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src="./assets/IMG_7685.jpg" alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src="./assets/experience.png" alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>1+ months <br/>Frontend Development</p>
              </div>
              <div className="details-container">
                <img src="./assets/education.png" alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>Student in Computer Science <br/>UNC Chapel Hill</p>
              </div>
            </div>
            <div className="text-container">
              <p>A motivated and creative first-year student at UNC-Chapel Hill with
                excellent analytical and problem-solving skills. A very
                quick learner with great attention to detail, immensely
                passionate about the STEM field.
                A well-rounded team player with great organizational and
                coordinating abilities, dedicated to pursuing higher-level
                research and professional experiences.
              </p>
              <br/>
              <p className="kanye">Here is your Kanye quote of the day:</p>
              <h3 className="quote">{data.quote}</h3>
            </div>
          </div>
        </div>

        <Footer/>
      </section>
      </>
    )
}