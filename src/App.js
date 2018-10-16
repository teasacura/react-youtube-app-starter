import React, { Component } from "react";
import VideoList from './VideoList';
import VideoView from './VideoView';
import SearchBar from './SearchBar';
import obj from './keys.js';

// const key = process.env.REACT_APP_YOUTUBE_API

class App extends Component {
  state = {
    searchTerm: "news",
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.fetchVideos()
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.searchTerm !== this.state.searchTerm){
        this.fetchVideos()
      }
  }

  fetchVideos(){
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${obj.API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then(r=>r.json())
    .then(resp=> this.setState({videos: resp.items, selectedVideo: resp.items[0]}))
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm })
  }

  handleVideoChange = (selectedVideo) => {
    this.setState({ selectedVideo })
  }

  render() {
    return (
      <div className="ui grid container">
      <div className="row">
          <SearchBar handleSearch={this.handleSearch}/>
        </div>
        <div className="row">
          <VideoView video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos} handleVideoChange={this.handleVideoChange}/>
      </div>
      </div>
    );
  }
}

export default App;
