import React from 'react'
import "./OnlineFriend.css"
const OnlineFriend = () => {
    return (
       
        <li className='friendlist-item'>
            <div className="friendlist-item__container">
                <img className='friendlist-item__img' src="assets/person/3.jpeg" alt="" />
                <span className='friendOnline'></span>
            </div>
            <span className='friendlist-item__name'>Js raan</span>
        </li>
   
    )
}

export default OnlineFriend
