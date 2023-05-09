import React, { useState, useEffect } from 'react'
import '../components/styles/nav.scss'
import img from '/assets/img.svg'
import logoactive from '/assets/logoactive.svg'
import arrowup from '/assets/arrowup.svg'
import logo from '/assets/logo.svg'
import arrowdown from '/assets/arrowdown.svg'
export default function Nav() {
    const [hover, setHover] = useState()
    const [windowHeight, setWindowHeight] = useState(window.scrollY)
    useEffect(() => {
        window.addEventListener("scroll", function() {
            setWindowHeight(window.scrollY)
        })
    }, [])
    return (
        <nav style={windowHeight >= 500 ? {backgroundColor: "white",position: "fixed",top: "0", zIndex: "5"} : {backgroundColor: "transparent"}}>
            <div className="nav-logo">
               {windowHeight >= 500 ? 
               <svg width="120" height="40" class="DisplayNone_desktop-oversized__OPqkZ spacing_noMargin__Q_PsJ spacing_oversized-margin-right-50__Z6BXP spacing_desktop-margin-right-30__C4NEG spacing_mobile-margin-right-15__uM70E spacing_tablet-margin-right-15__zeT1z" viewBox="0 0 130.318 50"><g transform="translate(-3894 2762)"><rect width="50" height="50" rx="8" transform="translate(3894 -2762)" fill="#07a081"></rect><path d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z" transform="translate(3880 -2773)" fill="#fff"></path><path d="M1.694,0h2.6V-6.16H7.656a6.579,6.579,0,0,0,2.915-.616,4.639,4.639,0,0,0,1.969-1.76,5.1,5.1,0,0,0,.7-2.728,5.146,5.146,0,0,0-.7-2.75,4.639,4.639,0,0,0-1.969-1.76,6.579,6.579,0,0,0-2.915-.616H1.694Zm2.6-8.47v-5.61H7.722a3.03,3.03,0,0,1,2.134.748,2.641,2.641,0,0,1,.814,2.046A2.684,2.684,0,0,1,9.856-9.24a2.978,2.978,0,0,1-2.134.77ZM20.372.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5A3.458,3.458,0,0,1,18-2.827a3.433,3.433,0,0,1-1.1-2.409H25.74a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594a6.154,6.154,0,0,0-.671-2.849,5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,15.081-2.8,5.9,5.9,0,0,0,17.226-.561,5.958,5.958,0,0,0,20.372.264Zm-.2-10.34a3,3,0,0,1,2.112.792,2.9,2.9,0,0,1,.924,2.068H16.94a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,20.174-10.076ZM26.422,0h2.926l2.706-3.982L34.738,0h2.926L33.506-5.962l4.18-5.94H34.76L32.054-7.964,29.348-11.9H26.422l4.158,5.94ZM44.088.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5,3.458,3.458,0,0,1-2.4-.891,3.433,3.433,0,0,1-1.1-2.409h8.844a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594A6.154,6.154,0,0,0,48.9-9.251a5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,38.8-2.8,5.9,5.9,0,0,0,40.942-.561,5.958,5.958,0,0,0,44.088.264Zm-.2-10.34A3,3,0,0,1,46-9.284a2.9,2.9,0,0,1,.924,2.068h-6.27a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,43.89-10.076ZM51.546,0h2.486V-16.654H51.546ZM60.9.264a5.6,5.6,0,0,0,2.321-.451,3.635,3.635,0,0,0,1.551-1.254,3.21,3.21,0,0,0,.55-1.859,3.088,3.088,0,0,0-.792-2.123A4.635,4.635,0,0,0,62.26-6.732L60.324-7.3a4.436,4.436,0,0,1-1.034-.484,1.023,1.023,0,0,1-.484-.924,1.212,1.212,0,0,1,.484-1.012,2.068,2.068,0,0,1,1.3-.374,3.005,3.005,0,0,1,1.705.506A2.944,2.944,0,0,1,63.4-8.228l1.914-.9a4.344,4.344,0,0,0-1.8-2.233,5.337,5.337,0,0,0-2.9-.8,5.1,5.1,0,0,0-2.178.451,3.7,3.7,0,0,0-1.518,1.243,3.2,3.2,0,0,0-.55,1.87,3.1,3.1,0,0,0,.759,2.09,4.624,4.624,0,0,0,2.3,1.32l1.87.528a3.923,3.923,0,0,1,1.078.473,1.057,1.057,0,0,1,.506.957,1.259,1.259,0,0,1-.55,1.078,2.391,2.391,0,0,1-1.43.4,3.2,3.2,0,0,1-1.881-.594A4.049,4.049,0,0,1,57.684-3.96l-1.914.9a4.774,4.774,0,0,0,1.925,2.42A5.7,5.7,0,0,0,60.9.264Z" transform="translate(3959 -2728)"></path></g></svg>
                 : 
               <svg width="120" height="40"  viewBox="0 0 130.318 50"><g transform="translate(-3894 2762)"><rect width="50" height="50" rx="8" transform="translate(3894 -2762)" fill="#07a081"></rect><path d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z" transform="translate(3880 -2773)" fill="#fff"></path><path d="M1.694,0h2.6V-6.16H7.656a6.579,6.579,0,0,0,2.915-.616,4.639,4.639,0,0,0,1.969-1.76,5.1,5.1,0,0,0,.7-2.728,5.146,5.146,0,0,0-.7-2.75,4.639,4.639,0,0,0-1.969-1.76,6.579,6.579,0,0,0-2.915-.616H1.694Zm2.6-8.47v-5.61H7.722a3.03,3.03,0,0,1,2.134.748,2.641,2.641,0,0,1,.814,2.046A2.684,2.684,0,0,1,9.856-9.24a2.978,2.978,0,0,1-2.134.77ZM20.372.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5A3.458,3.458,0,0,1,18-2.827a3.433,3.433,0,0,1-1.1-2.409H25.74a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594a6.154,6.154,0,0,0-.671-2.849,5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,15.081-2.8,5.9,5.9,0,0,0,17.226-.561,5.958,5.958,0,0,0,20.372.264Zm-.2-10.34a3,3,0,0,1,2.112.792,2.9,2.9,0,0,1,.924,2.068H16.94a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,20.174-10.076ZM26.422,0h2.926l2.706-3.982L34.738,0h2.926L33.506-5.962l4.18-5.94H34.76L32.054-7.964,29.348-11.9H26.422l4.158,5.94ZM44.088.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5,3.458,3.458,0,0,1-2.4-.891,3.433,3.433,0,0,1-1.1-2.409h8.844a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594A6.154,6.154,0,0,0,48.9-9.251a5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,38.8-2.8,5.9,5.9,0,0,0,40.942-.561,5.958,5.958,0,0,0,44.088.264Zm-.2-10.34A3,3,0,0,1,46-9.284a2.9,2.9,0,0,1,.924,2.068h-6.27a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,43.89-10.076ZM51.546,0h2.486V-16.654H51.546ZM60.9.264a5.6,5.6,0,0,0,2.321-.451,3.635,3.635,0,0,0,1.551-1.254,3.21,3.21,0,0,0,.55-1.859,3.088,3.088,0,0,0-.792-2.123A4.635,4.635,0,0,0,62.26-6.732L60.324-7.3a4.436,4.436,0,0,1-1.034-.484,1.023,1.023,0,0,1-.484-.924,1.212,1.212,0,0,1,.484-1.012,2.068,2.068,0,0,1,1.3-.374,3.005,3.005,0,0,1,1.705.506A2.944,2.944,0,0,1,63.4-8.228l1.914-.9a4.344,4.344,0,0,0-1.8-2.233,5.337,5.337,0,0,0-2.9-.8,5.1,5.1,0,0,0-2.178.451,3.7,3.7,0,0,0-1.518,1.243,3.2,3.2,0,0,0-.55,1.87,3.1,3.1,0,0,0,.759,2.09,4.624,4.624,0,0,0,2.3,1.32l1.87.528a3.923,3.923,0,0,1,1.078.473,1.057,1.057,0,0,1,.506.957,1.259,1.259,0,0,1-.55,1.078,2.391,2.391,0,0,1-1.43.4,3.2,3.2,0,0,1-1.881-.594A4.049,4.049,0,0,1,57.684-3.96l-1.914.9a4.774,4.774,0,0,0,1.925,2.42A5.7,5.7,0,0,0,60.9.264Z" transform="translate(3959 -2728)" fill="#fff"></path></g></svg> 
               } 
                
            </div>

            <div className="nav-input-container" style={windowHeight >= 500 ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                <div className="input-left">
                    <img src={img} alt="" />
                    <h3 className="left-paragraph">
                        photos
                    </h3>
                    <img src={arrowdown} alt="" />
                </div>
                <div className="input-center">
                    <input type="text" placeholder='Search for free photos' />
                </div>
                <div className="input-right">
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-48.84 -48.84 586.08 586.08" xml:space="preserve" stroke="#000000" stroke-width="16.1172"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
                </div>
            </div>

            <div className="nav-left">
                <ul className="nav-items">
                    <li className={windowHeight >= 500  ? "nav-link-extra" : "nav-link"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <p>explore</p>
                        {hover
                            ? <svg fill={windowHeight >= 500  ? "#000000" : "#ffffff"} width="12px" height="12px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke= {windowHeight >= 500  ? "#000000" : "#ffffff"} ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z"></path></g></svg>
                            : <svg  fill={windowHeight >= 500  ? "#000000" : "#ffffff"} height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke={windowHeight >= 500  ? "#000000" : "#ffffff"} ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></g></svg>
                        }
                        <ul style={hover ? { visibility: 'visible', opacity: '1' } : { visibility: 'hidden', opacity: '0' }}>
                            <li>discover photo</li>
                            <li>popular searches</li>
                            <li>leaderboarder</li>
                            <li>challenges</li>
                            <li>free videos</li>
                            <li>pexes blog</li>
                        </ul>
                    </li>
                    <li className={windowHeight >= 500  ? "nav-link-extra" : "nav-link"}><p>license</p></li>
                    <li className={windowHeight >= 500  ? "nav-link-extra" : "nav-link"}><p>upload</p></li>
                </ul>
                
                <button className="nav-btn-svg" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
                    <svg fill={windowHeight >= 500 ? "black" : "#ffffff"} height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.055 32.055" xml:space="preserve" stroke="#fffff"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path> </g> </g></svg>
                </button>
                <button className="nav-btn" style={windowHeight >= 500 ? {backgroundColor: '#05A081', color: 'white'} : {backgroundColor: 'white'}}>join</button>
            </div>
            <div className="hamburger">
            <button className="nav-btn" style={windowHeight >= 500 ? {backgroundColor: '#05A081', color: 'white'} : {backgroundColor: 'white'}}>join</button>
            <svg width="26px" height="26px" class="spacing_noMargin__Q_PsJ" viewBox="0 0 24 24"><use xlink:href="#menu-f3883d0dbd751749e5f9b72aa0c91502"></use></svg>
            </div>
        </nav>
    )
}