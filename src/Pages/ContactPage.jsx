import React from "react";
import githubIcon from "../icon/GitHub-icon.png";
import leetcodeIcon from "../icon/leetcode.webp";
import gmailIcon from "../icon/gmail.png";
import steamIcon from "../icon/Steam.png";
import ContactContainer from "../components/ContactContainer";
import "../css/Contact.css";

const ContactPage = function ContactPage(){
    return (
        <div className="page" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
           <div style={{minWidth: "50%", overflowX: "auto"}}>
                <h1 >Contact Me</h1>
                <ContactContainer src = {githubIcon} link = "https://github.com/fatcatorange"/>
                <ContactContainer src = {leetcodeIcon} link = "https://leetcode.com/jason0526liu/"/>
                <ContactContainer src = {gmailIcon} link = "p76121136@gs.ncku.edu.tw"/>
                <ContactContainer src = {steamIcon} link = "https://steamcommunity.com/id/jasonliu66"/>
           </div>
        </div>
    )
}

export default ContactPage;