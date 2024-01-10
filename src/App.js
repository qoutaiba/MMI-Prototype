import MenuBar from "./MenuBar";
import MusicMode from "./MusikMode";
import StyleMode from "./StyleMode";
import PrivateMode from "./PrivateMode";
import React, {useRef} from "react";
import StateMode from "./StateMode";
import OnOffButton from "./OnOffButton";
import sound from "./Musik/land.wav" ;
function App() {

    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };

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
        <audio ref={audioRef} src= {sound}/>
        <button onClick={playAudio}>Click me </button>
       <MenuBar/>
        <OnOffButton/>
        {destination}
    </div>
  );
}
export default App;
