import React from 'react'
import "./TopBar.css"
import {Search,Person, Chat,Notifications} from "@material-ui/icons"
import { Link } from 'react-router-dom'
const TopBar = () => {
    return (
        <>        
        <div className='topbar-container'>
           <div className="topbar-left">
               <span className='logo'>Facebook</span>
           </div>
           <div className="topbar-center">
               <div className="searchbar">
                   <Search className='searchIcon'/>
                   <input className='searchInput' placeholder='Search friend , post , videos' />
               </div>
           </div>
           <div className="topbar-right">
               <div className="topbar-links">
               <Link to="/"> <span className='topbarLink'>Home page  </span></Link>
               <Link to="/profile"> <span className='topbarLink'>Time Line  </span></Link>
               </div>
               <div className="topbar-icons">
                   <div className="topbarIconItem">
                       <Person/>
                       <span className='topbarIconBadge'>1</span>
                   </div>
                   <div className="topbarIconItem">
                       <Chat/>
                       <span className='topbarIconBadge'>2</span>
                   </div>
                   <div className="topbarIconItem">
                       <Notifications/>
                       <span className='topbarIconBadge'>3</span>
                   </div>
               </div>
               <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
           </div>
           
        </div>
        <hr className='topHr'/>
        </>

    )
}

export default TopBar
