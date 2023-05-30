import React from 'react'
import styles from '../../styles/Home.module.css'

export const Titlepost =  ({title}) => {
    return (
        <h1 className={styles.titlePost}>
        {title} 
        </h1>
    )
}
