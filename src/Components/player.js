import React, {useRef, useState}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons'
import '../Style/player.css'

function Player({currentSong , isPlaying , setIsPlaying}) {
    //Ref
    const audioRef = useRef(null);
    //Event Handlers
    function playSongHandler(){
        if(isPlaying){
            audioRef.current.pause();  // eikhane propser madhome value the false ansi
            setIsPlaying(!isPlaying);  //  er por ekhn eikhane value the click er por true korsi mane state er value change korsi
        }
        else{
            audioRef.current.play();   // mane jodi true hoi state boldai flase hobe false hoile true
            setIsPlaying(!isPlaying);  //mane eikhane true and false toggele hocche
        }
    }
    function timeUpdateHandler(event){
        const current = event.target.currentTime
        const duration = event.target.duration
        setSongInfo({...songInfo, currentTime : current , Totalduration:duration})
    }
    function timeConvertion( time ){
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }
    // state
    const [songInfo , setSongInfo] = useState(
        {
            currentTime : null,
            Totalduration : null
        }
    );
    // eikhane dic deye 2ta use korese songInfo te mane multiple value change korse
    return (
        <div className='player'>
            <div className='time-control'>
                <p>{timeConvertion(songInfo.currentTime)}</p>
                <input type="range"></input>
                <p>{timeConvertion(songInfo.Totalduration)}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon className='backward-button' icon={faAngleLeft} size='3x'></FontAwesomeIcon>
                <FontAwesomeIcon className='play-button' icon={faPlayCircle} size='3x' onClick={playSongHandler}></FontAwesomeIcon>
                <FontAwesomeIcon className='forward-button' icon={faAngleRight} size='3x'></FontAwesomeIcon>
            </div>
            <div>
                <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler} // preload the Data
                src={currentSong.audio} 
                ref={audioRef} 
                type="audio/mpeg"></audio>
            </div>
        </div>
    )
}
export default Player;