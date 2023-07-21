import React from 'react'
import Devanimate from "../Animations/CoderAnimate";
import Button from "@material-ui/core/Button";
import Link from 'next/link';
import Typical from 'react-typical';

const Banner = () => {
  return (
    <div className="Banner">
      <div className="InfoBanner">
        <h2>
          ¡Hola! soy Fran Espino, desarrollo productos que generan experiencias</h2>
        <h2 className="Typical">
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={
              [
                'Increíbles 🚀.',
                3000,
                'Asombrosas  💫.',
                3000,
                'Creativas  ✍🏻.',
                3000,
              ]
            }
          />
        </h2>
        <span className="InfoTextBanner">
          ¡Un placer conocerte! Sé que mi portafolio no es perfecto, pero estos
          proyectos fueron desarrollados con mucho esfuerzo
        </span>
        <div>
          {" "}
          <Link href="/Projects">
            <Button variant='outlined'
             style={{backgroundColor: '#5046E5', color:'#fff'}}>
              Proyectos
            </Button>
          </Link>
        </div>
      </div>
      <div className="ContainerAnimeDev">
        <Devanimate />
      </div>
    </div>
  )
}

export default Banner
