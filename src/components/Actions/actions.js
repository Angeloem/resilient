import React from "react";

export function actions(header, content, image) {
  const styles = {
    container: {
      width: "100%",
    },
    image: {
      height: "250px",
      width: "100%",
    },
    img: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
    title: {
      color: "black",
      fontWeight: "400",
      fontSize: "1.5em",
      padding: "10px",
    },
    content: {
      color: "grey",
      padding: "10px",
    },
    blankLine: {
      height: "5px",
      width: "100%",
      background: "#02a89e",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.image}>
        <img style={styles.img} src={image} alt="Action Image" />
      </div>
      <div style={styles.blankLine}> </div>
      <div style={styles.title}> {header}</div>
      <div style={styles.content}>{content}</div>
    </div>
  );
}
