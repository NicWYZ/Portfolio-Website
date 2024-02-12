import Nav from "@/components/nav";
import styles from "@/app/style.css"
import Likebtn from '@/components/likebtn';
import Footer from "@/components/footer";
import CreateSub from "@/components/create-sub";


export default function Contact() {

    return(
        <>
        <Nav/>
        <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="/assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon" />
            <p><a href="mailto:nicolas20041113@gmail.com">
              nicolas20041113@gmail.com
            </a></p>
          </div>
          <div className="contact-info-container">
            <img src="/assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/nicolas-zhang-2a559821b/">
              LinkedIn
            </a></p>
          </div>
          <Likebtn/>
        </div>
      </section>

      <Footer/>
        </>
    )
}