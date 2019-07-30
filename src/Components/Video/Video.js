import React from "react";
import "./Video.css";
import { decodeHTML } from "../../Functions/decodeHTML";

class Video extends React.Component {
  render() {
    const { video, onClick } = this.props;
    return (
      <div className="item flexRowCenter">
        <img
          alt={decodeHTML(video.snippet.description)}
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          onClick={() => onClick(video)}
        />
        <div className="content">
          <h4 className="header" onClick={() => onClick(video)}>
            {decodeHTML(video.snippet.title)}
          </h4>
          <div className="description">
            {decodeHTML(video.snippet.channelTitle)}
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
