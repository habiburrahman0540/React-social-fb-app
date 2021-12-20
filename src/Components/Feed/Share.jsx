import React from 'react'
import "./Share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"
const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="share-top">
                    <img className='share-top__profile__img' src="/assets/person/1.jpeg" alt="" />
                    <input className='share-top__input' type="text" placeholder="What's in your mind safak ?" />
                </div>
                <hr className='share-hr' />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia htmlColor='tomato' className='share-option__media'/>
                            <span className='share-option__text'>Photo or Video</span>
                        </div>
                        <div className="share-option">
                            <Label htmlColor='blue' className='share-option__media'/>
                            <span className='share-option__text'>Tag</span>
                        </div>
                        <div className="share-option">
                            <Room htmlColor='green' className='share-option__media'/>
                            <span className='share-option__text'>Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions htmlColor='goldenrod' className='share-option__media'/>
                            <span className='share-option__text'>Feeling</span>
                        </div>
                    </div>
                    <button className='share-button'>share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
