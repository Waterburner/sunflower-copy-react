import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default function() {
    return (
        <div>
            <h3>Sorry, no food here :(</h3>
            <div className="btn"><Link to="/">Home</Link></div>
            <div className="btn"><Link to ="/menu">Menu</Link></div>
        </div>
    );
}