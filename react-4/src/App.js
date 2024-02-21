// import {Video, Thumb} from './components/Video';
import "./App.css";
import PlayButton from "./components/PlayButton.js";
import Video from "./components/Video";
import videos from "./data/data.js";

function App() {
  return (
    <div className="App" onClick = {() => console.log('App')}>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..",  video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="Play-msg" onPlay={()=>console.log('Play')} onPause ={()=>console.log('Pause')}>Play</PlayButton>*/}
      </div>
    </div>
  );
}

export default App;
