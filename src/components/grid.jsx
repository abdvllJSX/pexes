import React, { Component, useEffect, useState } from "react";
import './styles/grid.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowup from '/assets/arrowup.svg'
import arrowdown from '/assets/arrowdown.svg'
import Slider from "react-slick";
import GridImage from "./columnone";
import ColumnTwo from "./columntwo";
import ColumnThree from "./columnthree";


export default function Grid(props) {
    function columnOne() {
        let imageArray = []
        for (let i = 0; i < 10; i++) {
            const img = `https://picsum.photos/400/${i % 2 === 0 ? 400 : 700}?image=${i * 5 + 10}`
            imageArray.push({
                src: img,
                id: i,
                onHover: false
            })
        }
        return imageArray
    }

    function columnTwo() {
        let imageArray = []
        for (let i = 10; i < 20; i++) {
            const img = `https://picsum.photos/400/${i % 2 === 0 ? 600 : 700}?image=${i * 5 + 10}`
            imageArray.push({
                src: img,
                id: i,
                onHover: false
            })
        }
        return imageArray
    }


    function columnThree() {
        let imageArray = []
        for (let i = 20; i < 31; i++) {
            const img = `https://picsum.photos/400/${i % 3 === 0 ? 300 : 700}?image=${i * 5 + 10}`
            imageArray.push({
                src: img,
                id: i,
                onHover: false
            })
        }
        return imageArray
    }

    const gridImage = columnOne().map(image => (
        <GridImage
            src={image.src}
            key={image.id}
            id={image.id}
            on={image.onHover}
        />
    ))

    const columntwo = columnTwo().map(image => (
        <ColumnTwo
            src={image.src}
            key={image.id}
            id={image.id}
            on={image.onHover}
        />
    ))

    const columnthree = columnThree().map(image => (
        <ColumnThree
            src={image.src}
            key={image.id}
            id={image.id}
            on={image.onHover}
        />
    ))


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
                <div className="col">
                    {gridImage}
                </div>


                
                <div className="col">
                    {columntwo}
                </div>
                <div className="col col-3">
                    {columnthree}
                </div>
            </div>
        </div>
    )
}