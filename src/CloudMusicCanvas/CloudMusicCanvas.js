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
    let img = this.refs.defaultImage;
    let canvas = this.refs.canvas;
    let context = canvas.getContext('2d');
    let blackDot = context.createImageData(10,10)
    
    
    for (let i = 0; i < blackDot.data.length; i+=4) {
      blackDot.data[i] = 0
      blackDot.data[i+1] = 0
      blackDot.data[i+2] = 0
      blackDot.data[i+3] = 255
    }

    img.onload = () => {
      context.drawImage(img, 0, 0);
      this.props.pixels.forEach(pixel => {
        context.putImageData(blackDot, pixel.width, pixel.height);
      });
    };
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
