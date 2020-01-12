import React from "react";
import { Synth } from "tone";

export default class CloudMusicPolySynth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isStarted: false,
      buttonText: "start"
    };

    this.handleClick = this.handleClick.bind(this);
    this.synth = new Synth().toMaster();
  }

  componentDidMount() {
      this.setState({
          isLoaded: true
      })
  }

  handleClick() {
    if(!this.state.isStarted) {
      this.synth.triggerAttack("C4");
      this.setState({
        isStarted: true,
        buttonText: "stop"
      })
    } else {
      this.synth.triggerRelease()
      this.setState({
        isStarted: false,
        buttonText: "start"
      })
    }
  }

  render() {
    return (
      <div className="startContainer">
        <button disabled={!this.state.isLoaded} onClick={this.handleClick}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}
