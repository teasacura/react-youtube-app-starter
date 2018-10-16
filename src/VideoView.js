import React from 'react';



function VideoView({ video }){
  if (!video) {
    return <div>Loading...</div>
  } else {
    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
      <div className="ten wide column">
        <div className="ui embed" >
          <iframe src={embedUrl} title={video.id.videoId}/>
        </div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    )
  }
}

export default VideoView;
