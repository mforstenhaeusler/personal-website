import styles from '../styles/NavBar.module.css'
import Image from '../components/Image.js'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import Link from 'next/link'


const navLinks = [
  {
    "name": "Home",
    "path": "/"
  },
  {
    "name": "Experience",
    "path": "/experience"
  },
  {
    "name": "Publications / Projects",
    "path": "/publications_projects"
  },
  {
    "name": "Personal",
    "path": "/personal"
  },
];


export default function NavBar({ firstname, lastname }){
  const [isNavMenuCollapsed, setIsNavMenuCollapsed] = useState(true);

  const handleNavMenuCollapse = (event) => {
    if (!isNavMenuCollapsed) {
      setIsNavMenuCollapsed(true);
      document.getElementById("collapsedNavMenu").style.visibility = "visible";
      document.getElementById("menuIcon").style.transition = "0.5s";
      document.getElementById("menuIcon").style.transform = "rotate(180deg)";
      document.getElementById("bgContainer").style.height = "230px";
      event.stopPropagation();
    } else {
      setIsNavMenuCollapsed(false);
      document.getElementById("collapsedNavMenu").style.visibility = "hidden";
      document.getElementById("menuIcon").style.transition = "0.5s";
      document.getElementById("menuIcon").style.transform = "rotate(0deg)";
      document.getElementById("bgContainer").style.height = "80px";
      event.stopPropagation();
    }
  };

  return <div className={styles.BgContainer} id="bgContainer">
  <div className={styles.NavBar}>
      <nav className={styles.Navbar__Items}>
        <Link href={"/"}>
          <a className={styles.Navbar__Link__Brand}> {firstname} {lastname} </a>
        </Link>
      </nav>
      <nav className={styles.Navbar__Items__right} id="Navbar__Items__right">
        {navLinks.map((link, index)=>{
          return(
            <Link key={index} href={link.path}>
              <a key={index} className={styles.Navbar__Link}> {link.name} </a>
            </Link>            
          )
        })}
        <div className={styles.Navbar__Link__toggle} onClick={handleNavMenuCollapse} id="menuIcon"> 
          <FontAwesomeIcon className={styles.toogle} icon={faBars}/>
        </div> 
      </nav>
      {/*<div className={styles.collapsedBgContainer}>*/}
      <div className={styles.collapsedNavMenu} id="collapsedNavMenu"> 
        {navLinks.map((link, index)=>{
            return(
              <Link key={index} href={link.path}>
                <a key={index} className={styles.collapsed__Navbar__Link} onClick={handleNavMenuCollapse}> {link.name} </a>
              </Link>            
            )
        })}
      </div>
      {/*</div>*/}
    </div>
    
    {/*<div className={styles.Grid}>
      <div className={styles.Logo}> 
        <div className={styles.Header}>
          <Link href={"/"} className={styles.Link}><a> {firstname} {lastname} </a></Link>  
        </div>*/}
        {/*<a className={styles.subLogo} href="https://www.linkedin.com/in/maximilian-forstenhaeusler/">
          <Image src={"/assets/linkedIn.svg"} alt="linkedIn" width={55} height={55}  objectFit="contain" />
        </a>
        <a className={styles.subLogo} href="#">
          <Image src={"/assets/insta.svg"} alt="insta" width={55} height={55}  objectFit="contain" />
        </a>
        <a className={styles.subLogo} href="https://github.com/mforstenhaeusler">
          <Image src={"/assets/GitHub-Mark-Light.png"} alt="github" width={55} height={55} objectFit="contain" />
        </a>*/}
      {/*</div>
      <div className={styles.Nav}>
        <Link href={"/"} className={styles.Link}><a className={styles.Link}> Home </a></Link>
        <Link href={"/experience"} className={styles.Link}><a className={styles.Link}> Experience </a></Link>
        <Link href={"/publications_projects"} className={styles.Link}><a className={styles.Link}> Publications / Projects </a></Link>
        <Link href={"/personal"}><a className={styles.Link}> Personal </a></Link>
        </div>
        
      </div>*/}
  </div>
}