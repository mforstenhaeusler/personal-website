import styles from '../styles/NavBar.module.css'
import Image from '../components/Image.js'
import Link from 'next/link'

export default function NavBar({ firstname, lastname, prefix }){
  return <div className={styles.NavBarItem}>
    <div className={styles.Grid}>
      <div className={styles.Logo}> 
        <div className={styles.Header}>
            {firstname} {lastname}
        </div>
        {/*<a className={styles.subLogo} href="https://www.linkedin.com/in/maximilian-forstenhaeusler/">
          <Image src={"/assets/linkedIn.svg"} alt="linkedIn" width={55} height={55}  objectFit="contain" />
        </a>
        <a className={styles.subLogo} href="#">
          <Image src={"/assets/insta.svg"} alt="insta" width={55} height={55}  objectFit="contain" />
        </a>
        <a className={styles.subLogo} href="https://github.com/mforstenhaeusler">
          <Image src={"/assets/GitHub-Mark-Light.png"} alt="github" width={55} height={55} objectFit="contain" />
</a>*/}
      </div>
      <div className={styles.Nav}>
        <Link href={prefix + "/"} className={styles.Link}><a className={styles.Link}> Home </a></Link>
        <Link href={prefix + "/experience"} className={styles.Link}><a className={styles.Link}> Experience </a></Link>
        <Link href={prefix + "/publications_projects"} className={styles.Link}><a className={styles.Link}> Publications / Projects </a></Link>
        <Link href={prefix + "/personal"}><a className={styles.Link}> Personal </a></Link>
        </div>
        
    </div>
  </div>
}