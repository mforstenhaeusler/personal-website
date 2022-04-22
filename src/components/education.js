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
      "school_logo": "/logos/Logo_of_the_Technical_University_of_Munich.svg",
      "degree": "Master of Science",
      "degree_abv": "M.Sc.",
      "major": "Robotics, Cognition, Intelligence",
      "startDate": "October 2020",
      "endDate": "",
      "content": [
        {
          "gpa": "3.1 (currently)",
          "grade": "2,3 (currently)",
          "highlightedContent": "Description ", "normalContent": "The master's program in Robotics, Cognition, Intelligence is unique in Germany. It combines various engineering disciplines, such as mechanical and electrical engineering, with informatics. The program focusses on aquiring a broad methodological and theoretical grasp of the foundations of robotics, cognition, and intelligent autonomous systems. In addition to informatics, you are also familiar with those aspects of electrical and mechanical engineering."},
      ],
      "focus_topics": [
        {"ft": "Machine Learning, Deep Learning"},
        {"ft": "Human-Robot Interaction"},
        {"ft": "Compuer Vision (perception, image processing)"}
      ],
      "lectures" : [
          {"lecture": "Machine Learning", "prof": "Prof. Dr. Günneman", "profLink": "https://www.professoren.tum.de/en/guennemann-stephan"},
          {"lecture": "Introduction to Deep Learning", "prof": " Prof. Dr. Niessner", "profLink": "https://www.professoren.tum.de/en/niessner-matthias"},
          {"lecture": "Techniques in Artificial Intelligence", "prof": " Prof. Dr.-Ing. Althoff", "profLink": "https://www.in.tum.de/i06/people/prof-dr-ing-matthias-althoff/"},
          {"lecture": "Computer Vision II: Multiple View Geometry", "prof": "Prof. Dr. Cremers", "profLink": "https://vision.in.tum.de/members/cremers"},
          {"lecture": "Computer Vision III: Detection, Segmentation, and Tracking", "prof": "Prof. Leal-Taixe", "profLink": "https://dvl.in.tum.de/team/lealtaixe/"},
          {"lecture": "Advanced Topics in 3D Computer Vision", "prof": "Prof. Dr. Navab", "profLink": "https://campar.in.tum.de/Main/NassirNavab.html"},
          {"lecture": "Advanced Practical Course - Application Challenges for Machine Learning (IBM Power AI)", "prof": "", "profLink": ""},
          {"lecture": "Seminar - Topics in Quantum Computing", "prof": "Prof. Dr. Mendel", "profLink": "https://www.professoren.tum.de/en/mendl-christian"},
          {"lecture": "Robotics", "prof": "Prof. Dr.-Ing. Burschka", "profLink": "https://www.in.tum.de/i06/people/prof-dr-ing-darius-burschka/"},
          {"lecture": "Robotics Motion Planning", "prof": "Prof. Dr.-Ing. Burschka", "profLink": "https://www.in.tum.de/i06/people/prof-dr-ing-darius-burschka/"},
      ]
    },
    {
        "school": "George Washington University",
        "school_logo": "/logos/gw_logo.png",
        "degree": "Bachelor of Science",
        "degree_abv": "B.Sc.",
        "major": "Mechanical Engineering",
        "startDate": "August 2016",
        "endDate": "May 2020",
        "content": [
          {
            "gpa": "3.66",
            "grade": "1,5",
            "highlightedContent": "Description ", "normalContent": "The Department of Mechanical and Aerospace Engineering (MAE) offers an ABET-accredited Bachelor of Science degree in mechanical engineering and a five-year combined Bachelor of Science and Master of Science degree."},
        ],
        "focus_topics": [
        ],
        "lectures" : [
        ]
    },
    {
        "school": "National University of Singapore",
        "school_logo": "/logos/NUS_logo.png",
        "degree": "Semester Abroad",
        "degree_abv": "B.Sc.",
        "major": "Mechanical Engineering",
        "gpa": "",
        "grade": "",
        "startDate": "August 2018",
        "endDate": "December 2018",
        "content": [
          {
            "gpa": "3.47",
            "grade": "1,7",
            "highlightedContent": "Description ", "normalContent": "Semester Abroad."},
        ],
        "focus_topics": [
        ],
        "lectures" : [
        ]
    },
    {
        "school": "Wirtschaftsgymnasium Schwäbisch Gmünd",
        "school_logo": "/logos/WG_logo.png",
        "degree": "Abitur",
        "degree_abv": "",
        "major": "",
        "startDate": "September 2013",
        "endDate": "July 2016",
        "content": [
          { 
            "gpa": "3.55",
            "grade": "1,6",
            "highlightedContent": "Description ", 
            "normalContent": "Geram High School Degree (Abitur)."},
        ],
        "focus_topics": [
        ],
        "lectures" : [
        ]
    },
    {
        "school": "Plymouth College",
        "school_logo": "/logos/Plymouth_logo.png",
        "degree": "IGCSE/GCSE's",
        "degree_abv": "",
        "major": "",
        "startDate": "January 2012",
        "endDate": "June 2013",
        "content": [
          { "gpa": "",
            "grade": "",
            "highlightedContent": "Description ", "normalContent": "IGCSE/GCSE's"},
        ],
        "focus_topics": [
        ],
        "lectures" : [
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
              if (isEmpty(track.endDate) && isEmpty(track.degree_abv) && isEmpty(track.major) && isEmpty(track.focus_topics) && isEmpty(track.lectures)){
                return(<div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                    <div className={styles.RightTopContainer}>
                        <div className={styles.SchoolLogo}>
                            <Image src={prefix + track.school_logo} layout="fill" objectFit="cover" alt="school_logo"/>
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
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>  
                      {track.content.map((content, index)=>(
                        <div key={index}>
                        <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                        <div key={index} className={styles.Description}> {content.normalContent} </div>
                        <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                        <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
                    )
              }else if (isEmpty(track.endDate) && isEmpty(track.degree_abv) && isEmpty(track.major) && isEmpty(track.focus_topics)){
                return(<div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                    <div className={styles.RightTopContainer}>
                        <div className={styles.SchoolLogo}>
                            <Image src={prefix + track.school_logo} layout="fill" objectFit="cover" alt="school_logo" />
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
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>  
                      {track.content.map((content, index)=>(
                        <div key={index}>
                        <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                        <div key={index} className={styles.Description}> {content.normalContent} </div>
                        <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                        <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                      </div>
                      ))}
                      <div className={styles.Lectures}> {"Lectures"}  </div> 
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
              }else if (isEmpty(track.endDate) && isEmpty(track.degree_abv) && isEmpty(track.major) && isEmpty(track.lectures)){
                return(<div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                    <div className={styles.RightTopContainer}>
                        <div className={styles.SchoolLogo}>
                            <Image src={prefix + track.school_logo} layout="fill" objectFit="cover" alt="school_logo"/>
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
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>  
                      {track.content.map((content, index)=>(
                        <div key={index}>
                        <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                        <div key={index} className={styles.Description}> {content.normalContent} </div>
                        <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                        <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                      </div>
                      ))}
                    <div className={styles.FocusTopics}> {"Focus Topics"}  </div>
                      <ul className={styles.FocusTopics}>
                        {track.focus_topics.map((ft, index)=>(
                          <li key={index}>
                            {ft.ft} 
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
                    )
              }else if (isEmpty(track.endDate) && isEmpty(track.degree_abv) && isEmpty(track.major)){
                    return(<div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                    <div className={styles.RightTopContainer}>
                        <div className={styles.SchoolLogo}>
                            <Image src={prefix + track.school_logo} layout="fill" objectFit="cover" alt="school_logo"/>
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
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>  
                      {track.content.map((content, index)=>(
                        <div key={index}>
                        <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                        <div key={index} className={styles.Description}> {content.normalContent} </div>
                        <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                        <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                      </div>
                      ))}
                    <div className={styles.FocusTopics}> {"Focus Topics"}  </div>
                      <ul className={styles.FocusTopics}>
                        {track.focus_topics.map((ft, index)=>(
                          <li key={index}>
                            {ft.ft} 
                          </li>
                        ))}
                      </ul>
                      <div className={styles.Lectures}> {"Lectures"}  </div> 
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
              }else if (isEmpty(track.degree_abv) && isEmpty(track.major) && isEmpty(track.focus_topics) && isEmpty(track.lectures)){
                  return(<div key={index} className={styles.Track}>
              <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                  <div className={styles.RightTopContainer}>
                      <div className={styles.SchoolLogo}>
                          <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" alt="school_logo"/>
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
                          {track.startDate} - {track.endDate}
                      </div>
                  </div>
                <div className={styles.ArrowSection}>
                  {trackIndex == index ? <div className={styles.Arrow} style={{transform: "rotate(180deg)"}}>
                    <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                  </div> :
                  <div className={styles.Arrow}>
                    <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                  </div> }
                </div>
              </div>
              {trackIndex == index ? <div className={styles.Content}>
                <div className={styles.ContentTextConatiner}>
                  <div className={styles.ContentSub}>
                    {track.content.map((content, index)=>(
                      <div key={index}>
                        <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                        <div key={index} className={styles.Description}> {content.normalContent} </div>
                        <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                        <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                      </div>
                      ))}
                  </div>
                </div>
              </div> : ""}
              <div className={styles.Separator}></div>
            </div>
                  )
              }else if (isEmpty(track.degree_abv) && isEmpty(track.major)){
                return(<div key={index} className={styles.Track}>
            <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                <div className={styles.RightTopContainer}>
                    <div className={styles.SchoolLogo}>
                        <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" alt="school_logo"/>
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
                        {track.startDate} - {track.endDate}
                    </div>
                </div>
              <div className={styles.ArrowSection}>
                {trackIndex == index ? <div className={styles.Arrow} style={{transform: "rotate(180deg)"}}>
                  <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                </div> :
                <div className={styles.Arrow}>
                  <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                </div> }
              </div>
            </div>
            {trackIndex == index ? <div className={styles.Content}>
              <div className={styles.ContentTextConatiner}>
                <div className={styles.ContentSub}>
                  {track.content.map((content, index)=>(
                    <div key={index}>
                      <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                      <div key={index} className={styles.Description}> {content.normalContent} </div>
                      <div key={index} className={styles.Grade}> Grade (German): {content.grade}</div>
                      <div key={index}> GPA (US): {content.gpa} </div>
                    </div>
                    ))}
                  <div className={styles.FocusTopics}> {"Focus Topics"}  </div>
                    <ul className={styles.FocusTopics}>
                      {track.focus_topics.map((ft, index)=>(
                        <li key={index}>
                          {ft.ft} 
                        </li>
                      ))}
                    </ul>
                    <div className={styles.Lectures}> {"Lectures"}  </div> 
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
                            <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" alt="school_logo"/>
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
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                        {track.content.map((content, index)=>(
                          <div key={index}>
                            <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                            <div key={index} className={styles.Description}> {content.normalContent} </div>
                            <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                            <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                          </div>
                        ))}
                      <div className={styles.FocusTopics}> {"Focus Topics"}  </div>
                      <ul className={styles.List}>
                        {track.focus_topics.map((ft, index)=>(
                          <li key={index} className={styles.FocusTopicsText}>
                            {ft.ft} 
                          </li>
                        ))}
                      </ul>
                      <div className={styles.Lectures}> {"Lectures"}  </div> 
                      <ul className={styles.List}>
                        {track.lectures.map((lecture, index)=>(
                          <li key={index}>
                            <p className={styles.Lecture}>{lecture.lecture}</p> 
                            <a href={lecture.profLink} className={styles.Prof}>{lecture.prof}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
                    )
              }else if (isEmpty(track.focus_topics) && isEmpty(track.lectures)){
                return(<div key={index} className={styles.Track}>
            <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                <div className={styles.RightTopContainer}>
                    <div className={styles.SchoolLogo}>
                        <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" alt="school_logo"/>
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
                  <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                </div> :
                <div className={styles.Arrow}>
                  <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                </div> }
              </div>
            </div>
            {trackIndex == index ? <div className={styles.Content}>
              <div className={styles.ContentTextConatiner}>
                <div className={styles.ContentSub}>
                    {track.content.map((content, index)=>(
                      <div key={index}>
                        <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                        <div key={index} className={styles.Description}> {content.normalContent} </div>
                        <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                        <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                      </div>
                    ))}
                </div>
              </div>
            </div> : ""}
            <div className={styles.Separator}></div>
          </div>
                )
              }else if (isEmpty(track.focus_topics)){
                return(<div key={index} className={styles.Track}>
            <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                <div className={styles.RightTopContainer}>
                    <div className={styles.SchoolLogo}>
                        <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" alt="school_logo"/>
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
                  <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                </div> :
                <div className={styles.Arrow}>
                  <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                </div> }
              </div>
            </div>
            {trackIndex == index ? <div className={styles.Content}>
              <div className={styles.ContentTextConatiner}>
                <div className={styles.ContentSub}>
                    {track.content.map((content, index)=>(
                      <div key={index}>
                        <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                        <div key={index} className={styles.Description}> {content.normalContent} </div>
                        <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                        <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                      </div>
                    ))}
                    <div className={styles.Lectures}> {"Lectures"}  </div> 
                      <ul className={styles.List}>
                        {track.lectures.map((lecture, index)=>(
                          <li key={index}>
                            <p>{lecture.lecture}</p> 
                            <a href={lecture.profLink}>{lecture.prof}</a>
                          </li>
                        ))}
                      </ul>
                </div>
              </div>
            </div> : ""}
            <div className={styles.Separator}></div>
          </div>
                )
              }else if (isEmpty(track.lectures)){
                  return(<div key={index} className={styles.Track}>
              <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                  <div className={styles.RightTopContainer}>
                      <div className={styles.SchoolLogo}>
                          <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" alt="school_logo"/>
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
                    <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                  </div> :
                  <div className={styles.Arrow}>
                    <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                  </div> }
                </div>
              </div>
              {trackIndex == index ? <div className={styles.Content}>
                <div className={styles.ContentTextConatiner}>
                  <div className={styles.ContentSub}>
                      {track.content.map((content, index)=>(
                        <div key={index}>
                          <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                          <div key={index} className={styles.Description}> {content.normalContent} </div>
                          <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                            <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                        </div>
                      ))}
                    <div className={styles.FocusTopics}> {"Focus Topics"}  </div>
                    <ul className={styles.List}>
                      {track.focus_topics.map((ft, index)=>(
                        <li key={index}>
                          {ft.ft} 
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
                            <Image src={prefix + track.school_logo} width={100} height={50} objectFit="cover" alt="school_logo"/>
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
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={prefix + "/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                        {track.content.map((content, index)=>(
                          <div key={index}>
                          <div key={index} className={styles.DescriptionHeader}> {content.highlightedContent} </div>
                          <div key={index} className={styles.Description}> {content.normalContent} </div>
                          <div key={index} className={styles.GradeDE}> Grade (German): {content.grade}</div>
                          <div key={index} className={styles.GradeUS}> GPA (US): {content.gpa} </div>
                        </div>
                        ))}
                      <div className={styles.FocusTopics}> {"Focus Topics"}  </div>
                      <ul className={styles.List}>
                        {track.focus_topics.map((ft, index)=>(
                          <li key={index}>
                            {ft.ft} 
                          </li>
                        ))}
                      </ul>
                      <div className={styles.Lectures}> {"Lectures"}  </div> 
                      <ul className={styles.List}>
                        {track.lectures.map((lecture, index)=>(
                          <li key={index}>
                            <p>{lecture.lecture}</p> 
                            <a href={lecture.profLink}>{lecture.prof}</a>
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