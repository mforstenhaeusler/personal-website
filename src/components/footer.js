import styles from '../styles/Footer.module.css'
import Image from './Image.js'

export default function Footer({ prefix }){
    return (
     <footer className={styles.Footer}>
        <div className={styles.Grid}>
          <div className={styles.LeftConatiner}> 
            <div className={styles.Author}>{"Website by Maximilian Forstenhäusler"}</div>
            <div className={styles.Bottom}>
              <a className={styles.SocialWrapper} href="https://www.linkedin.com/in/maximilian-forstenhaeusler/">
                <Image src={prefix + "/assets/linkedIn.svg"} alt="linkedIn" layout="fill" objectFit="cover"/>
              </a>
              <a className={styles.SocialWrapper} href="#">
                <Image src={prefix + "/assets/insta.svg"} alt="insta" layout="fill" objectFit="cover"/>
              </a>
              <a className={styles.SocialWrapper} href="https://github.com/mforstenhaeusler">
                <Image src={prefix + "/assets/GitHub-Mark-Light.png"} alt="github" layout="fill" objectFit="cover" />
              </a>
              <a className={styles.SocialWrapper} href="mailto:contact@tum-ai.com">                 
                <Image src={prefix + "/assets/email-icon-2.svg"} alt="mail" layout="fill" objectFit="cover" />
              </a>
            </div>
          </div>
          <div className={styles.RightConatiner}> 
            <div className={styles.Text}>
              <p>
                {"If you like this website, give me a ⭐️ on github 😉. You can download this template and instructions how to customize it "} 
              <a href="https://github.com/mforstenhaeusler/personal-website-template" className={styles.Link}>here!</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}