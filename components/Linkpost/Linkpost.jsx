import React from 'react'
import styles from '../../styles/Home.module.css'
import { BsLink45Deg } from "react-icons/bs";

export const Linkpost = ({name, url }) => {
    return (
        <div className={styles.Linkpost}>
            <a className={styles.LinkPostRef} href={url} target="_blank" rel="noreferrer">{name}<BsLink45Deg /></a>
        </div>
    )
}

