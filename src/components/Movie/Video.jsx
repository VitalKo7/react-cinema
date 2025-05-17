import React from 'react';
import titanic from '@assets/videos/Titanic-1997-Trailer.mp4';

const Video = () => {
  return (
    <>
      <div className="video-wrapper">
        <video controls>
          <source src={titanic} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Video;
