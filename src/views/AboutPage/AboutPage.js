import React from "react";

//core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import themeStyles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import cStyles from "../LandingPage/Sections/Production.module.css";
import Card from "components/Card/Card";
import { actions } from "../../components/Actions/actions";
import { ContactUs } from "./sections/ContactUs";
import HeaderLinks from "../../components/Header/HeaderLinks";

const useStyles = makeStyles(themeStyles);
const dashboardRoutes = [];
const styles = {
  container: {
    overflow: "hidden",
  },
  elevatedCard: {
    padding: "60px 0px 20px 0px",
  },
};

const extendable = {
  maxWidth: "auto",
  margin: "5px",
  overflow: "hidden",
};
export const cardsGrid = {
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
    content: "We work with the youth closely to bring a better nation tomorrow",
    image: require("assets/img/youth.jpg"),
  },
];
let actionsArr = [];

_actions.forEach((e) => {
  actionsArr.push(
    <div style={cardsGrid.children}>
      <Card>{actions(e.title, e.content, e.image)}</Card>
    </div>
  );
});

export default function AboutPage() {
  const classes = useStyles();
  return (
    <div style={styles.container}>
      <Header
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        color="transparent"
        routes={dashboardRoutes}
        brand="Resilient Voices Foundations"
        fixed
        rightLinks={<HeaderLinks />}
      />
      <Parallax filter image={require("assets/img/resilient.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>About Us</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={styles.elevatedCard}>
          <GridItem xs={12} sm={12} md={12}>
            <section>
              <h2 style={{ color: "black", margin: "0" }}>About Us</h2>
              <div style={cardsGrid.blankLine}> </div>
              <div style={{ color: "black", lineHeight: "200%" }}>
                {"\u00A0 \u00A0 \u00A0 \u00A0"}
                <b>RESILIENT VOICES FOUNDATION</b> is a Local registered
                non-government organization in Tanzania. The organization was
                established in 2020 under the Non-Governmental Organizations
                Act, No. 24 of 2002.which deals with all sort of challenges and
                problems that marginal groups specifically children, youth,
                women, disabled and elderly people encounter in the society
                aiming to bring solutions to those problems through education,
                financial, health, cultural, and social welfare support. These
                drives come from lack of different opportunities to marginalized
                groups, unstable communities as the result of outstanding
                tradition that cause conflicts in most families. Economic
                problems, lack of Health education, Bad culture such as female
                genital mutilation and early marriages that limits access to
                education, moreover, wife inheritance and isolation of people
                with disabilities.
              </div>
            </section>
          </GridItem>
          <GridItem>
            <section>
              <h2 style={{ color: "black", margin: "0" }}>Objectives</h2>
              <div style={cardsGrid.blankLine}> </div>
              <ul style={{ color: "black", lineHeight: "200%" }}>
                <li>
                  {" "}
                  To promote primary, secondary, tertiary and adult continuing
                  education.
                </li>
                <li>
                  {" "}
                  To promote family social welfare and enhance family stability.
                </li>
                <li>
                  Raising awareness to the society in sports, community
                  services, and hands-on skills training to help them grow into
                  responsible citizens.
                </li>
                <li>
                  To promote the preservation of the beauty of Tanzania and
                  facilitate environmental protection.
                </li>
                <li>
                  To promote and develop plan that would improve social
                  well-being of people.
                </li>
              </ul>
            </section>
          </GridItem>
          <GridItem>
            <section>
              <h2 style={{ color: "black", margin: "0" }}>Area of Practice</h2>
              <div style={cardsGrid.blankLine}> </div>
              <ul style={{ color: "black", lineHeight: "200%" }}>
                <li>Youth mobilization</li>
                <li>Social projects implementation and management</li>
                <li>Sexual and reproductive health</li>
                <li>Civic participation</li>
                <li>Empowerment</li>
                <li>Livelihoods and employment</li>
              </ul>
            </section>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={cStyles.rightSide}>
            <h2 style={{ color: "black", margin: "0" }}>Actions</h2>
            <div style={cardsGrid.blankLine}> </div>
            <div style={cardsGrid.container}>{actionsArr}</div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <h2 style={{ color: "black", margin: "0" }}>Contact Us</h2>
            <div style={cardsGrid.blankLine}> </div>
            <div style={cardsGrid.container}>
              <ContactUs />
            </div>
          </GridItem>
        </div>
      </div>
      <Footer />
    </div>
  );
}
