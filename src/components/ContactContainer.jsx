import React from "react";
import "../css/ContactContainer.css"
import "../css/Contact.css";

const ContactContainer = function ContactContainer(props){
    return (
        <div className="contactContainer">
            <img src={props.src} className="icon"></img>
            <a className = "contactLink" href={props.link}>{props.link}</a>
        </div>
    )
}

export default ContactContainer;