import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import CaptionEditor from './CaptionEditor';
import './style.css';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState('');

  const handleUrlChange = e => {
    setVideoUrl(e.target.value);
  };

  const addCaption = (caption) => {
    setCaptions(caption);
  };

  return (
    <div className='App'>
      <h1>Video Captioning Tool</h1>
      <div>
        <label>Video URL: </label>
        <input
          type='text'
          value={videoUrl}
          onChange={handleUrlChange}
          placeholder='Enter video URL'
        />
      </div>

      <div>
        <CaptionEditor addCaption={addCaption} />
      </div>

      <div className='video-container'>
        {videoUrl && (
          <ReactPlayer
            url={videoUrl}
            controls
            width='100%'
            height="100%"
            className='react-player'
          />
        )}
      </div>

      <div className='caption-display'>
        <div className='caption-text'>
          <span>{captions}</span>
        </div>
      </div>

    </div>
  );
}
