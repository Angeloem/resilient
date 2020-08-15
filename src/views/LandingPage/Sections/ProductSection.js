import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import cStyles from "./Production.module.css";
import { news } from "../../../components/News/news";
import { actions } from "../../../components/Actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFlag } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const vision =
    "To ensure a community with higher standard of life\
                                      and focused on economic and social welfare\
                                      services";
  const mission =
    "To support the community on improving social, and\
                                      economic welfare of the vulnerable groups by\
                                      working with the government, development\
                                      partners, Civil Society Organization (CSOs) and other\
                                      stakeholders.";
  const classes = useStyles();
  const newStyles = {
    padding: "10px",
  };
  const extendable = {
    maxWidth: "auto",
    margin: "5px",
    overflow: "hidden",
  };
  const cardsGrid = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    },
    children: {
      maxWidth: "auto",
      margin: "5px",
      overflow: "hidden",
    },
    left: {
      ...extendable,
      background: "rgba(128, 128, 128, .1)",
    },
    right: {
      ...extendable,
      background: "rgba(128, 128, 128, .8)",
    },
    blankLine: {
      height: "4px",
      width: "15%",
      background: "#02a89e",
    },
  };
  const _actions = [
    {
      title: "Environment",
      content: "We deal with the environmental changes",
      image: require("assets/img/environment1.jpg"),
    },
    {
      title: "Elderly",
      content:
        "We strive to make sure the elders are treated in a way that fits their old age",
      image: require("assets/img/elders.jpg"),
    },
    {
      title: "Charity",
      content:
        "Charity is one of our tasks to make sure that people in harsh environment are also cared for",
      image: require("assets/img/charity1.jpeg"),
    },
    {
      title: "Children",
      content:
        "We seek to help children have the best tomorrow by raising concern on their uprising",
      image: require("assets/img/children1.jpg"),
    },
    {
      title: "Women",
      content:
        "We strive to make women heard in the society as we know they are a major factor in economy building",
      image: require("assets/img/women.jpg"),
    },
    {
      title: "Youth",
      content:
        "We work with the youth closely to bring a better nation tomorrow",
      image: require("assets/img/youth.jpg"),
    },
  ];
  const _news = [
    {
      title: "Corona",
      content: "Corona still exists. Take care and follow safety instructions",
    },
    {
      title: "Charity",
      content:
        "We are expecting to hold charity event on 1/10/2020... Save the date",
    },
  ];
  let newsArr = [];
  _news.forEach((e) => {
    newsArr.push(news(e.title, e.content, "empty"));
  });
  let actionsArr = [];
  _actions.forEach((e) => {
    actionsArr.push(
      <div style={cardsGrid.children}>
        <Card>{actions(e.title, e.content, e.image)}</Card>
      </div>
    );
  });

  return (
    <div>
      <GridContainer justify="center" className={classes.section}>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.statements}>
            <div>
              <div className={classes.icons}>
                <FontAwesomeIcon icon={faEye} size={"10x"} color={"#02a89e"} />
              </div>
              <div className={classes.statementHead}>Our Vision</div>
              <div>{vision}</div>
            </div>
            <div>
              <div className={classes.icons}>
                <FontAwesomeIcon icon={faFlag} size={"10x"} color={"#02a89e"} />
              </div>
              <div className={classes.statementHead}>Our Mission</div>
              <div>{mission}</div>
            </div>
          </div>
        </GridItem>
      </GridContainer>

      <GridContainer className={cStyles.gridContainer}>
        {/* the first grid item */}
        <GridItem xs={12} sm={12} md={4} className={cStyles.leftSide}>
          <h2 style={{ color: "black", margin: "0" }}>News</h2>
          <div style={cardsGrid.blankLine}> </div>
          <div>
            <div style={newStyles}>{newsArr}</div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} className={cStyles.rightSide}>
          <h2 style={{ color: "black", margin: "0" }}>Actions</h2>
          <div style={cardsGrid.blankLine}> </div>
          <div style={cardsGrid.container}>{actionsArr}</div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
