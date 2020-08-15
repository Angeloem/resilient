import React from "react";

//core material ui component
import "./assets/galleryCard.css";

// eslint-disable-next-line react/prop-types
export default function GalleryCard({ images = [], head = "" }) {
  const styles = {
    container: {
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 300px))",
      justifyContent: "center",
      gridGap: "20px",
      transition: "1s",
    },
    imageContainer: {
      // height: "300px",
    },
    image: {
      textAlign: "center",
      width: "100%",
      borderRadius: "3%",
      height: "auto",
    },
    heading: {
      fontSize: "120%",
      color: "black",
      fontWeight: "bold",
      margin: "20px 10px",
    },
  };

  const imagesArr = [];

  for (let i = 0; i < images.length; i++) {
    imagesArr.push(
      <div style={styles.imageContainer}>
        <img style={styles.image} src={images[i]} alt={"Gallery" + i} />
      </div>
    );
  }
  return (
    <div>
      <div style={styles.heading}>{head}</div>
      <div style={styles.container}>{imagesArr}</div>
    </div>
  );
}
