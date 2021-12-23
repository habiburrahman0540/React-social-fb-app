import { MoreHoriz } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Post.css"
import {Users} from "../../dummyData"
import  Card from '../UID/Card'
const Post = (props) => {
    let user = Users.filter(x=> x.id === props.post.userId);
    const [like,setLike] = useState(props.post.like);
    const [isLike,setIsLike] = useState(false)
    const likeHandle = ()=>{
        setLike(isLike ? like-1 : like+1)
        setIsLike(!isLike)
    }
    return (
        
            <div className="postWrapper">
                <div className="post-top">
                    <div className="post-top__left">
                        <img className='post-top__left__img' src={user[0].profilePicture} alt="" />
                        <span className='post-top__left__name'>{user[0].username}</span>
                        <span className='post-top__left__time'>{props.post.date}</span>
                    </div>
                    <div className="post-top__right">
                        <MoreHoriz className='post-top__right__more'/>
                    </div>
                </div>
                <div className="post-center">
                    <span className='post-center__text'>{props.post?.desc}</span>
                    <img className='post-center__img' src={props.post.photo} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom__left">
                        <img className='likeIcon' src="assets/like.png" onClick={likeHandle} alt="" />
                        <img className='likeIcon' src="assets/heart.png" onClick={likeHandle} alt="" />
                        <span className='likeCounter'>{like}</span>
                    </div>
                    <div className="post-bottom__right">
                        <span className='post-comments'>
                        {props.post.comment === 0 ? "No comment" : props.post.comment === 1 ? `${props.post.comment} Comment` : `${props.post.comment} Comments`}
                        
                        </span>
                    </div>
                </div>
            </div>
       
    )
}

export default Post
