
import Blogger from "../../assets/blogger.json";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useDimension } from '../../hooks/useDimension';


const BloggerAnimate = () => {
  const { width } = useDimension();
  const container: any = useRef<HTMLDivElement>(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Blogger,
    });
  }, []);

  return (
      <div  style={(width>700)?{width:'280px', height:'280px'}: {width:'280px', height:'280px'}}
        ref={container}
      ></div>
   
  );
};

export default BloggerAnimate;