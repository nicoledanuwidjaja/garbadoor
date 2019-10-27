import React from 'react'

const Nav = () =>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Home
                        <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link" href="/dashboard">Dashboard
                        <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link" href="/about">About Us
                        <span className="sr-only">(current)</span>
                    </a>
                </div>
            </div>
            <div className="navbar navbar-nav text-right">
                <a className="nav-item nav-link" href="/">GarbaᎠᎾᎾᏒ
                    <span className="sr-only">(current)</span>
                </a>
            </div>
        </div>
        < /nav>;


            export default Nav;