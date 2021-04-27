import React, { Component } from 'react';

export default function() {
    return (
        <div>
            <div className="footer-wrapper">
                <div className="footer">
                    <div className="footer-left-side">
                        <div className="left-side-wrapper">
                            <div className="sunflower-image">
                                <img className="little-sunflower-image" src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/11/Sunflower-tr.png" alt="little image of sunflower"/>
                            </div>
                            <p className="footer-side-header">
                                About The Sunflower
                            </p>

                            <p className="footer-side-description">
                                Whether it is for coffee and a dessert, breakfast or brunch, lunch, or catering, we deliver world-class quality and flavor in every entrée, side, and dessert.
                            </p>

                            <div className="social-media-buttons-wrapper">
                                <div className="social-media-buttons">
                                    FB IG TA TW
                                </div>
                            </div>

                            <div className="buttons-wrapper">
                                <div className="left-btn">
                                    <a href="#" className="button  black-btn">
                                        <button> 512 14th st</button>
                                    </a>
                                </div>

                                <div className="right-btn">
                                    <a href="#" className="button">
                                        <button> 409-763-5500</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-center">
                        <div className="restaurant-front-image">
                            <img src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/11/circle-01.png" alt="" className="image"/>
                        </div>
                        <div className="header-wrapper">
                            <h2 className="hours-header">Sunday - Saturday</h2>
                        </div>
                        <div className="open-hours">
                            <p className="hours">7:00am - 5:00pm</p>
                            <p className="closed-days">Closed tuesdays</p>
                            <p className="hours-disclaimer">Closed Thanksgiving & Christmas Day</p>
                        </div>
                    </div>

                    <div className="footer-right-side">
                        <p className="footer-side-header">
                            Newsletter
                        </p>

                        <p className="footer-side-description">
                            Get exclusive offers, news, and a gift on your anniversary or other special occasions. Don’t worry, we will respect your time and won’t send emails unless it is something important.
                        </p>

                        <div className="buttons-wrapper">
                            <a href="#" className="button black-btn">
                                <button>STAY IN TOUCH</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p className="copyright-text">
                        No copyright 2021 | re-made with React by O.K.
                    </p>
                </div>
            </div>
        </div>
    );
}