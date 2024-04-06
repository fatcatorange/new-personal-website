import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './Pages/AboutPage';
import NotePage from './Pages/NotePage';
import ContactPage from './Pages/ContactPage';
import GamePage from './Pages/GamePage';
import WebPage from './Pages/WebPage';


function App() {
  const [displayNav,setDisplayNav] = useState(false);
  const [nowPage, setNowPage] = useState("about");
  const [nowPageID, setNowPageID] = useState(0);
  let page;
  switch(nowPage){
    case 'about':
      page = <AboutPage/>
      break;
    case 'note':
      page = <NotePage/>
      break;
    case 'contact':
      page = <ContactPage/>
      break;
    case 'game':
      page = <GamePage/>
      break;
    case 'web':
      page = <WebPage/>
      break;
  }
  
  return ( 
    <div className={"App"}>
      <Navbar display = {displayNav} setNowPage = {(page)=>setNowPage(page)} 
        nowID = {nowPageID} setNowID = {setNowPageID}/>
      <div style={{overflowY: "auto" ,height: "100vh", width: "100vw"}}>{page}</div>
      <div className={"option"} onClick = {()=>setDisplayNav(prev=>!prev)}>
          <div className={"line " + (displayNav ? "line1" : "")}></div>
          <div className={"line " + (displayNav ? "line2" : "")}></div>
          <div className={"line " + (displayNav ? "line2" : "")}></div>
      </div>
    </div>
  );
}

export default App;
