import styles from '../styles/Hero.module.css'
import Image from '../components/Image.js';
import Link from 'next/link'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub, FaLinkedinIn, FaInstagram, MdOutlineEmail } from 'react-icons/fa';
import ChapterBar from './chapterBar'
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

const dataAbout = {
  "title": "",
  "paragraph_highlighted": "",
  "paragraph": "Welcome to my website 😊. I am currently pursing my graduate studies at the Technical Univeristy of Munich (TUM). Along side my studies, I am a working \
  student at BMW, focussing on digitalizing engineering research, development and production processes through the application of artificial \
  intelligence. Further, I am an active member of Germany largest student organization centred around artifically intelligence, where I lead the \
  software development of web and cloud based applications. In general, I am a very open-minded person and eager to learn and \
  expand my knowledge about artifical intelligence, data analytics, robotics and its applications.",
  "button": "Find out more about me!",
  "button_link": "/personal",
  "cvlink": "",
  "chapter_title": "About me",
  "chapter_number": "01",
}

export default function Hero({ prefix }){
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
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
                <FaLinkedinIn size={32}/>                
                {/*<Image src={prefix + "/assets/linkedIn.svg"} alt="linkedIn" width={55} height={55}  objectFit="contain" />*/}
                </a>
                <a className={styles.subLogo} href="https://www.instagram.com/max_for32/?hl=en">
                  <FaInstagram size={32}/>
                {/*<Image src={prefix + "/assets/insta.svg"} alt="insta" width={55} height={55}  objectFit="contain" />*/}
                </a>
                <a className={styles.subLogo} href="https://github.com/mforstenhaeusler">
                <FaGithub size={32}/>
                {/*<Image src={prefix + "/assets/GitHub-Mark-Light.png"} alt="github" width={55} height={55} objectFit="contain" />*/}
                </a>
                <a className={styles.subLogo} href={"mailto:" + email}> 
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }}/>               
                {/*<Image src={prefix + "/assets/email-icon-2.svg"} alt="github" width={55} height={55} objectFit="contain" />*/}
              </a>
            </div>
        </div>
      </div>
      <div className={styles.RightContainer}>
        <Image src={prefix +  "/assets/IMG_0443.JPG"} alt={"Profile-IMG"} width={280} height={400} objectFit="cover" className={styles.headshot}/>
      </div>
    </div>
    {/* About section*/}
    <div className={styles.AboutDescription}>
      <div className={styles.AboutGrid}>
        <div className={styles.AboutLeftContainer}>
          <ChapterBar number={dataAbout.chapter_number} content={dataAbout.chapter_title} isDarkBackground={false}/>
        </div>
        <div className={styles.AboutMiddleContainer}>
          {/*<Headline1 isH1={false} normalContent={data.title} highlightedContent={""} isDarkBackground={false}/>*/}
          {dataAbout.title}
          <div className={styles.AboutParagraph}>
            {/*<Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted} normalContent={data.paragraph} isDarkBackground={false}/>*/}
            {dataAbout.paragraph}
          </div>
          <div className={styles.AboutButtonGroup}> 
            <div>
              <Link href={dataAbout.button_link}>
                <a className={styles.AboutButton}> {dataAbout.button} </a>
              </Link>
            </div>
            <div>
              <a className={styles.AboutButtonCV} href={cvLink} target="_blank" rel="noreferrer noopener"> CV </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
}