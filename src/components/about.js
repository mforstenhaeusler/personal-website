import styles from '../styles/About.module.css'
import ChapterBar from './chapterBar'
import Link from 'next/link'


const data = {
  "title": "",
  "paragraph_highlighted": "",
  "paragraph": "I am currently pursing my graduate studies at the Technical Univeristy of Munich (TUM). Along side my studies, I work as a working \
  student at BMW, focussing on digitalizing of engineering research, development and production processes through the application of artificial \
  intelligence. Further, I am an active member of a student organization centred around artifically intelligence, where I lead the \
  software development of web and cloud based applications. In general, I am a very open-minded person and eager to learn and \
  expand my knowledge about artifical intelligence, data anlytics, robotics and its applications.",
  "button": "Find out more about me!",
  "button_link": "/personal",
  "cvlink": "",
  "chapter_title": "About me",
  "chapter_number": "01",
}


export default function About({prefix}){
  const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
  return <div className={styles.AboutItem}>
    <div className={styles.Description}>
      <div className={styles.Grid}>
        <div className={styles.LeftContainer}>
          <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
        </div>
        <div className={styles.MiddleContainer}>
          {/*<Headline1 isH1={false} normalContent={data.title} highlightedContent={""} isDarkBackground={false}/>*/}
          {data.title}
          <div className={styles.Paragraph}>
            {/*<Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted} normalContent={data.paragraph} isDarkBackground={false}/>*/}
            {data.paragraph}
          </div>
          <div className={styles.ButtonGroup}> 
            <div>
              <Link href={data.button_link}>
                <a className={styles.Button}> {data.button} </a>
              </Link>
            </div>
            <div>
              <a className={styles.ButtonCV} href={cvLink} target="_blank" rel="noreferrer noopener"> CV </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}