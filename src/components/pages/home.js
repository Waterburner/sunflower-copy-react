import React, { Component } from 'react';

export default function() {
    return (
        <div className="home-wrapper">
            <div className="cover-img">
                {/* <img src="../../static/assets/img/banner-06.jpg" alt="banner cover photo"/> */}
                <img src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2020/09/banner-06.jpg" alt="banner cover photo"/>
            </div>

            <div className="now-offering-section">
                    <h2 className="now-offering">Now Offering Dine-In, Pick-Up & Curbside Service At <br />The Sunflower</h2>
                <div className="offer">
                    <div className="offer-left-side">
                        <div className="picture">
                            <img src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/11/frame-square-02.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="offer-right-side">

                        <div className="offer-right-side-postwrapper">

                            <div className="header-section">
                                <h2>Our Full Menu For Breakfast & Lunch, & Weekday Lunch Specials!</h2>
                            </div>
                            <hr />
                            <div className="contact-section">
                                <h3><b>Curbside pick-up or take-out available! You can even get mixed drinks & cappuccino to-go!</b></h3>
                                <div className="contacts-wrapper">
                                    <div className="contacts-left">
                                        <p>Curbside:</p>
                                    </div>
                                    <div className="contacts-right">
                                        <p className="phone-number">(409) 763-5500</p>
                                        <p className="phone-number">(409) 765-0040</p>
                                    </div>
                                </div>
                                <p>Please support our staff with generous tips & your thanks for their hard work!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="three-button-section-wrapper">
                <div className="three-button-section">

                    <div className="row-wrapper">
                        <div className="picture-row">
                            <div className="picture-wrapper">
                                {/* <div className="picture picture-left"></div> */}
                                <img className="picture" src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/10/frame-vertical-pancake.jpg" alt="image"/>
                            </div>
                            
                            <div className="picture-wrapper">
                                {/* <div className="picture picture-center"></div> */}
                                <img className="picture" src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/10/frame-vertical-fish-tacos.jpg" alt="image"/>
                            </div>
                            
                            <div className="picture-wrapper">
                                {/* <div className="picture picture-right"></div> */}
                                <img className="picture" src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/10/frame-vertical-chocolate-cheesecake.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="row-wrapper">
                        <div className="button-row">
                            <div className="button">
                                <button>Breakfast</button>
                            </div>

                            <div className="button">
                                <button>Lunch</button>
                            </div>
                            
                            <div className="button">
                                <button>Out Story</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
}