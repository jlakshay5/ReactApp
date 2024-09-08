import { useContext, useState,memo } from 'react';
import './PlayButton.css';
import ThemeContext from '../context/ThemeContext';

const PlayButton = memo(function PlayButton({children,onPlay,onPause}){
  console.log('button rendered');
  const theme = useContext(ThemeContext);
  
  // let playing = false; //dont use this approach
  const [playing,setPlaying] = useState(false);
  function handleClick(e){
    // console.log(e);
    e.stopPropagation();
    if(playing)onPause();
    else onPlay();

    setPlaying(!playing);

  }

  return(
    <button className= {theme} onClick={handleClick}>{children} {playing? 'Pause ⏸️':'Play ▶️'}</button>
  );


})


export default PlayButton;