import React from 'react';

function VideoTile(props){
  let {description, thumbnails, title} = props.video.snippet
  return(
    <div onClick={() => props.handleVideoChange(props.video)}>
      <img src={thumbnails.medium.url} alt={title}/>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default VideoTile;
