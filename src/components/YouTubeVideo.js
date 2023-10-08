// YouTubeVideo.js
import React from 'react';

function YouTubeVideo() {
    const videoUrl = 'https://www.youtube.com/embed/msiEYm28OHs';

    return (
        <div className="youtube-video">
            <iframe
                width="300"
                height="200"
                src={videoUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubeVideo;
