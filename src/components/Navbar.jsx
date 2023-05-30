import * as FaIcons from "react-icons/fa";
import { Itemsnavbar } from "../assets/Itemsnavbar";
import styles from "../../styles/Home.module.css";
import Socialmedia from "./Socialmedia";
import Link from "next/link";
import React, { useState,useEffect } from 'react'

const Navbar = () => {
  function changeMedia(mq) {
    console.log(mq.matches)
    console.log(mq.matches)
  }
  useEffect(() => {
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    return () => {
    }
  }, [])

  return (
    <header className={styles.Navbar}>
      <Link href="/">
      <h2 className={styles.logo}>
        <FaIcons.FaFoursquare />
        raporitmos
      </h2>
      </Link>
      <nav className={styles.NavbarNavigation}>
        {Itemsnavbar.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <div className={styles.icons}>
                <Link href={item.path}>
                  <a> {item.title}</a>
                </Link>
              </div>
            </li>
          );
        })}
      </nav>
      <Socialmedia />
    </header>
  );
};

export default Navbar;
