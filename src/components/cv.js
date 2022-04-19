import styles from '../styles/CV.module.css';


export default function CV(){
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    console.log(cvLink);
    return(<div className={styles.CVItem}>
        <p align="center">
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vRIkVDOmOmWDrPTttWl4sNLSTFjxBI2_iYXjCsNl4wgf_-Y0tp-1VLh9zruJ9l8kMfM8uP1k5wyvWLQ/pub?embedded=true" className={styles.CV}></iframe>
        </p>
    </div>)
}
