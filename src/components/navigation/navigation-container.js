import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
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
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-logo">
                    <img src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/11/logo-newest-200.jpg" />
                </div>
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/menu" className="nav-link" activeClassName="nav-link-active">
                        Menu
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/directions" className="nav-link" activeClassName="nav-link-active">
                        Directions
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/contact" className="nav-link" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>
            </div>

            <div className="right-side">
                <div className="social-media-wrapper">
                    <div className="social-media-btn">
                        FB
                    </div>
                    <div className="social-media-btn">
                        IG
                    </div>
                    <div className="social-media-btn">
                        TA
                    </div>
                    <div className="social-media-btn">
                        TT
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavigationComponent); 