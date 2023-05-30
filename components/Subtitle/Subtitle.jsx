import React from 'react'
import styles from '../../styles/Home.module.css'

export const Subtitle = ({text}) => {
    return (
        <h3 className={styles.Subtitle}>
            {text}
        </h3>
    )
}


