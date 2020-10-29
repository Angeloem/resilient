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
import TeamSection from "../LandingPage/Sections/TeamSection";
import team1 from "assets/img/team1.jpg";
import team2 from "assets/img/team3.jpg";
import team3 from "assets/img/team2.jpg";
import team4 from "assets/img/team4.jpg";
import team5 from "assets/img/team5.jpg";
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

export default function _ProfilePage() {
  const classes = useStyles();
  const leaders = [
    {
      image: team1,
      name: "Jordan Richard",
      text: "Chairperson",
      description: "",
      links: [
        {
          name: "fab fa-twitter",
          link: "https://twitter.com/Jordanrichiy",
        },
        {
          name: "fab fa-instagram",
          link: "https://www.instagram.com/jordan_richiy/",
        },
      ],
    },
    {
      image: team2,
      name: "Nourah Ahmed Seif",
      text: "Secretary",
      description: "",
      links: [],
    },
    {
      image: team3,
      name: "Mtegeki Richard Buto",
      text: "Accountant",
      description: "",
      links: [
        {
          name: "fab fa-instagram",
          link: "https://www.instagram.com/mikabutto/",
        },
      ],
    },
  ];
  const founders = [
    {
      image: team1,
      name: "Jordan Richard",
    },
    {
      image: team2,
      name: "Nourah Ahmed Seif",
    },
    {
      image: team3,
      name: "Mtegeki Richard Buto",
    },
    {
      image: team4,
      name: "Boniventure Chimwenda",
    },
    {
      image: team5,
      name: "Adam Chimwenda",
    },
  ];
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
        rightLinks={<HeaderLinks />}
        fixed
      />
      <Parallax filter image={require("assets/img/resilient.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Members</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <TeamSection
          linkPresent={true}
          imageNames={leaders}
          heading={"Leadership Team"}
        />
        <TeamSection
          linkPresent={false}
          imageNames={founders}
          heading={"Founders"}
        />
      </div>
      <Footer />
    </div>
  );
}
