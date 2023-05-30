import React from 'react'
import YouTubeplay from 'react-youtube';
const options = {
    playerVars: {
      showinfo: 0,
      rel: 0
    }
  };


  export const  YoutubePlayer = (
    {video_id}
  ) => {
  return (
    <YouTubeplay
    style={{display: 'flex', justifyContent: 'center', marginTop: '3em', marginBottom: '3em'}}
    videoId={video_id}
    opts={options} 

  />  )
}
