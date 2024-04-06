import React from "react";

const NotePage = function NotePage(){
    return (
        <div className="page">
            <h1 style={{marginop: "20px"}}>Note</h1>

            <h4>Hi, on this page, I'll be sharing notes on what I've learned.<br/> I hope this will help improve my communication 
            skills and allow me to track my progress.<br/></h4>

            <h3><br/>GIT</h3>
            <a href="https://hackmd.io/aEGKU-uxSKmE7TTuQ1R4kA" >git note</a><br/>
            
            <h3><br/>Front-end</h3>
            <a href="https://hackmd.io/@fatCatOrange/react-hooks">react-hooks</a><br/>
            <a href="https://hackmd.io/@fatCatOrange/redux">redux</a><br/>
            <a href="https://hackmd.io/@fatCatOrange/react-concept">react-concept</a><br/>

            <h3><br/>Homework</h3>
            <a href="https://hackmd.io/@fatCatOrange/linux2024-homework1" >Linux-kernel homework 1<br/></a>
            <a href="https://hackmd.io/@fatCatOrange/linux2024-homework2" >Linux-kernel homework 2</a>
            
        </div>
    )
}

export default NotePage;