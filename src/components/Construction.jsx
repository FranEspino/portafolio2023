import React from 'react';
import Construction from '../assets/construction.json';
import Lottie from 'react-lottie';

export default function PageNotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Construction,
  };

  return (
    <div style={{ flexDirection: 'column', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: 23, textAlign:'center' }}>
        Este sitio aun está en construcción
      </h2>
      <Lottie options={defaultOptions} height={300} width={300} style={{marginTop:25}} />
  
    </div>
  );
}