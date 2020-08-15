import React from "react";

//core material ui component
import { Grid, Typography } from "@material-ui/core";

export default function GalleryCard(image, background, imageInfo, position) {
  const styles = {
    container: {
      height: "100%",
      background: background,
      padding: "50px 0px 50px 0px",
      overflow: "hide",
      borderRadius: "10px",
    },
    image: {
      textAlign: "center",
      width: "100%",
      height: "100%",
    },
    grid: {
      textAlign: "center",
    },
    content: {
      margin: "auto",
      textAlign: "center",
      color: "black",
    },
  };

  if (position) {
    return (
      <div style={styles.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} style={styles.grid}>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={image} style={styles.image} alt="Action image" />
          </Grid>
          <Grid item xs={12} md={6} style={styles.content}>
            <Typography variant="h6"> {imageInfo} </Typography>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div style={styles.container}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} style={styles.content}>
            <Typography variant="h6"> {imageInfo} </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={styles.grid}>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={image} style={styles.image} alt="Action image" />
          </Grid>
        </Grid>
      </div>
    );
  }
}
