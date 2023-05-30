import React from 'react'
import styles from '../../styles/Home.module.css'

export const Imagecontent = ({source}) => {
    return (
         <img className={styles.imageContent} src={source}/>
    )
}


