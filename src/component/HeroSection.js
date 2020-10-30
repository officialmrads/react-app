import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSelection.css'

function HeroSection() {
    return (
        <div className='hero-container'>

            <video src="videos/video-2.mp4" autoPlay loop muted />
            <h1>Welcome to our website</h1>
            <p> What do you want to do ?</p>
            <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Report Complain</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>View Complain
            <i className='far fa-play-circle' />
            
            </Button>
            </div>
        </div>
    )
}

export default HeroSection
