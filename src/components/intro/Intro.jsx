import React, {useEffect, useRef} from 'react'
import "./intro.scss"
import { init } from 'ityped';

export default function Intro() {
    const textRef = useRef()

    useEffect(()=>{
        init( textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings:["Developer", "Engineer"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.svg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey there, I'm</h2>
                    <h1>Shoaib Ahmed</h1>
                    <h3>An Aspiring <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="/"></img>
                </a>
            </div>
        
        </div>
    )
}
