import React from 'react'
import Topbar from "../../Components/Top-bar/TopBar"
import "./ProfilePage.css"
import Card from "../../Components/UID/Card"
import Share from '../../Components/Feed/Share'
import {Posts} from "../../dummyData"
import Post from "../../Components/Feed/Post"
import {RssFeed} from "@material-ui/icons"
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const ProfilePage = () => {
    return (
        <div>
            <Topbar/>
            <div className="fullwidth">
                <div className="coverSection">
                    <div className="coverPhotos">
                        <img className='coverPhoto' src="assets/post/2.jpeg" alt="" />
                        <div className="profile">
                        <img className='profilePhoto' src="assets/person/1.jpeg" alt="" />
                        <div className="profileContent">
                            <span className='profileName'>Habibur Rahman</span>
                            <span className='countFriend'>1.4k friends</span>
                        </div>
                    </div>
                    </div>
                   
              
                </div>
                <hr className='profileHr'/>
            </div>
        
            <div className="profile-menu">
                            <div className="menu">
                        <ul className='profile-menu__items'>
                            <li className='profile-menu__item'><a className='menu-item__link' href="">Posts</a></li>
                            <li className='profile-menu__item'><a className='menu-item__link' href="">About</a></li>
                            <li className='profile-menu__item'><a className='menu-item__link' href="">Friends</a></li>
                            <li className='profile-menu__item'><a className='menu-item__link' href="">Photos</a></li>
                            <li className='profile-menu__item'><a className='menu-item__link' href="">Videos</a></li>
                        </ul>
                        </div>
            </div>
            <div className="profile-content">
                <div className="content">
                   <div className="profile-left">
                       <Card className="vcard">
                           <span>Intro</span>
                           <ul className="sidebarList">
                                 <li className='sidebarList__item'>
                                    <HomeIcon className='sidebarIcon'/>
                                    <span className='sidebarList__item__text'>Lives in Chandpur, Chittagong, Bangladesh</span>
                                </li>
                                <li className='sidebarList__item'>
                                    <AccessTimeIcon className='sidebarIcon'/>
                                    <span className='sidebarList__item__text'>Joined April 2010</span>
                                </li>
                                <li className='sidebarList__item'>
                                    <RssFeed className='sidebarIcon'/>
                                    <span className='sidebarList__item__text'>Followed by 203 people</span>
                                </li>
                </ul>
                       </Card>
                   </div>
                   <div className="profile-right">
                        <Card className="vcard">
                        <Share/>
                        </Card>
                        <div className="profile-feed">
                        {Posts.map(x=>(
                        <Card className="vcard">
                            <Post key={x.id} post= {x}/>
                        </Card>
                    ))}
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage
