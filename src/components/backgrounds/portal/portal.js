import React, { useEffect, useState } from "react";
import '../stylesheets/portal.css'
import uniqid from 'uniqid';

export function PortalBackground(props) {
    const [portalSquares] = useState(Array.apply(null, Array(24)).map(() => {return {id: uniqid}}))
    const [portalOpacity, setPortalOpacity] = useState(props.opacityRange/255)
    const [portalPointerEvents, setPortalPointerEvents] = useState('auto')
    const [portalVisibility, setPortalVisibility] = useState('none')



    function startRainbowEffect(e) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let otherRandom = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.opacity = 0.4;
        e.target.style.background = `radial-gradient(#${randomColor}, #${otherRandom} 80%)`;
    } 

    function lowerRainbowEffect(e) {
        let random = Math.floor(Math.random()*100)
        if (random < 25) e.target.style.background = 'none';
        e.target.style.opacity = 0.2;
    }

    useEffect(() => {
        if (portalOpacity !== props.opacityRange/255) setPortalOpacity(() => props.opacityRange/255);
        (props.opacityRange < 128) ? setPortalPointerEvents(() => 'none') : setPortalPointerEvents(() => 'auto');
        (props.opacityRange === 0) ? setPortalVisibility(() => 'none') : setPortalVisibility(() => 'grid');
    }, [props.opacityRange, portalOpacity]);

    return (
        <div id="portalContainer" style={{opacity: portalOpacity, pointerEvents: portalPointerEvents, display: portalVisibility}}>
            {portalSquares.map((square, index) => {
                return (
                    <div 
                        className="portalSquare" 
                        key={index + 100} 
                        role="background-styling"
                        onMouseEnter={startRainbowEffect}
                        onMouseLeave={lowerRainbowEffect}
                    ></div>
                )
            })}
        </div>
    )
}

export function SimplePortalBackground() {
    const [portalOpacity] = useState(0.6)

    return (
        <div id="portalContainer" style={{opacity: portalOpacity}}></div>
    )
}