import axios from "axios";
import { Component } from "react";
import Searchbar from "./Components/Searchbar";
// import YouTube from "./Components/YouTube";
import VideoList from "./Components/VideoList";
import VideoDetails from "./Components/VideoDetails";


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSubmit = async (keywordSearch) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: keywordSearch,
        key: "AIzaSyDvQsvH6JjEOuSjtAvP2TdLt1DW4y4uBIU"
      }
    })
    this.setState({
      videos: response.data.items
    })
  };

  handleSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render(){
    return (
      <div>
        <Searchbar handleSubmit = {this.handleSubmit}/>
        <div>
          <div>
            <VideoDetails />
          </div>
          <div>
            <VideoList />
          </div>
        </div>
      </div>
    )
  }
}

export default App;