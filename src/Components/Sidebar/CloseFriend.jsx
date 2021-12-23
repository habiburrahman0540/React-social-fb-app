import React from 'react'
import "./CloseFriend.css"
const CloseFriend = (props) => {
    return (
        <li className='sidebarFriendList__item'>
        <img src={props.user.profilePicture} className='sidebarFriendList__item__img' alt="" />
        <span className='sidebarFriendList__item__name'>{props.user.username}</span>
    </li>
   
    )
}

export default CloseFriend
