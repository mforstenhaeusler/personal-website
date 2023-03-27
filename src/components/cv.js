import styles from '../styles/CV.module.css';


export default function CV(){
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    console.log(cvLink);
    return(<div className={styles.CVItem}>
        <p align="center">
        <iframe src="https://drive.google.com/file/d/17QcvMC-B8XX4NHjY4bUW05ahFEbo3xTG/view?usp=share_link" className={styles.CV}></iframe>
        </p>
    </div>)
}
