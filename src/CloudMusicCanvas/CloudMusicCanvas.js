import React from "react";
import "./CloudMusicCanvas.css";
import defaultSky from "./defaultSky.jpeg";

export default class CloudMusicCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraAccess: false
    };
  }

  componentDidMount() {
    let img = this.refs.defaultImage
    let canvas = this.refs.canvas
    let context = canvas.getContext('2d')
    let dotContext = canvas.getContext('2d')
    let blackDot = dotContext.createImageData(10,10)
    
    for (let i = 0; i < blackDot.data.length; i+=4) {
      blackDot.data[i+3] = 255
    }

    img.onload = () => {
      context.drawImage(img, 0, 0);
      this.props.pixels.forEach(pixel => {
        dotContext.putImageData(blackDot, pixel.width, pixel.height);
      });
    };
  }

  runPixelReport() {
    let pixelReport = []
    // this.props.pixels.forEach(pixel =>       
      // pixelReport.push(this.context.getImageData(pixel.height, pixel.width)
      // )
    // )

    this.props.setPixelReport(pixelReport)
  }

  render() {
    return (
      <div className="Canvas">
        <canvas
          ref="canvas"
          width={this.props.width}
          height={this.props.height}
        />
        <img
          src={defaultSky}
          ref="defaultImage"
          className="hidden"
          alt="Blue Sky"
        />
      </div>
    );
  }
}
