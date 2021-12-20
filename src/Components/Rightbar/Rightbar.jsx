import React from 'react'
import "./Rightbar.css"
const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
                <div className="birthdaySection">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className='birthdayText'><b> Pola Poster </b> and <b> 3 other friends </b> have birthday today.</span>
                </div>
                <div className="Sponsorer">
                    <img className='Sponsorer-img' src="assets/ad.png" alt="" />
                    <div className="Sponsorer-contents">
                        <span className='Sponsorer-content  '>Elite software developer wanted</span>
                        <span className='Sponsorer-link'><a href="">www.turing.com</a></span>
                    </div>
                </div>
                <hr className='sponsorerHr'/>
            </div>
        </div>
    )
}

export default Rightbar
