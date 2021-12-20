import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import "./Post.css"
const Post = () => {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="post-top">
                    <div className="post-top__left">
                        <img className='post-top__left__img' src="/assets/person/1.jpeg" alt="" />
                        <span className='post-top__left__name'>Jo annay</span>
                        <span className='post-top__left__time'>a few minutes ago.</span>
                    </div>
                    <div className="post-top__right">
                        <MoreHoriz className='post-top__right__more'/>
                    </div>
                </div>
                <div className="post-center">
                    <span className='post-center__text'>Hi, this is my first post :)</span>
                    <img className='post-center__img' src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom__left">
                        <img className='likeIcon' src="assets/like.png" alt="" />
                        <img className='likeIcon' src="assets/heart.png" alt="" />
                        <span className='likeCounter'>32 like</span>
                    </div>
                    <div className="post-bottom__right">
                        <span className='post-comments'>30 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
