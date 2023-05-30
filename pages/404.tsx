import React, { useEffect, useRef } from "react";
import NotFound from '../src/assets/404.json';
import lottie from "lottie-web";
import Button from "@material-ui/core/Button";
import { AiFillHome } from "react-icons/ai";
import Link from 'next/link';

const PageNotFound = () => {

  const container: any = useRef<HTMLDivElement>(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: NotFound,
    });
  }, []);


  return (
    <div style={{ flexDirection: 'column', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: 32 }}>
        Pagina no encontrada
      </h2>
      <div   ref={container} />
      <Link href="/">
       
      <Button variant="outlined" color="primary" endIcon={<AiFillHome />} style={{borderRadius:10, fontSize:15, fontWeight:'bold'}}>
        Volver a casa
      </Button>
      </Link>
    </div>
  );
}


export default PageNotFound;

