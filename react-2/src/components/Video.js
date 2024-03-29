import "./Video.css";
function Video({ title, channel="Coder Dost", views, time }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </div>

        <div className="title"> {title}</div>
        <div className="channel"> {channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

// function Thumb() {
//   return <div>Thumb</div>;
// }
// export { Video, Thumb };

export default Video;
