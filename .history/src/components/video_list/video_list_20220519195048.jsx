import React from 'react';
import VideoItem from '../video_item/video_item';

const Video_list = (props) => (
    <ul>
        {props.videos.map(video => (
            <VideoItem video={video} />
        ))}
    </ul>
);

export default Video_list;