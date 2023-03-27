import styles from '../styles/CV.module.css';


export default function CV(){
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    console.log(cvLink);
    return(<div className={styles.CVItem}>
        <p align="center">
        <iframe src="https://drive.google.com/file/d/1oGVJTw9vBXfj-q5OU0GPVHTcg0Rfp8Lc/view?usp=share_link" className={styles.CV}></iframe>
        </p>
    </div>)
}
