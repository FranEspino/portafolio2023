import React from 'react'
import { FcLinux, FcElectronics, FcGoogle, FcMindMap } from "react-icons/fc";

import CardExperience from '../CardExperience/CardExperience'
const Experience = () => {
    return (
        <>
            <h1 className="container_title_experience">Mis Habilidades 💡</h1>
            <div className="containerExperience">
                <div className="layout_cards">
                    <CardExperience
                        title="Servicios de Google"
                        description="Cuento con alta experiencia con el Sdk de Google para consumir servicios como Google Maps, Places API, Firebase, etc."
                        icon={<FcGoogle size={60} />}
                        path="/liderazgo"
                    />
                        <CardExperience
                        title="Circuitos y electrónica"
                        description="Conocimiento en circuitos y proyectos de electrónica, utilizando componentes como Arduino o Rasberry Pi."
                        icon={<FcElectronics size={60} />}
                        path="/circuitos"
                    />
                      <CardExperience
                        title="Servidores de Linux"
                        description="Experiencia con distintas distribuciones linux así mismo trabajé configurando servidores linux muy potentes."
                        icon={<FcLinux size={60} />}
                        path="/linux"
                    />
                    <CardExperience
                        title="Inteligencia Artificial"
                        description="Es este campo tengo conocimientos sólidos en visión computacional y  redes neuronales."
                        icon={<FcMindMap size={60} />}
                        path="/ia"
                    />
                </div>
                <img className="imgExperience" alt="Experiencia fraporitmos" src={"https://res.cloudinary.com/frapoteam/image/upload/v1639250487/avatar_jjjsuw.png"} />
            </div>
        </>
    )
}

export default Experience
