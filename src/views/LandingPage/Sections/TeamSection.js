import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import { cardsGrid } from "../../AboutPage/AboutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// @material-ui/icons

const useStyles = makeStyles(styles);

function getPhoneNumber(name) {
    if (name === "Jordan Richard") {
        return '0766060527'
    } else if (name === "Nourah Ahmed Seif") {
        return '0714226622'
    } else if (name === "Mtegeki Richard Buto") {
        return '0753303132'
    }
}

export default function TeamSection({
  // eslint-disable-next-line react/prop-types
  imageNames = [
    {
      name: "",
      image: "",
      text: "",
      description: "",
      links: [{ name: "", link: "" }],
    },
  ],
  // eslint-disable-next-line react/prop-types
  heading,
  // eslint-disable-next-line react/prop-types
  linkPresent = false,
}) {
  const [showNumberBool, setShowNumberBool] = useState(false);

  // eslint-disable-next-line no-unused-vars
  let containerArray = [];
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const image = {
    container: {
      height: "200px",
      width: "200px",
      overflow: "hidden",
      margin: "0",
    },
    img: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      display: "flex",
      justifyContent: "center",
    },
  };

  function showNumber() {
    let showNumberBoolUpdate = !showNumberBool;
    setShowNumberBool(showNumberBoolUpdate);
  }

  for (let i = 0; i < imageNames.length; i++) {
    let linkss = imageNames[i].links;
    const imageFromParent = imageNames[i].image;
    const nameOf = imageNames[i].name;
    const text = imageNames[i].text;
    const description = imageNames[i].description;
    if (linkPresent === true) {
      containerArray.push(
        <div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              gridGap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0 0 0",
              }}
            >
              <div style={image.container}>
                <img
                  style={image.img}
                  src={imageFromParent}
                  alt="..."
                  className={imageClasses}
                />
              </div>
            </div>
            <h4 className={classes.cardTitle}>
              {nameOf}
              <br />
              <small className={classes.smallTitle}>{text}</small>
            </h4>
            <div className={classes.description}>{description}</div>
            <div className={classes.justifyCenter}>
              {linkss.map(function (link, i) {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a href={link.link} target={"_blank"} rel={"noreferrer"}>
                      <i className={classes.socials + " " + link.name} />
                    </a>
                  </Button>
                );
              })}
              {showNumberBool ? (
                <Button
                  justIcon
                  color={"transparent"}
                  className={classes.margin5}
                  onClick={showNumber}
                  styles={{ marginLeft: "10px" }}
                >
                  <div style={{ marginLeft: "50px" }}>{getPhoneNumber(nameOf)}</div>
                </Button>
              ) : (
                <Button
                  justIcon
                  color={"transparent"}
                  className={classes.margin5}
                  id="contactIcon"
                >
                  <div className={classes.socials} onClick={showNumber}>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                </Button>
              )}
            </div>
          </div>
        </div>
      );
    } else if (linkPresent === false) {
      containerArray.push(
        <div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              gridGap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0 0 0",
              }}
            >
              <div style={image.container}>
                <img
                  style={image.img}
                  src={imageFromParent}
                  alt="..."
                  className={imageClasses}
                />
              </div>
            </div>
            <h4 className={classes.cardTitle}>
              {nameOf}
              <br />
              <small className={classes.smallTitle}>{text}</small>
            </h4>
            <div className={classes.description}>{description}</div>
          </div>
        </div>
      );
    }
  }
  return (
    <div className={classes.section} style={{ margin: "0 5rem" }}>
      <div>
        <h2 className={classes.title} style={{ textAlign: "left" }}>
          {heading}
        </h2>
        <div style={cardsGrid.blankLine}> </div>
        <div className={classes.gridTiles}>{containerArray}</div>
      </div>
    </div>
  );
}
