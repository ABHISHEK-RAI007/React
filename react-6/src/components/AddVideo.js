import { useState } from "react";
import "./AddVideo.css";

const intialVideoState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: ""
}

function AddVideo(AddVideos) {
  const [video, setVideo] = useState(intialVideoState);

  function handleSubmit(e) {
    e.preventDefault();
    AddVideos(video);
    setVideo(intialVideoState);
    
  }
  function handleChange(e) {
    setVideo({...video,
        [e.target.name] : e.target.value
    })
    
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}

      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
