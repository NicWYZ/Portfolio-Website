import styles from './style.css'
import Likebtn from '@/components/likebtn';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

{/*
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
*/}

export default function Home() {
  return (
    <>
    <nav id="desktop-nav">
      <div className="logo">Nicolas Zhang</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    
    {/*<nav id="hamburger-nav">
        <div className="logo">Nicolas Zhang</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu()}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu()}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu()}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu()}>Contact</a></li>
          </div>
        </div>
  </nav>
  */}
  

      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/IMG_0813.JPG" alt="Nicolas Zhang profile pic" className="pic"/>
          </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Nicolas Zhang</h1>
          <p className="section__text__p2">Frontent Developer</p>
          <div className="btn-container">
            <Link href={"./assets/resume.pdf"}>
              <button className="btn btn-color-2">Resume</button>
            </Link>
            <Link href={"./#contact"}>
              <button className="btn btn-color-1">Contact Info</button>
            </Link>
          </div>
          
          <div id="social-container">
            <Link href={"https://linkedin.com/in/weiyang-zhang-2a559821b"}>
              <img src="./assets/linkedin.png" alt="My LinkedIn Profile" className="icon"/>
            </Link>
            <Link href={"https://github.com/NicWYZ"}>
              <img src="./assets/github.png" alt="My GitHub Profile" className="icon"/>
            </Link>
          </div>
        </div>
      </section>
      
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
            </div>
          </div>
        </div>

        <Link href={"./#experience"}>
          <img src="./assets/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </Link>
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore my</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontent Development</h2>
              <div className="article-container">
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Learning</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Learning</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Learning</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Next.JS</h3>
                    <p>Learning</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Java</h3>
                    <p>Learning</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Learning</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <Link href={"./#projects"}>
          <img src="./assets/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </Link>
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/Project1_screenshot.png"
                  alt="Project 1"
                  className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <Link href={"https://github.com/MHGamingINC/AgriculturalWaterUsage.git"}>
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link href={"https://youtu.be/A48mvhLYSzs"}>
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/project-2.png"
                  alt="Project 2"
                  className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Two</h2>
              <div className="btn-container">
                <Link href={"https://github.com/"}>
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link href={"https://github.com/"}>
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/project-3.png"
                  alt="Project 3"
                  className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <Link href={"https://github.com/"}>
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link href={"https://github.com/"}>
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link href={"./#contact"}>
          <img src="./assets/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </Link>
      </section>
      
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon" />
            <p><a href="mailto:nicolas20041113@gmail.com">
              nicolas20041113@gmail.com
            </a></p>
          </div>
          <div className="contact-info-container">
            <img src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon" />
            <p><a href="https://linkedin.com/in/weiyang-zhang-2a559821b">
              LinkedIn
            </a></p>
          </div>
          <Likebtn/>
        </div>
      </section>
      
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Nicolas Zhang. All Rights Reserved</p>
      </footer></>
  )
  }
