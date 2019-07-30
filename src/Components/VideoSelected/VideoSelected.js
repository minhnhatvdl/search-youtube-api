import React, { Fragment } from "react";
import "./VideoSelected.css";

class VideoSelected extends React.Component {
  render() {
    const { videoSelected } = this.props;
    return (
      <Fragment>
        <div className="ui embed">
          <iframe
            title="myFrame"
            src={`https://www.youtube.com/embed/${videoSelected.id.videoId}`}
          />
        </div>
        <div className="ui segment">
          <h2>{videoSelected.snippet.title}</h2>
          <p>{videoSelected.snippet.description}</p>
        </div>
      </Fragment>
    );
  }
}

export default VideoSelected;
