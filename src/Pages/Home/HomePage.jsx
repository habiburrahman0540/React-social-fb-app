import React from 'react'
import "./HomePage.css"
import TopBar from "../../Components/Top-bar/TopBar"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed"
import Rightbar from "../../Components/Rightbar/Rightbar"
const HomePage = () => {
    return (
        <div>
            <TopBar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    )
}

export default HomePage
