import CardServices from '../CardService/CardServices';
import React from 'react';
import icon, { AiFillApple, AiFillAndroid, AiFillMobile } from "react-icons/ai";

const About = () => {
    return (
        <div className="information_container">
            <img className="image_service"
                alt='Fraporitmos'
                src={"https://res.cloudinary.com/frapoteam/image/upload/v1639419333/fran_iox6kl.png"} />
            <div className="container_card_global">
                <div className="container_title_photo">
                    <h1 className="TextPhoto">Servicios de desarrollo móvil 📲 </h1>
                </div >
                <div className="container_cards">
                    <CardServices
                        icon={<AiFillApple size={40} />}
                        title="Apple Developer"
                        description="Desarrollo móvil con swift para aplicaciones nativas en iOS. "
                    />
                    <CardServices
                        icon={<AiFillAndroid size={40} />}

                        title="Android Developer"
                        description="Construcción de Apps nativas para Android con Kotlin y Java."
                    />
                    <CardServices
                        icon={<AiFillMobile size={40} />}
                        title="Apps Híbridas"
                        description="Desarrollo móvil híbrido con React Native, Flutter y Ionic."
                    />
                </div>

            </div >
        </div>
    )
}

export default About
