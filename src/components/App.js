import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);


const Footer = ({fontSize, fontColor, text}) => {
  return(
    <p>{text}</p>
  )
}



const HeaderTag = ({textColor, tagText, backgroundColor}) => {
  if(backgroundColor == 'red') return null
  return(
    <h1 style={{color: textColor, backgroundColor: backgroundColor }}>{tagText}</h1>
  )
}
function App() {
  return (
    <div>
     <HeaderTag textColor={'gray'} tagText={'fdsafds'}/>
     <HeaderTag textColor={'yellow'} tagText={'Sandbox'} />
     <HeaderTag backgroundColor={'red'} tagText={'Lari'} />
     <Footer text={'this is the footer'} />
     <Footer text={''} />
    </div>
  );
}

export default App;
