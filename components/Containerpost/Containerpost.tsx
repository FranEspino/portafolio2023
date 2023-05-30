import React from 'react'
import styles from '../../styles/Home.module.css'

export const Containerpost = (props: any) => {
    return (
        <div className={styles.containerPost} >
            {props.children}
        </div>
    )
}

