import React, { Component, useEffect, useState } from "react";
import './styles/grid.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowdown from '/assets/arrowdown.svg'
import GridImage from "./columnone";



export default function Grid(props) {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
    }, [])
    const check = windowWidth <= 416 ? 2 : 3
    function createImage() {
        let allImageGrid = []
        for (let i = 0; i < 30; i++) {
            const img = `https://picsum.photos/400/${i % 3 === 0 ? 400 : 700}?image=${i * 5 + 10}`
            allImageGrid.push({
                src: img,
                id: i,
                onHover: false
            })
        }
        return allImageGrid
    }

    function splitImagesIntoSubImages(array, X) {
        const subImages = [];
        for (let i = 0; i < X; i++) {
            const subImage = [];
            for (let j = i; j < array.length; j += X) {
                subImage.push(array[j]);
            }
            subImages.push(subImage);
        }
        return subImages;
    }
    //  console.log(createImage())

    const imageRender = createImage().map(arr => (
        <GridImage 
            src={arr.src}
            key={arr.id}
            id={arr.id}
        />
    ))
    console.log(splitImagesIntoSubImages(imageRender, check))
    const eachColumn = splitImagesIntoSubImages(imageRender, check).map(column => (
        <div className="column" key={column.id}>
            {column}
        </div>
    ))

    console.log(eachColumn)
    return (
        <div className="grid-wrapper" style={props.open ? { display: "block" } : { display: "none" }}>
            <div className="carousel-container">
                <div className="grid-carosel-paragraph active"><p>home</p></div>
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

            <div className="grid-row">
                {eachColumn}
            </div>
        </div>
    )
}