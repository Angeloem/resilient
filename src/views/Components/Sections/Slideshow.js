import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import "./css/slideshow.css";

// function getText(i, setI) {
//     const heads = [
//         'Our Motto',
//         'Our Mission',
//         'Our Vision',
//     ]
//     if (i > 2) {
//         i = 0;
//     }
//     setTimeout(getText, 1000)
//     return heads[i];
// }
export default function Slideshow({ content = [], interval = 3000 }) {
  const [thumbnails, setThumnails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});
  useEffect(() => {
    console.log(content);
    setThumnails(content);
    setCurrentSlideStyle({
      backgroundImage: "url('" + content[currentSlide] + "')",
    });

    const loop = setInterval(() => {
      if (currentSlide === content.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [content, currentSlide, interval]);
  const slideStyles = {
    container: {
      color: "black",
    },
    vision: {
      color: "black",
      animation: "vision 500ms linear forwards",
    },
  };
  return (
    <section className={"slideshow"}>
      <div className={"slide-holder"}>
        <section className={"slide previous-slide"}>
          <div className={"slide-thumbnail"}> </div>
        </section>
        <section className={"slide current-slide"}>
          <div style={currentSlideStyle} className={"slide-thumbnail"}></div>
        </section>
        <section className={"slide next-slide"}>
          <div className={"slide-thumbnail"}></div>
        </section>
      </div>
    </section>
    // <div className={`slide-container`}>
    //     <div className={`motto`}>
    //         <Typography variant="h5" color="textPrimary">
    //             {getText()}
    //         </Typography>
    //         <Typography variant="body1" color="textPrimary">
    //             Here goes the about us of Resilient Voices
    //   </Typography>
    //     </div>
    // </div>
  );
}
