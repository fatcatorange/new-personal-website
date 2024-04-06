import React from "react";
import "../css/Contact.css";
import DisplayContainer from "../components/DisplayContainer";
import rpgGame from "../image/rpg_game.png";
import shootGame from "../image/shoot_game.png";
import newGame from "../image/newGame.png"

const GamePage = function GamePage(){
    const introduction = ['3D RPG games','Shoot em up', 'Jimmy\'s adventure']
    return (
        <div className="page" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
           <DisplayContainer src = {[rpgGame, shootGame, newGame]} title = {introduction}/>
        </div>
    )
}

export default GamePage;