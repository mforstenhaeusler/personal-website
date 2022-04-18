import styles from '../styles/Education.module.css'
import Image from './Image.js'
import ChapterBar from './chapterBar'

import { useState } from 'react'


const data = {
  "chapter_number": "01",
  "chapter_title": "Education",
  "title": "Education",
  "title_highlighted": "",
  "education_list": [
    {
      "school": "Technical University of Munich",
      "school_logo": "/assets/Logo_of_the_Technical_University_of_Munich.svg",
      "degree": "Master of Science",
      "degree_abv": "M.Sc.",
      "major": "Robotics, Cognition, Intelligence",
      "gpa": "",
      "grade": "",
      "startDate": "October 2020",
      "endDate": "",
      "content": [
        {"highlightedContent": "Description: ", "normalContent": "The IT department provides services for TUM.ai that make the day to day work more efficient."},
      ],
      "lectures" : [
          {"lecture": "Machine Learning", "prof": "Günneman"},
          {"lecture": "Introduction to Deep Learning", "prof": "Niessner"},
          {"lecture": "", "prof": ""},
      ]
    },
    {
        "school": "George Washington University",
        "school_logo": " ",
        "degree": "Bachelor of Science",
        "degree_abv": "B.Sc.",
        "major": "Mechanical Engineering",
        "gpa": "",
        "grade": "",
        "startDate": "August 2016",
        "endDate": "May 2020",
        "content": [
          {"highlightedContent": "Description: ", "normalContent": "The IT department provides services for TUM.ai that make the day to day work more efficient."},
        ],
        "lectures" : [
            {"lecture": "Machine Learning", "prof": "Günneman"},
            {"lecture": "Introduction to Deep Learning", "prof": "Niessner"},
            {"lecture": "", "prof": ""},
        ]
    },
    {
        "school": "National University of Singapore",
        "school_logo": " ",
        "degree": "Semester Abroad",
        "degree_abv": "B.Sc.",
        "major": "Mechanical Engineering",
        "gpa": "",
        "grade": "",
        "startDate": "August 2018",
        "endDate": "December 2018",
        "content": [
          {"highlightedContent": "Description: ", "normalContent": "The IT department provides services for TUM.ai that make the day to day work more efficient."},
        ],
        "lectures" : [
            {"lecture": "Machine Learning", "prof": "Günneman"},
            {"lecture": "Introduction to Deep Learning", "prof": "Niessner"},
            {"lecture": "", "prof": ""},
        ]
    },
    {
        "school": "Wirtschaftsgymnasium Schwäbisch Gmünd",
        "school_logo": " ",
        "degree": "Abitur",
        "degree_abv": "",
        "major": "",
        "gpa": "",
        "grade": "1,6",
        "startDate": "September 2013",
        "endDate": "July 2016",
        "content": [
          {"highlightedContent": "Description: ", "normalContent": "The IT department provides services for TUM.ai that make the day to day work more efficient."},
        ],
        "lectures" : [
            {"lecture": "Machine Learning", "prof": "Günneman"},
            {"lecture": "Introduction to Deep Learning", "prof": "Niessner"},
            {"lecture": "", "prof": ""},
        ]
    },
    {
        "school": "Plymouth College",
        "school_logo": " ",
        "degree": "IGCSE/GCSE's",
        "degree_abv": "",
        "major": "",
        "gpa": "",
        "grade": "1,6",
        "startDate": "January 2012",
        "endDate": "June 2013",
        "content": [
          {"highlightedContent": "Description: ", "normalContent": "The IT department provides services for TUM.ai that make the day to day work more efficient."},
        ],
        "lectures" : [
            {"lecture": "Machine Learning", "prof": "Günneman"},
            {"lecture": "Introduction to Deep Learning", "prof": "Niessner"},
            {"lecture": "", "prof": ""},
        ]
    },
  ]
}

export default function Personal({prefix}){
  const [trackIndex, setTrackIndex] = useState(undefined);

  function playerStyleHandler(e){
    e.target.nextElementSibling.children[1].style.flex = "unset";
    e.target.parentElement.style.boxShadow = "none";
    e.target.parentElement.style.backgroundColor = "transparent";
    e.target.parentElement.style.padding = 0;
  }

  function isEmpty(val){
    return (val === undefined || val == null || val == " " || val == "" || val.length <= 0) ? true : false;
  }

  return <div className={styles.EducationItem}>
    <div className={styles.Grid}>
        <div className={styles.LeftContainer}>
            <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
        </div>
        <div className={styles.MiddleContainer}>
          <div className={styles.Title}>
              {data.title}
          </div>
          <div className={styles.TracklList}>
            {data.education_list.map((track,index)=>{
                if (isEmpty(track.endDate) && isEmpty(track.degree_abv) && isEmpty(track.major)){
                    return(<div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                    <div className={styles.RightTopContainer}>
                        <div className={styles.SchoolLogo}>
                            <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.LeftTopContainer}>
                        <div className={styles.School}>
                            {track.school}
                        </div>
                        <div className={styles.Degree}>
                            {track.degree}
                        </div>
                        <div className={styles.Period}>
                            {track.startDate} - Present
                        </div>
                    </div>
                  <div className={styles.ArrowSection}>
                    {trackIndex == index ? <div className={styles.Arrow} style={{transform: "rotate(180deg)"}}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                    {"Information"}
                      <ul className={styles.List}>
                        {track.content.map((content, index)=>(
                          <li key={index}>
                            {content.normalContent} {content.highlightedContent}
                          </li>
                        ))}
                      </ul>
                      <ul className={styles.List}>
                        {track.lectures.map((lecture, index)=>(
                          <li key={index}>
                            {lecture.lecture} {lecture.prof}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
                    )
                }else if (isEmpty(track.endDate)){
                    return(<div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                    <div className={styles.RightTopContainer}>
                        <div className={styles.SchoolLogo}>
                            <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.LeftTopContainer}>
                        <div className={styles.School}>
                            {track.school}
                        </div>
                        <div className={styles.Degree}>
                            {track.degree} - {track.major} ({track.degree_abv})
                        </div>
                        <div className={styles.Period}>
                            {track.startDate} - Present
                        </div>
                    </div>
                  <div className={styles.ArrowSection}>
                    {trackIndex == index ? <div className={styles.Arrow} style={{transform: "rotate(180deg)"}}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                    {"Information"}
                      <ul className={styles.List}>
                        {track.content.map((content, index)=>(
                          <li key={index}>
                            {content.normalContent} {content.highlightedContent}
                          </li>
                        ))}
                      </ul>
                      <ul className={styles.List}>
                        {track.lectures.map((lecture, index)=>(
                          <li key={index}>
                            {lecture.lecture} {lecture.prof}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
                    )
                }else{
                    return (<div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                    <div className={styles.RightTopContainer}>
                        <div className={styles.SchoolLogo}>
                            <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" />
                        </div>
                    </div>
                    <div className={styles.LeftTopContainer}>
                        <div className={styles.School}>
                            {track.school}
                        </div>
                        <div className={styles.Degree}>
                            {track.degree} - {track.major} ({track.degree_abv})
                        </div>
                        <div className={styles.Period}>
                            {track.startDate} - {track.endDate}
                        </div>
                    </div>
                  <div className={styles.ArrowSection}>
                    {trackIndex == index ? <div className={styles.Arrow} style={{transform: "rotate(180deg)"}}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                    {"Information"}
                      <ul className={styles.List}>
                        {track.content.map((content, index)=>(
                          <li key={index}>
                            {content.normalContent} {content.highlightedContent}
                          </li>
                        ))}
                      </ul>
                      <ul className={styles.List}>
                        {track.lectures.map((lecture, index)=>(
                          <li key={index}>
                            {lecture.lecture} {lecture.prof}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
                    )
                }
            })}
          </div>
        </div>
    </div>
  </div>
}