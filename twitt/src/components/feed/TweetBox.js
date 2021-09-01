import React, {useState} from 'react'
import "./TweetBox.css"
import user from "../../img/user.jpg"
import { Avatar, Button } from '@material-ui/core'
import db from "../../firebase"

export default function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e =>{
        e.preventDefault();

        db.collection('PostF').add({
            displayName : 'Gaurav',
            username: 'programer',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: user
        });
        setTweetImage("");
        setTweetMessage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={user} />
                    <input
                        onChange={(e)=> setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter Image URL [Note:link for random url https://picsum.photos/]"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton" >TWEET</Button>
            </form>
        </div>
    )
}
