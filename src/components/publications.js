import styles from "../styles/Publications.module.css"
import Image from "./Image"

const data = {
    "publications": [
        {
            "title":"GUIDELINES TO SIMULATE LINEAR VISCOELASTIC MATERIALS WITH AN ARBITRARY NUMBER OF CHARACTERISTIC TIMES IN THE CONTEXT OF ATOMIC FORCE MICROSCOPY",
            "link":"http://casopisi.junis.ni.ac.rs/index.php/FUMechEng/article/view/6927",
            "github": "https://github.com/mforstenhaeusler/AFMviscoelastic",
            "img": "/assets/publication1.png",
            "authers": "Maximilian Forstenhäusler, Enrique A. López-Guerra, Santiago D. Solares",
            "pdf": "http://casopisi.junis.ni.ac.rs/index.php/FUMechEng/article/view/6927/3904",
            "date": "April 2021"
        },
    ],
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

export default function Publications({ prefix }){
  return (
    <div className={styles.PublicationsItem}>
      <div className={styles.Grid}> 
        <div className={styles.LeftContainer}> <p className={styles.Heading}> Publications </p></div>
        <div className={styles.RightContainer}> 
        {data.publications.map((pub, index)=>(
            <div key={index} className={styles.Card}> 
                <div className={styles.CardIMG}> 
                    <Image src={prefix + pub.img} width={600} height={200} alt={pub.title}></Image>
                </div>
                <div className={styles.cardContent}> 
                <div className={styles.CardHeader}> {pub.title}</div>
                <div className={styles.CardSubHeader}>{pub.authers + ", " + pub.date}</div>
                <div className={styles.CardLinks}>  
                    <a href={prefix + pub.link} className={styles.button}> Paper </a>
                    <a href={prefix + pub.github} className={styles.button}> Code </a>
                    <a href={prefix + pub.pdf} className={styles.button}> PDF </a>
                </div>
                </div>  
            </div>
        ))}    
        </div>
      </div> 
    </div>
  )
}