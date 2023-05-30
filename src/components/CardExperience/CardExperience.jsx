import React from 'react'
import { FcLinux, FcElectronics, FcManager, FcMindMap, FcRight } from "react-icons/fc";
import Button from "@material-ui/core/Button";

const CardExperience = ({ title, description, icon, path }) => {
  return (
    <div className="container__card_experience">
      {icon}
      <h1 className="title__card_experience">{title}</h1>
      <span className="text__card_experience">{description}</span>
      <Button variant="outlined" color="primary" endIcon={<FcRight />} style={{ borderRadius: 10, fontSize: 15, fontWeight: 'bold' }}>
        Leer más
      </Button>
    </div>
  )
}

export default CardExperience;
