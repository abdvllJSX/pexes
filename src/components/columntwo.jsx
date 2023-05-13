import React from "react";
import { useState, useEffect } from "react";
import './styles/gridImage.scss'
export default function ColumnTwo(props) {
    const [on, setOn] = useState(props.on)
    return (
        <div className={`img-container container${props.id}`}
            onMouseEnter={() => setOn(true)}
            onMouseLeave={() => setOn(false)}>
             <img
                src={props.src}
                className={`img${props.id}`}
                alt=""
                key={props.id}

            /> 
            {/* <div className={on ? 'overLay' : 'hidden'}>
                <div className="top">
                    <button className="svg"></button>
                    <button className="svg"><svg fill= "#4a4a4a" className="svg" viewBox="0 0 24 24" width="24" height="24"><use xlink:href="#collection_border-75c45573e9363c7b32ebea7827cfee9f"></use></svg></button>
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        <img src="/assets/images/avater.webp" alt="" />
                        <h4 className="bottom-header">lee</h4>
                    </div>
                    <button className="svg"></button>
                </div>
            </div> */}
        </div >
    )
}