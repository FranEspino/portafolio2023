import React, { useContext, useEffect } from "react";
import BottomTab from "../BottomTab"
import Navbar from "../Navbar";
import {useWindowSize} from "@react-hook/window-size/throttled";
import styles from '../../../styles/Home.module.css'
import AppContext from "../../../context/AppContext";
const Container = (props: any) => {
  const {dark_mode} = useContext(AppContext);

  const [width] = useWindowSize();

  useEffect(() => {

  } , []);

  return (
    <div className={dark_mode ? styles.bodyDark :  styles.bodyLight} > 
      
      <div className={dark_mode ? styles.isDarkMode :styles.isLightMode }>
      <Navbar />
      {props.children}
      {
         (width <= 750) ? <BottomTab />: <></>
      }
      </div>
    </div>
  );
};

export default Container;
