import React from "react";

//core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GalleryCardNew from "../../components/GalleryCard/GalleryCardNew";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import themeStyles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
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

export default function LoginPage() {
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
        rightLinks={<HeaderLinks />}
        fixed
      />
      <Parallax filter image={require("assets/img/resilient.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Gallery</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={styles.elevatedCard}>
          <GalleryCardNew
            head={"Corona Awareness"}
            images={[
              require("assets/img/2.jpg"),
              require("assets/img/3.jpg"),
              require("assets/img/4.jpg"),
              require("assets/img/5.jpg"),
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
