import Nav from "@/components/nav";
import styles from "@/app/style.css"
import Link from 'next/link';
import Footer from "@/components/footer";



export default function Projects() {
    return(
        <>
        <Nav/>
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
        <Footer/>
      </section>
        </>
    )
}