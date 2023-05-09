import React, { Component, useEffect, useState } from "react";
import './styles/grid.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowup from '/assets/arrowup.svg'
import arrowdown from '/assets/arrowdown.svg'
import Slider from "react-slick";
export default function Grid() {
    const [hover, setHover] = useState()
    function createImage() {
        let imageArray = []
        for (let i = 0; i < 15; i++) {
            const img = `https://picsum.photos/500/300?image=${i * 5 + 10}`
            imageArray.push(img)
        }
        return imageArray
    }
    console.log(createImage())
    const gridImage = createImage().map((src, index) => (
        <div className={"img-container"}>
            <img
                src={src}
                className={`img${index}`}
                alt=""
                key={index}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </div>
    ))

    // function getHovered() {
    //     for (let i = 0; i < createImage().length; i++) {
    //         if (onMouseEnter === true){
    //             setHover(
    //                 prevHover => 
    //             )
    //         }
    //     }
    // }
    return (
        <div className="grid-wrapper">
            <div className="carousel-container">
                <div className="grid-carosel-paragraph"><p>home</p></div>
                <div className="grid-carosel-paragraph"><p>videos</p></div>
                <div className="grid-carosel-paragraph"><p>leaderboard</p></div>
                <div className="grid-carosel-paragraph"><p>challenges</p></div>
            </div>

            <div className="grid-header">
                <h2 className="grid-header-header">
                    free stock photos
                </h2>
                <button className="grid-header-btn">trending <img src={arrowdown} alt="" /> </button>
            </div>

            <div className="grid-container">{gridImage}
            </div>
        </div>
    )
}