import styles from "../styles/Experience.module.css"
import Image from "./Image"

const data = {
    "experiences": [
        {
            "company":"BMW Group",
            "link":"https://www.bmw.com",
            "position": "Working Student Machine Learning and Deep Learning",
            "type": "Part-Time",
            "startDate": "Febuary 2022",
            "endDate": " ",
            "location": "Munich, Germany",
            "description": "Working student position focussing on deep learning applications and evaluations in an engineering scope.",
            "img": "/assets/BMW_logo_(gray).svg",
        },
        {
            "company":"TUM.ai",
            "link":"https://www.tum-ai.com",
            "position": "Software Dev Team Lead",
            "type": "Part-Time",
            "startDate": "Jun 2021",
            "endDate": " ",
            "location": "Munich, Germany",
            "description": "TUM.ai is a student initiative located in Munich, that runs projects with Industry Partners, Workshops and Hackathons around the topic of Artificial Intelligence.",
            "img": "/assets/tumai_blackVioletlarge_logo.png",
        },
        {
            "company":"SAP",
            "link":"https://www.sap.com/germany/about/munich.html",
            "position": "Working Student University Collaboration",
            "type": "Part-Time",
            "startDate": "October 2021",
            "endDate": "January 2022",
            "location": "Munich, Germany",
            "description": "",
            "img": "/assets/SAP_logo.svg",
        },
        {
            "company":"George Washington University - School of Engineering and Applied Sciences",
            "link":"https://www.solaresspmlab.com/",
            "position": "Undergraduate Research Assistent",
            "type": "Part-Time",
            "startDate": "May 2018",
            "endDate": "May 2020",
            "location": "Washington, D.C., USA",
            "description": "",
            "img": "/assets/GW_SEAS_logo.jpeg",
        },
        {
            "company":"Bosch",
            "link":"https://www.bosch.com/",
            "position": "Intership",
            "type": "Full-Time",
            "startDate": "May 2019",
            "endDate": "August 2019",
            "location": "Schwäbisch Gmünd, Germany",
            "description": "Research and Development on the sensor mechanics of the torque sensor and steering angle sensor used in electronic power steering racks.",
            "img": "/assets/Bosch-Logo.svg",
        },
        {
            "company":"Bentz Jaz Group",
            "link":"https://www.bentzjaz.com.sg/",
            "position": "Student Research Project",
            "type": "Part-Time",
            "startDate": "August 2018",
            "endDate": "December 2018",
            "location": "Singapore, Singapore",
            "description": "Design Project via National University of Singapore School of Engineering with Bentz Jaz Singapore Pte Ltd. Designed and constructed from scratch a Smart Pesticide Dispensing Vehicle following guidelines from Bentz Jaz, where I led the electronics and software team and final assembly. Applied for a patent.",
            "img": "/assets/GW_SEAS_logo.jpeg",
        },
    ],
}

function isEmpty(val){
    return (val === undefined || val == null || val == " " || val.length <= 0) ? true : false;
}

export default function Experiences({ prefix }){
  return (
    <div className={styles.PublicationsItem}>
      <div className={styles.Grid}> 
        <div className={styles.LeftContainer}> <p className={styles.Heading}> Experiences </p></div>
        <div className={styles.RightContainer}> 
        {data.experiences.map((ex, index)=>{
            if (isEmpty(ex.endDate)){
                return(
                <a key={index} className={styles.Card} href={prefix + ex.link}> 
                    <div className={styles.CardGrid}>
                        <div className={styles.CardLeftContainer}> 
                            <div className={styles.CardIMG}> 
                                <Image src={prefix + ex.img} width={100} height={100} alt={ex.company}></Image>
                            </div>
                        </div>
                        <div className={styles.CardRightContainer}> 
                            <div className={styles.CardContent}> 
                                <div className={styles.CardHeader}> {ex.position}</div>
                                <div className={styles.CardSubHeader}>{ex.company + " | " + ex.type}</div>
                                <div className={styles.CardPeriod}>{ex.startDate}  -  Present</div>
                                <div className={styles.CardLocation}>{ex.location}</div>
                                <div className={styles.CardDescription}>{ex.description}</div>
                            </div>
                        </div>
                    </div> 
                </a>

                )
            } else {
                return (
                <a key={index} className={styles.Card} href={prefix + ex.link}> 
                    <div className={styles.CardGrid}>
                        <div className={styles.CardLeftContainer}> 
                            <div className={styles.CardIMG}> 
                                <Image src={prefix + ex.img} width={100} height={100} alt={ex.company}></Image>
                            </div>
                        </div>
                        <div className={styles.CardRightContainer}> 
                            <div className={styles.CardContent}> 
                                <div className={styles.CardHeader}> {ex.position}</div>
                                <div className={styles.CardSubHeader}>{ex.company + " | " + ex.type}</div>
                                <div className={styles.CardPeriod}>{ex.startDate + " - " + ex.endDate}</div>
                                <div className={styles.CardLocation}>{ex.location}</div>
                                <div className={styles.CardDescription}>{ex.description}</div>
                            </div>
                        </div>
                    </div>
                </a>
                )
            }
        })}    
        </div>
      </div> 
    </div>
  )
}