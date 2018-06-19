import React, { Component } from "react";
import VideoPlayerLayout from "../component/video-player-layout";
import Video from "../component/video";
import Title from '../component/title';
import PlayPause from '../component/play-pause';
import Timer from '../component/timer';
import VideoPlayerControls from '../component/video-player-controls';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
  }
  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Esto es un video chido!"
        />
        <VideoPlayerControls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer duration={this.state.duration}/>
        </VideoPlayerControls>
        <Video 
          handleLoadedMetadata={this.handleLoadedMetadata}
          pause={this.state.pause}
          autoPlay={this.props.autoPlay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
