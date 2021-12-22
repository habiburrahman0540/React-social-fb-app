import React from 'react'
import "./Rightbar.css"
import {MoreHoriz} from "@material-ui/icons"
import OnlineFiend from './OnlineFriend'
const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
                <div className="birthdaySection">
                    <div className="birthday">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className='birthdayTitle'>Birthdays</span>
                    </div>
                    <span className='birthdayText'><b> Pola Poster </b> and <b> 3 other friends </b> have birthday today.</span>
                </div>
                <hr className='sponsorerHr'/> 
                <span className='sponsorerTitle'>Sponsored</span>
                <div className="Sponsorer">
                    <img className='Sponsorer-img' src="assets/ad.png" alt="" />
                    <div className="Sponsorer-contents">
                        <span className='Sponsorer-content  '>Elite software developer wanted</span>
                        <span className='Sponsorer-link'><a href="">www.turing.com</a></span>
                    </div>
                </div>
                <hr className='sponsorerHr'/>
                <div className="contacts">
                    <span className='contact__left'>Contacts</span>
                    <div className="contact__right">
                     <MoreHoriz className='contact__right__more'/>
                    </div>
                </div>
                <ul className='friendlist'>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    <OnlineFiend/>
                    </ul>
                    
            </div>
        </div>
    )
}

export default Rightbar
