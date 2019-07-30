import React from "react";
import Video from "../Video/Video";

class ListVideo extends React.Component {
  render() {
    const { listVideo, onClick } = this.props;
    return (
      <div className="ui relaxed divided list">
        {listVideo.map(video => (
          <Video key={video.id.videoId} video={video} onClick={onClick} />
        ))}
      </div>
    );
  }
}

export default ListVideo;
