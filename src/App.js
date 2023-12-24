import MenuBar from "./MenuBar";
import MusicMode from "./MusikMode";
import StyleMode from "./StyleMode";
import PrivateMode from "./PrivateMode";
import React from "react";
import StateMode from "./StateMode";
function App() {

    let destination ;
    switch (window.location.pathname){
        case "/Music": destination = <MusicMode/>
            break
        case "/Style": destination = <StyleMode/>
            break
        case "/Privacy": destination = <PrivateMode/>
            break
        case "/State": destination = <StateMode/>
            break
    }
  return (
    <div className="App">
       <MenuBar/>
        {destination}
    </div>
  );
}
export default App;
