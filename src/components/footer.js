import styles from '../styles/Footer.module.css'
import Image from './Image.js'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub, FaLinkedinIn, FaInstagram, MdOutlineEmail } from 'react-icons/fa';

export default function Footer({ prefix }){
  const email = process.env.NEXT_PUBLIC_EMAIL;
    return (
     <footer className={styles.Footer}>
        <div className={styles.Grid}>
          <div className={styles.LeftConatiner}> 
            <div className={styles.Author}>{"Website by Maximilian Forstenhäusler"}</div>
            <div className={styles.Bottom}>
              <a className={styles.SocialWrapper} href="https://www.linkedin.com/in/maximilian-forstenhaeusler/">
                <FaLinkedinIn size={32} style={{ color: "white" }}/>                
                {/*<Image src={prefix + "/assets/linkedIn.svg"} alt="linkedIn" width={55} height={55}  objectFit="contain" />*/}
                </a>
                <a className={styles.SocialWrapper} href="https://www.instagram.com/max_for32/?hl=en">
                  <FaInstagram size={32} style={{ color: "white" }}/>
                {/*<Image src={prefix + "/assets/insta.svg"} alt="insta" width={55} height={55}  objectFit="contain" />*/}
                </a>
                <a className={styles.SocialWrapper} href="https://github.com/mforstenhaeusler">
                <FaGithub size={32} style={{ color: "white" }}/>
                {/*<Image src={prefix + "/assets/GitHub-Mark-Light.png"} alt="github" width={55} height={55} objectFit="contain" />*/}
                </a>
              <a className={styles.SocialWrapper} href={"mailto:"+email}> 
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }}/>   
              </a>
            </div>
          </div>
          <div className={styles.RightConatiner}> 
            <div className={styles.Text}>
              <p>
                {"If you like this website, give me a ⭐️ on "} 
                <a href="https://github.com/mforstenhaeusler/personal-website" className={styles.Link}>GitHub</a>
                {" 😉. You can download this template and instructions how to customize it "} 
              <a href="https://github.com/mforstenhaeusler/personal-website" className={styles.Link}>here!</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}