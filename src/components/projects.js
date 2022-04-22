import styles from "../styles/Projects.module.css"
import Link from "next/link"
import Image from "./Image"

const data = {
    "projects": [
        {
          "title":"Quantum Support Vector Machines",
          "link":"",
          "code": "https://github.com/mforstenhaeusler/Quantum-Support-Vector-Machines",
          "img": "/assets/quantum_SVM.png",
          "authers": "Forstenhaeusler, M",
          "content": "As part of a Seminar at during my M.Sc. at TUM, I experimented with the implementation of Quantum Support Vector Machines and Classical Suport Vector Machines.",
          "pdf": "",
          "slides": "https://github.com/mforstenhaeusler/Quantum-Support-Vector-Machines/blob/main/Slides/Quantum_Support_Vector_Machines_final.pdf",
          "date": "December 2021"
        },
        {
          "title":"Senior Design Project - Microscale Force Indentation Device",
          "link":"https://scholarspace.library.gwu.edu/work/k643b1941",
          "code": "",
          "img": "/assets/Senior_Design_Thesis.png",
          "authers": "Chambers, J., Forstenhaeusler, M., McCraw, M.",
          "content": "The device is a novel concept based on the mechanics of atomic force microscopy (AFM) devices performing measurements of deflection and force at microscale with the specific application of recording the viscoelastic material properties of bulk tissue. With a wide range of applications, the immediate field of focus for this device is the ex vivo, bioptic analysis of human tissue with the intention to identify and study diseases and other medical phenomena such as skin cancer by assignment of physical properties.",
          "pdf": "https://scholarspace.library.gwu.edu/work/k643b1941",
          "slides": "",
          "date": "May 2020"
        },
        {
          "title":"Siamese LSTM for Semantic Similarity",
          "link":"",
          "code": "https://github.com/mforstenhaeusler/Siamese-LSTM-for-Semantic-Similarity-PyTorch",
          "img": "/assets/Siamese-LSTM.png",
          "authers": "Forstenhaeusler, M",
          "content": "An implementation of a Deep Learning Pipeline that can be used to evaulate the semantic similarity of two sentenences using PyTorch using a Siamese LSTM Neural Network.",
          "pdf": "",
          "slides": "",
          "date": "November 2021"
        },
        {
          "title":"Smart Pesticide Dispensing Vehicle Project",
          "link":"",
          "code": "",
          "img": "/assets/smart_dispencing_vehicle_nus.png",
          "authers": "Choong Wai Kean, Gan Chin Boon, Gwee Meng Hong, Maximilian Forstenhäusler, Saung Su Su Phoo, Tan Chung Haw",
          "content": "Student Research Project at NUS",
          "pdf": "https://drive.google.com/file/d/1ewguY0TwIuy52ovIh0YmmO3P974NwQAV/view?usp=sharing",
          "slides": "",
          "date": "December 2018"
        },
        {
          "title":"Personal Website",
          "link":"",
          "code": "https://github.com/mforstenhaeusler/personal-website",
          "img": " ",
          "authers": "Forstenhaeusler, M",
          "content": "Personal Website",
          "pdf": "",
          "slides": "",
          "date": ""
        },
    ]

}

export default function Projects({prefix}){
  return (
    <div className={styles.ProjectsItem}>
      <div className={styles.Grid}> 
        <div className={styles.LeftContainer}> <p className={styles.Heading}>Projects </p></div>
        <div className={styles.RightContainer}> 
        {data.projects.map((project, index)=>{
          if (index == 0){
            return (
              <div key={index} className={styles.Card}> 
                <div className={styles.CardIMG}> 
                  <Image src={prefix + project.img} width={350} height={200} alt={project.title}></Image>
                </div>
                <div className={styles.cardContent}> 
                  <div className={styles.CardHeader}> {project.title}</div>
                  <div className={styles.CardSubHeader}>{project.authers}, {project.date} </div>
                  <div className={styles.CardDescription}>{project.content} </div>
                  <div className={styles.CardLinks}> 
                    <a href={project.code} className={styles.button}> Code </a>
                    <a href={project.slides} className={styles.button}> Slides </a>
                  </div>
                </div>                
              </div>
            )
          }
          if (index == 1){
            return (
              <div key={index} className={styles.Card}> 
                <div className={styles.CardIMG}> 
                  <Image src={prefix + project.img} width={350} height={100} alt={project.title}></Image>
                </div>
                <div className={styles.cardContent}> 
                  <div className={styles.CardHeader}> {project.title}</div>
                  <div className={styles.CardSubHeader}>{project.authers}, {project.date} </div>
                  <div className={styles.CardDescription}>{project.content} </div>
                  <div className={styles.CardLinks}> 
                    <a href={project.link} className={styles.button}> Paper </a>
                    <a href={project.pdf} className={styles.button}> PDF </a>
                  </div>
                </div>                
            </div>
            )
          }
          if (index == 2){
            return (
              <div key={index} className={styles.Card}> 
                <div className={styles.CardIMG}> 
                <Image src={prefix + project.img} width={450} height={200} alt={project.title}></Image>
                </div>
                <div className={styles.cardContent}> 
                  <div className={styles.CardHeader}> {project.title}</div>
                  <div className={styles.CardSubHeader}>{project.authers}, {project.date} </div>
                  <div className={styles.CardDescription}>{project.content} </div>
                  <div className={styles.CardLinks}> 
                    <a href={project.code} className={styles.button}> Code </a>
                  </div>
                </div>                
              </div>
              )
            }
            if (index == 3){
              return (
                <div key={index} className={styles.Card}> 
                  <div className={styles.CardIMG}> 
                    <Image src={prefix + project.img} width={650} height={200} alt={project.title}></Image>
                  </div>
                  <div className={styles.cardContent}> 
                    <div className={styles.CardHeader}> {project.title}</div>
                    <div className={styles.CardSubHeader}>{project.authers}, {project.date} </div>
                    <div className={styles.CardDescription}>{project.content} </div>
                    <div className={styles.CardLinks}> 
                      <a href={project.pdf} className={styles.button} target="_blank" rel="noreferrer noopener"> PDF </a>
                    </div>
                  </div>                
                </div>
              )
            }
            if (index == 4){
              return (
                <div key={index} className={styles.Card}> 
                  <div className={styles.CardIMG}> 
                    {/*<Image src=" " layout='fill' alt={project.title}></Image>*/}
                  </div>
                  <div className={styles.cardContent}> 
                    <div className={styles.CardHeader}> {project.title}</div>
                    <div className={styles.CardSubHeader}>{project.authers}, {project.date} </div>
                    <div className={styles.CardDescription}>{project.content} </div>
                    <div className={styles.CardLinks}> 
                      <a href={project.code} className={styles.button}> Code </a>
                    </div>
                  </div>                
                </div>
              )
            }
        })}
        </div>
      </div>
    </div>
  )
}