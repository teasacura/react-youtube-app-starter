import React from 'react';
import VideoTile from './VideoTile'

function VideoList(props){
  return(
    <div className="six wide column">
      {props.videos && props.videos.length ? (
        props.videos.map(video => <VideoTile key={video.id.videoId} video={video} handleVideoChange={props.handleVideoChange}/>)
      ) : ("Loading...")}
    </div>
  )
}

export default VideoList;
