
import Dev from "../../assets/dev.json";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Devanimate = () => {
  const container: any = useRef<HTMLDivElement>(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Dev,
    });
  }, []);

  return (
    <div >
      <div
        ref={container}
      ></div>
    </div>
  );
};

export default Devanimate;