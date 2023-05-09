import React, { useState } from 'react'
import Nav from './nav'
import './styles/hero.scss'
import arrowup from '/assets/arrowup.svg'
import arrowdown from '/assets/arrowdown.svg'
import img from '/assets/img.svg'

export default function Hero() {
    const [hover, setHover] = useState()
    return (
        <div className="hero">
            <Nav />
            <div className="main-content">
                <h2 className="main-content-header">
                    The best free stock photos, royalty free
                    images & video shared by creators.
                </h2>
                <div className="input">
                <ul style={hover ? {visibility: 'visible', opacity: '1'} : {visibility: 'hidden', opacity:'0'}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <li> <img src={img} alt="" /> photos</li>
                        <li>videos</li>
                    </ul>
                    <button className="input-btn" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> <img src={img} alt="" /> <h5>photos</h5> <img src={hover ? arrowup : arrowdown} alt="" /></button>
                    <input type="text" placeholder='search for free photos' style = {{ caretColor: "black"}} />
                    <div className="input-svg">
                        <svg fill="#000000" height="17px" width="17px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-48.84 -48.84 586.08 586.08" xml:space="preserve" stroke="#000000" stroke-width="16.1172"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
                    </div>
                </div>
                <p className="main-context-paragraph">
                    <span>Trending: </span>
                    abstract, dark, city, nature, flowers
                </p>
            </div>
            {/* <div className="backgroundOverLay">
            </div> */}
        </div>
    )
}