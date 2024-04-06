import React from "react";
import "../css/DisplayContainer.css" 

const DisplayContainer = function DisplayContainer(props){
    const [nowImage,setNowImage] = React.useState(0);
    const [hide,setHide] = React.useState(false);
    const timeoutID = React.useRef(0);
    const closeID = React.useRef(0);
    const openID = React.useRef(0);
    const dotSet = props.src.map((item,index)=>{
        return (
            <div className="dot" key = {"dot" + index} onClick = {()=>{
                setHide(true);
                changeImage();
                setTimeout(()=>{
                    setNowImage(index);
                }, 1000)
                setTimeout(()=>{
                    setHide(false);
                },2000)

                
            }} style={nowImage === index ? {backgroundColor: "black"} : {backgroundColor: "white"}}>
            </div>
        )
    });

    function changeImage(){
        clearTimeout(timeoutID.current);
        clearTimeout(closeID.current);
        clearTimeout(openID.current);
        closeID.current = setTimeout(()=>{
            setHide(true);
        },4000)
        timeoutID.current = setTimeout(()=>{
            setNowImage(prev=>((prev + 1) % props.src.length));
            changeImage();       
            openID.current = setTimeout(()=>{
                setHide(false);
            },1000)
        },5000)
    }

    React.useEffect(function(){
        changeImage();
        return ()=>{clearTimeout(timeoutID.current)}
    },[])
    

    return (
        <div className="displayContainer">
            <h2 style={{textAlign: "center"}}>{props.title[nowImage]}</h2>
            <img className = "displayImage" src = {props.src[nowImage]} 
            style = {hide ? {opacity: "0" }: {opacity: "1"}}/>
            <div className="dotContainer">
                {dotSet}
            </div>
        </div>
    )
}

export default DisplayContainer;