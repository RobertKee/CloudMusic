import React from "react";
import { Synth } from "tone";

export default class CloudMusicPolySynth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
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
    this.synth.triggerAttackRelease("C4", "8n");
  }

  render() {
    return (
      <div className="startContainer">
        <button disabled={!this.state.isLoaded} onClick={this.handleClick}>
          start
        </button>
      </div>
    );
  }
}
