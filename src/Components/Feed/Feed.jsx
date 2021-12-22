import React from 'react'
import "./Feed.css"
import Share from "./Share"
import Post from "./Post"
import {Posts} from "../../dummyData"
const Feed = () => {
   
    return (
        <div className='feed'>
            <div className="feedWrapper">
               <Share/>

               {Posts.map(x=>(
                    <Post key={x.id} post= {x}/>
               ))}
               
               
            </div>
        </div>
    )
}

export default Feed
