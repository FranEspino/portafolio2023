import React from 'react'
import { FcLinux, FcElectronics, FcGoogle, FcMindMap } from "react-icons/fc";

import CardExperience from '../CardExperience/CardExperience'
const Experience = () => {
    return (
        <>
            <h1 className="container_title_experience">Cursos de desarrollo móvil 2023 </h1>
            <div className="containerExperience">
                <div className="layout_cards">
                    <CardExperience
                        title="Curso Jetpack Compose"
                        description="Cuento con alta experiencia con el Sdk de Google para consumir servicios como Google Maps, Places API, Firebase, etc."
                        icon="jetpack"
                        path="/liderazgo"
                    />
                        <CardExperience
                        title="Curso de Swift y SwiftUI "
                        description="Conocimiento en circuitos y proyectos de electrónica, utilizando componentes como Arduino o Rasberry Pi."
                        icon="swiftui"
                        path="/circuitos"
                    />
                      <CardExperience
                        title="Curso de Kotlin y Android 13 "
                        description="Experiencia con distintas distribuciones linux así mismo trabajé configurando servidores linux muy potentes."
                        icon="android"
                        path="/linux"
                    />
                    <CardExperience
                        title="Curso de Patrones de Diseño"
                        description="Es este campo tengo conocimientos sólidos en visión computacional y  redes neuronales."
                        icon="desginpatters"
                        path="/ia"
                    />
                </div>
                <img className="imgExperience" alt="Experiencia fraporitmos" src={"https://res.cloudinary.com/frapoteam/image/upload/v1639250487/avatar_jjjsuw.png"} />
            </div>
        </>
    )
}

export default Experience
