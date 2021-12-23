import React from 'react'
import "./Feed.css"
import Share from "./Share"
import Post from "./Post"
import {Posts} from "../../dummyData"
import Card from "../UID/Card"

const Feed = () => {
   
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Card>
                    <Share/>
                </Card>
               
                    {Posts.map(x=>(
                        <Card>
                            <Post key={x.id} post= {x}/>
                        </Card>
                    ))}
               
             
               
               
            </div>
        </div>
    )
}

export default Feed
