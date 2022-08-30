import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };

    return (
        <div className="navigation">
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-logo">
                        <img src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/11/logo-newest-200.jpg" />
                    </div>
                    <div className="nav-links">
                        <div className="burger">=</div>
                        <div className="nav-link-wrapper">
                            <NavLink
                                exact
                                to="/"
                                className="nav-link"
                                activeClassName="nav-link-active"
                            >
                                Home
                            </NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                            <NavLink
                                to="/about"
                                className="nav-link"
                                activeClassName="nav-link-active"
                            >
                                About
                            </NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                            <NavLink
                                to="/menu"
                                className="nav-link"
                                activeClassName="nav-link-active"
                            >
                                Menu
                            </NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                            {/* <NavLink to="/directions" className="nav-link" activeClassName="nav-link-active"> */}
                            <a
                                href="https://www.google.com/maps/dir/29.4003391,-94.9507061/sunflower+bakery+and+cafe/@29.3466329,-94.9396674,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x863f9e471b022a11:0xf8e605ae95bd1c2d!2m2!1d-94.7830248!2d29.3070635"
                                className="nav-link"
                                activeClassName="nav-link-active"
                            >
                                Directions
                            </a>
                            {/* </NavLink> */}
                        </div>
                        <div className="nav-link-wrapper">
                            {/* <NavLink to="/contact" className="nav-link" activeClassName="nav-link-active"> */}
                            <a
                                href="https://thesunflowerbakeryandcafe.com/contact-sunflower-bakery-and-cafe-galveston-tx/"
                                className="nav-link"
                                activeClassName="nav-link-active"
                            >
                                Contact
                            </a>
                            {/* </NavLink> */}
                        </div>
                        <div className="nav-socials-wrapper">
                            <div className="social-buttons">
                                <div className="social-media-btn">FB</div>
                                <div className="social-media-btn">IG</div>
                                <div className="social-media-btn">TA</div>
                                <div className="social-media-btn">TT</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="social-media-wrapper">
                        <div className="social-media-btn">FB</div>
                        <div className="social-media-btn">IG</div>
                        <div className="social-media-btn">TA</div>
                        <div className="social-media-btn">TT</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavigationComponent);
