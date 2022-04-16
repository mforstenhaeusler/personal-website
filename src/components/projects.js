import styles from "../styles/Projects.module.css"
import Link from "next/link"
import Image from "./Image"

const data = {
    "projects": [
        {
          "title":"Quantum Support Vector Machines",
          "link":"",
          "code": "https://github.com/mforstenhaeusler/Quantum-Support-Vector-Machines",
          "img": "/assets/Quantum_SVM.png",
          "authers": "Forstenhaeusler, M",
          "content": "As part of a Seminar at during my M.Sc. at TUM, I experimented with the implementation of Quantum Support Vector Machines.",
          "pdf": "",
          "slides": "https://github.com/mforstenhaeusler/Quantum-Support-Vector-Machines/blob/main/Slides/Quantum_Support_Vector_Machines_final.pdf",
          "date": "December 2021"
        },
        {
          "title":"Senior Design Project",
          "link":"https://scholarspace.library.gwu.edu/work/k643b1941",
          "code": "",
          "img": "/assets/Senior_Design_Thesis.png",
          "authers": "Chambers, J., Forstenhaeusler, M., McCraw, M.",
          "content": " Text",
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
          "content": " Text",
          "pdf": "",
          "slides": "",
          "date": ""
        },
        {
          "title":"",
          "link":"",
          "code": "",
          "img": " ",
          "authers": "Forstenhaeusler, M",
          "content": "Student Research Project at NUS",
          "pdf": "",
          "slides": "",
          "date": "December 2018"
        },
        {
          "title":"Personal Website",
          "link":"",
          "code": "https://github.com/mforstenhaeusler/personal-website-template",
          "img": " ",
          "authers": "Forstenhaeusler, M",
          "content": " Text",
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
                    <a href={prefix + project.code} className={styles.button}> Code </a>
                    <a href={prefix + project.slides} className={styles.button}> Slides </a>
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
                    <a href={prefix + project.link} className={styles.button}> Paper </a>
                    <a href={prefix + project.pdf} className={styles.button}> PDF </a>
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
                    <a href={prefix + project.code} className={styles.button}> Code </a>
                  </div>
                </div>                
              </div>
              )
            }
            if (index == 3){
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
                      <a href={prefix + project.pdf} className={styles.button}> PDF </a>
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
                      <a href={prefix + project.code} className={styles.button}> Code </a>
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