import React, { Component } from 'react';

export default function() {
    return (
        <div>
            <div className="about-page-wrapper">
                <h1>Our Story</h1>
                <div className="stupid-line"></div>
                <div className="about-page">

                    <div className="about-us-description">
                        <div className="header-wrapper"> 
                            <h3 className="header">About The Sunflower Bakery and Cafe</h3>
                        </div>

                        <div className="description-paragraph-wrapper">
                            <p className="description-paragraph">
                                Since 1999, the Sunflower Bakery & Cafe has been serving fantastic food created from scratch with the finest ingredients available. Since our humble beginnings as a small bakery on 16th and Church that served a few bakery items, cold sandwiches, and our famous tomato basil soup, we have always drawn a large crowd. In a couple of years, our success allowed us to open a restaurant at a second location and offer a fantastic dining experience that matched our delicious breakfasts and lunches. By focusing on dishes we want to eat, we quickly won over the crowds, and before long, there were long lines of loyal customers waiting to eat at both places. Needing more room, we combined both businesses at their current location at 512 14th St. in January of 2006. Again the crowds nearly overwhelmed them, and the new location brought in even more customers drawn by our unique food and excellent service.<br />  <br /> In September of 2008, all of that was nearly lost when Hurricane Ike brought in 7 feet of water that destroyed everything in the restaurant right down to the last spoon. Refusing to be bested, we started again, rebuilding the restaurant in record time and re-opening on December 16th, 2008, to record crowds and excellent reviews. The secret to our success is that we are chefs first. As a result, we focus on making fantastic food as well as creating a delightful experience for our customers. By focusing on creating a business we could be proud of instead of just making a profit, we build a loyal following that has far surpassed our wildest dreams.
                            </p>

                            <div className="description-image-wrapper">
                                <img className="description-image" src="https://thesunflowerbakeryandcafe.com/wp-content/uploads/2019/11/600-1200-01.jpg" alt="image of bakery item"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}