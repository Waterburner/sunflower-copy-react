import React, { Component } from 'react';

export default function() {
    return (
        <div className="home-wrapper">
            <div className="cover-img">
                <img src="../../static/assets/img/banner-06.jpg" alt="banner cover photo"/>
            </div>

            <div className="now-offering-section">
                <div className="offer">
                    <div className="offer-left-side">
                        <div className="picture"></div>
                    </div>

                    <div className="offer-right-side">
                        <div className="header-section">
                            <h2>Our Full Menu For Breakfast & Lunch, & Weekday Lunch Specials!</h2>
                        </div>

                        <div className="contact-section">
                            <h3>Curbside pick-up or take-out available! You can even get mixed drinks & cappuccino to-go!</h3>
                            <div className="contacts-left">
                                <p>Curbside:</p>
                            </div>
                            <div className="contacts-right">
                                <p className="phone-number">(409) 763-5500</p>
                                <p className="phone-number">(409) 765-0040</p>
                            </div>
                            <p>Please support our staff with generous tips & your thanks for their hard work!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}