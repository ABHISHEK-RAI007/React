// import {Video, Thumb} from './components/Video';
import './App.css';
import Video from './components/Video';
import videos from './data/data.js'

function App() {
 

  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(video =><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id = {video.id}
        ></Video>)
      }
      
    </div>
  );
}

export default App;