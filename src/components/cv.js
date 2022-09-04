import styles from '../styles/CV.module.css';


export default function CV(){
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    console.log(cvLink);
    return(<div className={styles.CVItem}>
        <p align="center">
        <iframe src="https://drive.google.com/file/d/1_ypo4IJLaW8kV_Nc5pfpCGCf9T46s1Nr/view?usp=sharing" className={styles.CV}></iframe>
        </p>
    </div>)
}
