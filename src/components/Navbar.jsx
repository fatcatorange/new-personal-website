import React from "react";
import { useState } from "react";
import "../css/Navbar.css"
import wojakPicture from "../image/pepe.jpg"

const Navbar = function Navbar(props){

    const buttonSet = [
        <button className={"nav-button " + (props.nowID === 0 ? "select":"")} 
            onClick = {()=>{props.setNowPage("about");props.setNowID(0);}}>about</button>,
        <button className={"nav-button " + (props.nowID === 1 ? "select":"")} 
            onClick = {()=>{props.setNowPage("note");props.setNowID(1);}}>note</button>,
        <button className={"nav-button " + (props.nowID === 2 ? "select":"")} 
            onClick = {()=>{props.setNowPage("web");props.setNowID(2);}}>web-development</button>,
        <button className={"nav-button " + (props.nowID === 3 ? "select":"")} 
            onClick = {()=>{props.setNowPage("game");props.setNowID(3);}}>game-development</button>,
        <button className={"nav-button " + (props.nowID === 4 ? "select":"")} 
            onClick = {()=>{props.setNowPage("contact");props.setNowID(4);}}>contact</button>,
    ]

    return (
        <div className="navbar" style={props.display ? {minWidth: "100px", width: "20vw"} : {minWidth: "50px",width: "50px"}} >
            {props.display ? 
            <>
            <div className="picture-container">
                <div className="gray-squre">Jason Liu</div>
                <div className="wojak-picture"></div>
                <div></div>
            </div>
            {buttonSet}
            </>
            :
            <></>
            }
        </div>
    )
}   

export default Navbar;