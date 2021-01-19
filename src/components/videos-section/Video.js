import React from 'react'

const Video = () => {
    return (
        <article className="video-container">
            <a href="/#" className="thumbnail" data-duration="13:20">
                <img  alt="" className = "thmbnail-img" src="http://unsplash.it/250/150?gravity=center"/>
            </a>
            <div className="video-bottom-section">
                <a href="/#">
                    <img alt="" className="channel-icon" src="http://unsplash.it/36/36?gravity=center"/>
                </a>
                <div className="video-details">
                    <a className="video-title" href="/#">Video Title</a>
                    <a className="video-channel-name" href="/#">Channel Name</a>
                    <div className="video-metada">
                        <span>12K views</span>
                        •
                        <span>1 week ago</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Video
