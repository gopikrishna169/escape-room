import React, { Component } from "react";
import "./introPage.css";
import button from "../../images/B2.png";
import user from "../../images/User1.png";
import { Link } from 'react-router-dom';

class IntroPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="intro-page">
                    <iframe className="video-background" src="https://www.youtube.com/embed/VFB5r6kpxXk?version=3&loop=1&autoplay=1&controls=0&showinfo=0&vq=hd1080" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="headings">
                        <h2 className="heading-1">BREAKINS]</h2>
                        <h3 className="heading-2">ESCAPEROOMS</h3>
                        <h1 className="heading-3">Check your cyber security skills to the test and help Company X.</h1>
                        <img src={user} />
                        <div>
                            <Link to="/aboutPage"><img src={button} /></Link>
                        </div>
                    </div>

                </div>
            </React.Fragment>

        );
    }
}




export default IntroPage;
