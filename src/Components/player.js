import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons'
import '../Style/player.css'

function Player() {
    return (
        <div className='player'>
            <div className='time-control'>
                <p>Start Time</p>
                <input type="range"></input>
                <p>End Time</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon className='backward-button' icon={faAngleLeft} size='3x'></FontAwesomeIcon>
                <FontAwesomeIcon className='play-button' icon={faPlayCircle} size='3x'></FontAwesomeIcon>
                <FontAwesomeIcon className='forward-button' icon={faAngleRight} size='3x'></FontAwesomeIcon>
            </div>
        </div>
    )
}
export default Player;