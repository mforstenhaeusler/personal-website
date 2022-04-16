import styles from '../styles/About.module.css'
import stylesChapterBar from '../styles/ChapterBar.module.css'


const data = {
  "title": "We at TUM.ai are thrilled to have you on board and can't wait to hear what you and your team come up with! 🚀",
  "paragraph_highlighted": "Makeathon is a 48-hour virtual challenge in which motivated students and young professionals develop a working AI solution for a real-world business case.",
  "paragraph": " Innovators of tomorrow work together in interdisciplinary teams on developing a prototype for the challenges in Education, Environment, and MedTech tracks. As the largest student-organized Makeathon in Germany, you can expect numerous exciting speakers, challenges, cool prizes, and excellent opportunities to meet like-minded people and connect with industry leaders, start-ups, and research groups. Due to the ongoing Corona Pandemic, all events will be held online.",
  "button": "Find out more about me!",
  "button_link": "https://www.tum-ai.com/",
  "chapter_title": "About me",
  "chapter_number": "01",
}


export default function About(){

  function ChapterBar({number, content, isDarkBackground}){
    if(isDarkBackground){
      return <div className={stylesChapterBar.ChapterBarItem}>
        <div className={stylesChapterBar.LeftConteiner}>
          <div className={stylesChapterBar.Number}>{number}</div>
        </div>
        <div className={stylesChapterBar.Separartor}></div>
        <div className={stylesChapterBar.RightConteiner}>
          <div className={stylesChapterBar.Chapter}>{content}</div>
        </div>
      </div>
    }else{
      return <div className={stylesChapterBar.ChapterBarItem}>
        <div className={stylesChapterBar.LeftConteiner}>
          <div className={stylesChapterBar.NumberDark}>{number}</div>
        </div>
        <div className={stylesChapterBar.SeparartorDark}></div>
        <div className={stylesChapterBar.RightConteiner}>
          <div className={stylesChapterBar.ChapterDark}>{content}</div>
        </div>
      </div>
    }
  }

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
          <div >
            {/*<Button content={data.button} link="https://www.tum-ai.com/" isDarkBackground={false}/>*/}
            <a className={styles.Button} href="#"> {data.button} </a>
          </div>
        </div>
      </div>
    </div>
  </div>
}