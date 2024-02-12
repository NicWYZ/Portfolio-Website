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
            <div className="img-container color-container">
              <div className="article-container">
                <img src="/assets/Project1_screenshot.png"
                  alt="Project 1"
                  className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Agricultural Simulator</h2>
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
            <div className="img-container color-container">
              <div className="article-container">
                <img src="/assets/spotify_screenshot.png"
                  alt="Project 2"
                  className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Spotify Clone</h2>
              <div className="btn-container">
                <Link href={"https://github.com/NicWYZ/Nicolas-s-Spotify-Clone"}>
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </Link>
                <Link href={"https://nicolas-s-spotify-clone.vercel.app/"}>
                  <button className="btn btn-color-2 project-btn">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="img-container color-container">
              <div className="article-container">
                <img src="/assets/project-3.png"
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