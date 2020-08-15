import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "50px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  statements: {
    color: "black",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 400px))",
    justifyContent: "space-around",
    justifyItems: "spaceAround",
  },
  statementHead: {
    fontSize: "200%",
  },
  icons: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "center",
  },
};

export default productStyle;
