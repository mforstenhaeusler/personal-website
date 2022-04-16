import styles from '../styles/Hero.module.css'
import Image from '../components/Image.js';
import Link from 'next/link'
/*import Headline1 from './components/headline1.js';*/



const data = {
  "firstname": "Maximilian",
  "lastname": "Forstenhäusler",
  "student": "M.Sc. in Robotics, Cognition, Intelligence",
  "work": "Working Student @ BMW",
  "workLink": "https://www.bmw.com/",
  "university": "TUM",
  "universityLink": "https://www.tum.de/" 
}

export default function Hero({ prefix }){
  return <div className={styles.HeroItem}>
    <div className={styles.Background}>
      <div className={styles.BgContainer}>
      </div>
    </div>
    <div className={styles.Grid}>
      <div className={styles.LeftContainer}>
        <div className={styles.UpperContainer}>
            <p className={styles.headerTop}> {data.firstname}</p>
            <p className={styles.headerBottom}> {data.lastname}</p>
        </div>
        <div className={styles.MiddleContainer}>
            <p className={styles.Work}><a href={data.workLink}>{data.work} </a></p>
            <p className={styles.Student}> {data.student}</p>
            <a href={data.universityLink} className={styles.University}>{data.university} </a>
        </div>
        <div className={styles.BottomContainer}>
            <div className={styles.Logo}> 
                <a className={styles.subLogo} href="https://www.linkedin.com/in/maximilian-forstenhaeusler/">
                <Image src={prefix + "/assets/linkedIn.svg"} alt="linkedIn" width={55} height={55}  objectFit="contain" />
                </a>
                <a className={styles.subLogo} href="#">
                <Image src={prefix + "/assets/insta.svg"} alt="insta" width={55} height={55}  objectFit="contain" />
                </a>
                <a className={styles.subLogo} href="https://github.com/mforstenhaeusler">
                <Image src={prefix + "/assets/GitHub-Mark-Light.png"} alt="github" width={55} height={55} objectFit="contain" />
                </a>
                <a className={styles.subLogo} href="mailto:contact@tum-ai.com">                 
                <Image src={prefix + "/assets/email-icon-2.svg"} alt="github" layout="fill" objectFit="cover" />
              </a>
            </div>
        </div>
      </div>
      <div className={styles.RightContainer}>
        <Image src={prefix +  "/assets/IMG_0443.JPG"} alt={"LinkedIn"} width={280} height={400} objectFit="cover" className={styles.headshot}/>
      </div>
    </div>
  </div>
}