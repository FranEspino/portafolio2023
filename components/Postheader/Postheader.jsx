import styles from '../../styles/Home.module.css'

export const Postheader = ({ image,title, date }) => {
    return (
        <div className={styles.containerPosthead}>
        <div className={styles.elementsPosthead} />
         <img className={styles.imgPosthead} src={image} />
         <h1 className={styles.titlePosthead}>
             {title}
         </h1>
         <p className={styles.datePosthead}>{date}</p>
        </div>       
    )
}




