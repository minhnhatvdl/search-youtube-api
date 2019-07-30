import React from "react";
// components
import SearchBar from "../SearchBar/SearchBar";
import ListVideo from "../ListVideo/ListVideo";
import VideoSelected from "../VideoSelected/VideoSelected";
// css
import "./App.css";
// api
import { youtube } from "../../APIs/youtube";
import { KEY_API } from "../../APIs/key";

class App extends React.Component {
  state = { search: "son tung mtp", listVideo: [], videoSelected: null };
  // add default search
  componentDidMount() {
    this.handleSubmit(this.state.search);
    // add event scroll
    window.addEventListener("scroll", this.handleScroll);
  }
  // handle scroll
  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      this.handleSubmit(this.state.search, this.state.listVideo.length + 5);
    }
  };
  // handle submit
  handleSubmit = async (value, maxResults = 5) => {
    const results = await youtube.get("/search", {
      params: {
        q: value,
        part: "snippet",
        type: "video",
        key: KEY_API,
        maxResults
      }
    });
    this.setState({
      listVideo: results.data.items,
      videoSelected: results.data.items[0],
      search: value
    });
  };
  // handle click video
  handleClickVideo = video => {
    this.setState({
      videoSelected: video
    });
    // scroll to top
    document.getElementById("root").scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <div className="ui container ptb-10">
        <SearchBar onSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ten wide column">
            {this.state.videoSelected && (
              <VideoSelected videoSelected={this.state.videoSelected} />
            )}
          </div>
          <div className="six wide column">
            <ListVideo
              listVideo={this.state.listVideo}
              onClick={this.handleClickVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
