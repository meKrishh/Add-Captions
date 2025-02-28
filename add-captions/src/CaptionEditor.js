import React, { useState } from "react";

function CaptionEditor({ addCaption }) {
  const [caption, setCaption] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleCaptionChange = (e) => setCaption(e.target.value);
  const handleStartTimeChange = (e) => setStartTime(e.target.value);
  const handleEndTimeChange = (e) => setEndTime(e.target.value);

  const handleAddCaption = () => {
    if (caption && startTime && endTime) {
      addCaption(caption, startTime, endTime);
      setCaption("");
      setStartTime(""); 
      setEndTime(""); 
    }
  };

  return (
    <div>
      <div>
        <label>Caption: </label>
        <input
          type="text"
          value={caption}
          onChange={handleCaptionChange}
          placeholder="Enter caption"
        />
      </div>
      <div>
        <label>Start Time (in seconds): </label>
        <input
          type="number"
          value={startTime}
          onChange={handleStartTimeChange}
          placeholder="Start time"
        />
      </div>
      <div>
        <label>End Time (in seconds): </label>
        <input
          type="number"
          value={endTime}
          onChange={handleEndTimeChange}
          placeholder="End time"
        />
      </div>
      <button onClick={handleAddCaption}>Add Caption</button>
    </div>
  );
}

export default CaptionEditor;
