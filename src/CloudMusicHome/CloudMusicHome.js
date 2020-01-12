import React from "react";
import "./CloudMusicHome.css";
import CloudMusicPolySynth from "../CloudMusicPolySynth/CloudMusicPolySynth";
import CloudMusicCanvas from "../CloudMusicCanvas/CloudMusicCanvas";

export default class CloudMusicHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      height: window.innerHeight,
      width: window.innerWidth,
      pixels: []
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
    this.setDotList();
  }

  //   getPixelReport() {
  //       let pixelReport = []
  //       this.state.pixels.forEach(pixel =>
  //           pixelReport.push(this.reportHelper(pixel))
  //       )

  //       return getPixelReport
  //   }

  //   reportHelper(pixel) {

  //     let rgbStatus = {r: 100, g: 100, b: 100}

  //     return(rgbStatus)
  //   }

  setDotList() {
    let tempPixelList = [];

    for (let i = 0; i < 6; i++) {
      tempPixelList.push({
        width: Math.floor(Math.random() * this.state.width),
        height: Math.floor(Math.random() * this.state.height)
      });
    }

    console.log(tempPixelList);

    this.setState({
      pixels: tempPixelList
    });
  }

  render() {
    return (
        <div className="Home">
            <CloudMusicCanvas height={this.state.height} width={this.state.width} pixels={this.state.pixels} />
            <CloudMusicPolySynth />
        </div>
    )
  }
}
