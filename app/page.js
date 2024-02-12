import styles from './style.css'
import Likebtn from '@/components/likebtn';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

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
  
      <Nav/>

      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/IMG_0802.jpg" alt="Nicolas Zhang profile pic" className="pic"/>
          </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Nicolas Zhang</h1>
          <p className="section__text__p2">Full-Stack Developer</p>
          <div className="btn-container">
            <Link href={"./assets/resume.pdf"}>
              <button className="btn btn-color-2">Resume</button>
            </Link>
            <Link href={"./contact"}>
              <button className="btn btn-color-1">Contact Info</button>
            </Link>
          </div>
          
          <div id="social-container">
            <Link href={"https://www.linkedin.com/in/nicolas-zhang-2a559821b/"}>
              <img src="./assets/linkedin.png" alt="My LinkedIn Profile" className="icon"/>
            </Link>
            <Link href={"https://github.com/NicWYZ"}>
              <img src="./assets/github.png" alt="My GitHub Profile" className="icon"/>
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    
      </>
  )
  }
