import styles from '../styles/CV.module.css';


export default function CV(){
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    return(<div className={styles.CVItem}>
        <p align="center">
        <iframe src={cvLink} className={styles.CV}></iframe>
        </p>
    </div>)
}
