import React from "react";
import Card from "@material-ui/core/Card";

export function news(title, content, link) {
  const styles = {
    container: {
      textAlign: "left !important",
      display: "grid",
      gridTemplateColumns: "1fr 5fr",
      alignItems: "center",
    },
    title: {
      color: "black",
      fontWeight: "400",
      fontSize: "1.5em",
    },
    content: {
      color: "grey",
      fontSize: "90%",
    },
    blankLine: {
      height: "2px",
      width: "100%",
      background: "#02a89e",
    },
    img: {
      margin: "5px",
      height: "70px",
      width: "70px",
      background: "grey",
      borderRadius: "50%",
    },
  };
  if (link !== "empty") {
    return (
      <a
        style={styles.container}
        href={link}
        rel={"noreferrer"}
        target={"_blank"}
      >
        <div>
          <img
            src={require("assets/img/resilient.jpg")}
            alt="Image"
            style={styles.img}
          />
        </div>
        <div>
          <div style={styles.title}>{title}</div>
          <div style={styles.blankLine}></div>
          <div style={styles.content}>{content}</div>
        </div>
      </a>
    );
  }
  if (link === "empty") {
    return (
      <Card style={{ margin: `10px` }}>
        <div style={styles.container}>
          <div>
            <img
              src={require("assets/img/resilient.jpg")}
              alt="Image"
              style={styles.img}
            />
          </div>
          <div>
            <div style={styles.title}>{title}</div>
            <div style={styles.blankLine}> </div>
            <div style={styles.content}>{content}</div>
          </div>
        </div>
      </Card>
    );
  }
}

// Chairperson
// Accountant
// Secretary
