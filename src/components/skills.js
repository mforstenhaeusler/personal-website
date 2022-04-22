import styles from '../styles/Skills.module.css';
import Image from '../components/Image.js';
import ChapterBar from './chapterBar'

const data = {
    "chapter_number": "03",
    "chapter_title": "Programmins Skills",
    "title": "Programming Skills",
    "skills": [
        {"skill": "python", "logo":  "/skills/Python_logo_and_wordmark.svg", "url": "https://www.python.org/", "width": 120, "height": 120},
        {"skill": "pytorch", "logo":  "/skills/Pytorch_logo.png", "url": "https://pytorch.org/", "width": 100, "height": 100},
        {"skill": "numpy", "logo":  "/skills/NumPy_logo_2020.svg", "url": "https://numpy.org/", "width": 100, "height": 100},
        {"skill": "tensorflow", "logo":  "/skills/TensorFlow_logo.svg", "url": "https://tensorflow.org/", "width": 100, "height": 100},
        {"skill": "django", "logo":  "/skills/django-logo.png", "url": "https://django.org/", "width": 80, "height": 80},
        {"skill": "next.js", "logo":  "/skills/Nextjs-logo.svg", "url": "https://nextjs.org/", "width": 70, "height": 70},
        {"skill": "js", "logo":  "/skills/JavaScript-logo.png", "url": "https://www.javascript.com/", "width": 50, "height": 50},
    ]
}

export default function Skills({prefix}) {
    return (
        <div className={styles.SkillsItem}>
            <div className={styles.Grid}>
                <div className={styles.LeftContainer}> 
                    <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
                </div>
                <div className={styles.RightContainer}>
                    <div className={styles.SkillsLogoItem}>
                        <div className={styles.Header}> {data.title} </div> 
                    </div>
                    <div className={styles.SkillsLogoItem}> 
                        {data.skills.map((skill, index)=>(
                            <a key={index} className={styles.Logo} href={skill.url}>
                                <Image src={prefix + skill.logo} alt={skill.skill} width={skill.width} height={skill.height}  objectFit="contain" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>            
        </div>
    )
}
