import React from 'react'
import "./Sidebar.css"
import {RssFeed,Chat,VideoLabel,Group,Bookmark,HelpOutline, WorkOutline,Event, School} from "@material-ui/icons"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                        <li className='sidebarList__item'>
                            <RssFeed className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Feed</span>
                        </li>
                     
                        <li className='sidebarList__item'>
                            <Chat className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Feed</span>
                        </li>
                        <li className='sidebarList__item'>
                            <VideoLabel className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Feed</span>
                        </li>
                        <li className='sidebarList__item'>
                            <WorkOutline className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>jobs</span>
                        </li>
                        <li className='sidebarList__item'>
                            <Event className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Events</span>
                        </li>
                        <li className='sidebarList__item'>
                            <School className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Course</span>
                        </li>
                        <li className='sidebarList__item'>
                            <School className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Course</span>
                        </li>
                        <li className='sidebarList__item'>
                            <School className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Course</span>
                        </li>
                        <li className='sidebarList__item'>
                            <School className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Course</span>
                        </li>
                        <li className='sidebarList__item'>
                            <School className='sidebarIcon'/>
                            <span className='sidebarList__item__text'>Course</span>
                        </li>
                </ul>
                <div className="seemore">
                <KeyboardArrowDownIcon  className='seemoreIcon'/>
                <span className='seemoreText'>See more</span>
                </div>
                <hr  className='sidebarHr'/>
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriendList__item'>
                        <img src="/assets/person/2.jpeg" className='sidebarFriendList__item__img' alt="" />
                        <span className='sidebarFriendList__item__name'>Jon deo</span>
                    </li>
                    <li className='sidebarFriendList__item'>
                        <img src="/assets/person/2.jpeg" className='sidebarFriendList__item__img' alt="" />
                        <span className='sidebarFriendList__item__name'>Jon deo</span>
                    </li>
                    <li className='sidebarFriendList__item'>
                        <img src="/assets/person/2.jpeg" className='sidebarFriendList__item__img' alt="" />
                        <span className='sidebarFriendList__item__name'>Jon deo</span>
                    </li>
                    <li className='sidebarFriendList__item'>
                        <img src="/assets/person/2.jpeg" className='sidebarFriendList__item__img' alt="" />
                        <span className='sidebarFriendList__item__name'>Jon deo</span>
                    </li>
                    <li className='sidebarFriendList__item'>
                        <img src="/assets/person/2.jpeg" className='sidebarFriendList__item__img' alt="" />
                        <span className='sidebarFriendList__item__name'>Jon deo</span>
                    </li>
                    <li className='sidebarFriendList__item'>
                        <img src="/assets/person/2.jpeg" className='sidebarFriendList__item__img' alt="" />
                        <span className='sidebarFriendList__item__name'>Jon deo</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
