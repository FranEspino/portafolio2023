import React, { useContext } from "react";
import styles from "../../styles/Home.module.css";
import AppContext from "../../context/AppContext";

const Socialmedia = () => {
  const { dark_mode } = useContext(AppContext);

  return (
    <nav className={styles.SocialMedia}>
      <a
        href="https://www.instagram.com/fraporitmos_tech/"
        style={{ marginRight: 10 }}
      >
        <img
          width={25}
          src="https://res.cloudinary.com/dokwcwo9t/image/upload/v1689894147/instagram_2_out7id.png"
          alt=""
        />
      </a>
      <a href="https://www.youtube.com/fraporitmos" style={{ marginRight: 10 }}>
        <img
          width={25}
          src="https://res.cloudinary.com/dokwcwo9t/image/upload/v1689894252/youtube_1_qii9qq.png"
          alt=""
        />
      </a>

      <a href="https://www.linkedin.com/in/franespino/">
        <img
          width={25}
          src="https://res.cloudinary.com/dokwcwo9t/image/upload/v1689894252/linkedin_1_rxsyn4.png"
          alt=""
        />
      </a>
    </nav>
  );
};

export default Socialmedia;
