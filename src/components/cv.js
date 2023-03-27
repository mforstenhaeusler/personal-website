import styles from '../styles/CV.module.css';


export default function CV(){
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    console.log(cvLink);
    return(<div className={styles.CVItem}>
        <p align="center">
        <iframe src="https://docs.google.com/document/d/1tOaC7wPCkBFCtBvKUHSEEpHAoEObwWMY8MJkqMWl-M8/edit?usp=share_link" className={styles.CV}></iframe>
        </p>
    </div>)
}
