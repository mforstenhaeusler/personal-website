import styles from '../styles/General.module.css'
import ChapterBar from './chapterBar'


const data = {
  "title": "Full Bio",
  "paragraph_highlighted": "",
  "paragraph": [
    {"p": "I was born and raised in the South of Germany. Ever since I was young, I have been passionate for sports as well as academia. \
    I started swimming 🏊‍♂️ and playing football ⚽️ at a young age. In ninth grade, I got the chance to attend a boarding school in England.\
    There, I gained my first abroad experience, as well as finished my GCSE's."},
    {"p":"Continuing my education, I went back home to Germany to complete the German High School degree (Abitur).\
    By then I had dropped football and purely focussed on swimming as my extra curicular activity. In 2015, I was able to qualify for the Junior National Team and \
    competed at the 1st European Games in Baku."},
    {"p": "After completion of the Abitur, I was fortunate to get the opportunity to move to Washington D.C. to continue \
    swimming and of course academia, where I studied Mechanical Engineering (B.Sc.) and was part of the Division I Swimming and Diving Team."},
    {"p":"After completing my Bachelor's Degree in 2020, I started my graduate studies at the Technical University of Munich. Alongside my studies, I work as a working student \
    at BMW, focusing on digitalizing of engineering research, development and production processes through the application of artificial intelligence.\
    Further, I am an active member of Germany's largest student organization centered around artifical intelligence, where I led and now mentor the software development of web \
    and cloud based applications."},
    {"p": "I am a very open-minded person and eager to learn and expand my knowledge about artifical intelligence, \
    data anlytics, AI in science, robotics and its applications."},
  ],
  "button": "Find out more about me!",
  "button_link": "https://www.tum-ai.com/",
  "chapter_title": "About me",
  "chapter_number": "02",
}

export default function general({prefix}){
  const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
  return <div className={styles.Description}>
      <div className={styles.Grid}>
        <div className={styles.MiddleContainer}>
            <div className={styles.Title}>
              {data.title}
            </div>
            <div className={styles.Paragraph}>
              {data.paragraph.map((para, index)=>(
                <p key={index}> {para.p}</p>
              ))}
            </div>
            <div>
              <a className={styles.ButtonCV} href={cvLink} target="_blank" rel="noreferrer noopener"> CV </a>
            </div>
        </div>
        <div className={styles.RightContainer}>
          <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
        </div>
      </div>
    </div>
}