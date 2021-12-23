import React from 'react'
import "./OnlineFriend.css"
const OnlineFriend = (props) => {
    return (
       
        <li className='friendlist-item'>
            <div className="friendlist-item__container">
                <img className='friendlist-item__img' src={props.user.profilePicture} alt="" />
                <span className='friendOnline'></span>
            </div>
            <span className='friendlist-item__name'>{props.user.username}</span>
        </li>
   
    )
}

export default OnlineFriend
