import styles from '../../styles/Home.module.css'

export const Paragraph = ({text}) => {
    return (
        <p className={styles.paragraphContent} >
                {text}
        </p>       
    )
}
