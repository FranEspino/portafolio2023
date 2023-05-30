import React from "react";
import BottomTab from "../BottomTab"
import Navbar from "../Navbar";
import {useWindowSize} from "@react-hook/window-size/throttled";
import styles from '../../../styles/Home.module.css'

const Container = (props: any) => {
  const [width] = useWindowSize();

  return (
    <div className={styles.bodyLight} > 
      <Navbar />
      <div className={styles.isLightMode}>
      {props.children}
      {
         (width <= 750) ? <BottomTab />: <></>
      }
      </div>
    </div>
  );
};

export default Container;
