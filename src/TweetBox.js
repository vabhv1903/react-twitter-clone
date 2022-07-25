import React, { useState } from 'react';
import "./TweetBox.css";
import { Button } from "@mui/material";
import { Avatar } from '@mui/material';
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        // this will prevent from refreshing
        e.preventDefault();
        // this will push in the data base 
        db.collection("posts").add({
            displayName: "Vaibhav Singh",
            username: "lost1903",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "logo192.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="logo192.png" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}
export default TweetBox;