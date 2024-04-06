import React from "react";
import "../css/Contact.css";
import DisplayContainer from "../components/DisplayContainer";
import chat from "../image/chat.png";
import tetris from "../image/tetris.png";

const WebPage = function WebPage(){
    const introduction = ['Hush hub','Tetris']
    return (
        <div className="page" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
           <DisplayContainer src = {[chat, tetris]} title = {introduction}/>
        </div>
    )
}

export default WebPage;