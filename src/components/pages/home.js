import React, { Component } from "react";

export default function () {
    return (
        <div className="home-wrapper">
            <div className="cover-img">
                {/* <img src="../../static/assets/img/banner-06.jpg" alt="banner cover photo"/> */}
                <img
                    src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2020/09/banner-06.jpg"
                    alt="banner cover photo"
                />
            </div>

            <div className="now-offering-section">
                <h2 className="now-offering">
                    Now Offering Dine-In, Pick-Up & Curbside Service At <br />
                    The Sunflower
                </h2>
                <div className="offer">
                    <div className="offer-left-side">
                        <div className="picture">
                            <img
                                src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/11/frame-square-02.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="offer-right-side">
                        <div className="offer-right-side-postwrapper">
                            <div className="header-section">
                                <h2>
                                    Our Full Menu For Breakfast & Lunch, &
                                    Weekday Lunch Specials!
                                </h2>
                            </div>
                            <hr />
                            <div className="contact-section">
                                <h3>
                                    <b>
                                        Curbside pick-up or take-out available!
                                        You can even get mixed drinks &
                                        cappuccino to-go!
                                    </b>
                                </h3>
                                <div className="contacts-wrapper">
                                    <div className="contacts-left">
                                        <p>Curbside:</p>
                                    </div>
                                    <div className="contacts-right">
                                        <p className="phone-number">
                                            (409) 763-5500
                                        </p>
                                        <p className="phone-number">
                                            (409) 765-0040
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    Please support our staff with generous tips
                                    & your thanks for their hard work!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="three-button-section-wrapper">
                <div className="three-button-section">
                    <div className="row-wrapper">
                        <div className="left">
                            <div className="picture-wrapper">
                                {/* <div className="picture picture-left"></div> */}
                                <a href="#">
                                    <img
                                        className="picture"
                                        src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/10/frame-vertical-pancake.jpg"
                                        alt="image"
                                    />
                                </a>
                            </div>
                            <div className="button">
                                <a>
                                    <button className="button-hover">
                                        Breakfast
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="center">
                            <div className="picture-wrapper">
                                {/* <div className="picture picture-center"></div> */}
                                <a href="#">
                                    <img
                                        className="picture"
                                        src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/10/frame-vertical-fish-tacos.jpg"
                                        alt="image"
                                    />
                                </a>
                            </div>
                            <div className="button">
                                <a>
                                    <button className="button-hover">
                                        Lunch
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="right">
                            <div className="picture-wrapper">
                                {/* <div className="picture picture-right"></div> */}
                                <a href="#">
                                    <img
                                        className="picture"
                                        src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/10/frame-vertical-chocolate-cheesecake.jpg"
                                        alt="image"
                                    />
                                </a>
                            </div>
                            <div className="button">
                                <a>
                                    <button className="button-hover">
                                        Out Story
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="daily-specials-section-wrapper">
                <div className="daily-specials">
                    <div className="header-wrapper">
                        <h3>Daily Specials</h3>
                    </div>

                    <div className="sub-header-wrapper">
                        <h4>Brunch Specials</h4>
                    </div>

                    <div className="specials-menu-items-wrapper">
                        <div className="specials-menu-item">
                            <div className="item-row">
                                <div className="specials-menu-name">
                                    <p>Quail and Grits</p>
                                </div>
                                <div className="space-between-price"></div>
                                <div className="specials-menu-price">
                                    <p>13.95</p>
                                </div>
                            </div>
                            <div className="specials-menu-description">
                                <p>
                                    Fried Quail Over Homemade Cheese Grits With
                                    Spinach, Tomatoes, And Butter Sauce. Served
                                    With Jalapeno Toast.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="specials-menu-item">
                            <div className="item-row">
                                <div className="specials-menu-name">
                                    <p>Salsa de Molcajete Omelet</p>
                                </div>
                                <div className="space-between-price"></div>
                                <div className="specials-menu-price">
                                    <p>13.95</p>
                                </div>
                            </div>
                            <div className="specials-menu-description">
                                <p>
                                    Three Egg Omelet Filled With Spicy Roasted
                                    Tomatoes And Serrano Salsa, Topped With
                                    Guacamole And Queso Fresco Served With Black
                                    Beans And Breakfast Potatoes{" "}
                                </p>
                            </div>
                        </div>

                        <div className="specials-menu-item">
                            <div className="item-row">
                                <div className="specials-menu-name">
                                    <p>Lemon Curd Waffle</p>
                                </div>
                                <div className="space-between-price"></div>
                                <div className="specials-menu-price">
                                    <p>11.95</p>
                                </div>
                            </div>
                            <div className="specials-menu-description">
                                <p>
                                    Homemade Belgian Waffle. Topped With Whipped
                                    Cream, And Berries, And A Generous Portion
                                    Of Meyer Lemon Curd.
                                </p>
                            </div>
                        </div>
                        <div className="specials-menu-item">
                            <div className="item-row">
                                <div className="specials-menu-name">
                                    <p>Bread Pudding French Toast</p>
                                </div>
                                <div className="space-between-price"></div>
                                <div className="specials-menu-price">
                                    <p>8.95</p>
                                </div>
                            </div>

                            <div className="specials-menu-description">
                                <p>Topped With Fresh Fruit</p>
                            </div>
                        </div>
                        <div className="specials-menu-item">
                            <div className="item-row">
                                <div className="specials-menu-name">
                                    <p>Steak & Eggs</p>
                                </div>
                                <div className="space-between-price"></div>
                                <div className="specials-menu-price">
                                    <p>16.95</p>
                                </div>
                            </div>
                            <div className="specials-menu-description">
                                <p>
                                    Grilled Flat Iron Steak With Three Eggs Any
                                    Style. Served With Breakfast Potatoes And
                                    Toast
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sub-header-wrapper">
                        <h4>Soup of the day</h4>
                    </div>

                    <div className="specials-menu-items-wrapper">
                        <div className="specials-menu-item">
                            <div className="item-row">
                                <div className="specials-menu-name">
                                    <p>Meatball Soup</p>
                                </div>
                                <div className="space-between-price"></div>
                                <div className="specials-menu-price">
                                    <p>5.95 / 7.95</p>
                                </div>
                            </div>
                            <div className="specials-menu-description">
                                <p>Cup 5.95 | Bowl 7.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <a className="button" href="#">
                            <button>Breakfast Menu</button>
                        </a>
                        <a className="button" href="#">
                            <button>Lunch Menu</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
