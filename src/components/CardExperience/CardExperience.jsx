import React from "react";
import Button from "@material-ui/core/Button";

const CardExperience = ({ title, description, icon, path }) => {
  return (
    <div className="container__card_experience">
      {icon === "jetpack" ? (
        <img
          width={100}
          src="https://res.cloudinary.com/dokwcwo9t/image/upload/v1689897249/jetpack_uzgurs.png"
          alt=""
        />
      ) : icon === "swiftui" ? (
        <img
          width={90}
          src="https://res.cloudinary.com/dokwcwo9t/image/upload/v1689897249/swift-logo_fkgbki.png"
          alt=""
          style={{ marginBottom: 10 }}
        />
      ) : icon === "android" ? (
        <img
          width={100}
          src="https://res.cloudinary.com/dokwcwo9t/image/upload/v1689898109/13_pnayhi.png"
          alt=""
          style={{ marginBottom: 10 }}
        />
      ) : (
        <img
          width={100}
          src="https://res.cloudinary.com/dokwcwo9t/image/upload/v1689897308/pngegg_uy1ih1.png"
          alt=""
          style={{ marginBottom: 10 }}
        />
      )}

      <h1 className="title__card_experience">{title}</h1>
      <span className="text__card_experience">{description}</span>
      <Button
        variant="outlined"
        style={{ backgroundColor: "#5046E5", color: "#fff" }}
      >
        Comprar
      </Button>
    </div>
  );
};

export default CardExperience;
