/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const {whiteFont} = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <Link
                                to={'/'}
                                className={classes.block}
                            >
                                Resilient Voices Foundation
                            </Link>
                        </ListItem>
                        {/*<ListItem className={classes.inlineBlock}>
                            <Link
                                to={`/members`}
                                className={classes.block}
                            >
                                Members
                            </Link>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href={`/gallery`}
                                className={classes.block}
                            >
                                Gallery
                            </a>
                            <Link to={'/gallery'} className={classes.block}> Gallery </Link>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Link to={"/about"} className={classes.block}>
                                About us
                            </Link>
                        </ListItem>*/}
                    </List>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
