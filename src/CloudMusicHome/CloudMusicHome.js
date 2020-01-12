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
      pixels: [],
      pixelReport: []
    };
    this.getPixelReport = this.getPixelReport.bind(this)
    this.setPixelReport = this.setPixelReport.bind(this)

  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
    this.setDotList();
  }

    getPixelReport() {
      CloudMusicCanvas.getPixelReport()
      return this.state.pixelReport
    }

    setPixelReport(pixelUpdate) {
      console.log('pixel update: ', pixelUpdate)
      this.setState({
        pixelReport: pixelUpdate
      })
    }

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
            <CloudMusicCanvas height={this.state.height} width={this.state.width} pixels={this.state.pixels} setPixelReport={this.setPixelReport} />
            <CloudMusicPolySynth getPixelReport={this.getPixelReport} />
        </div>
    )
  }
}
