import React from "react";
import Button from "react-bootstrap/Button";
import "./CloudMusicHome.css";

const HomeModal = props => {
  return (
    <div className="startContainer">
      <div className="startPadding">
        <h2 className="startPadding startAlign">Cloud Music</h2>
        <p className="startPadding">
          Welcome to Cloud Music, a browser-based adapation of the <a href="https://americanart.si.edu/artwork/cloud-music-86231">classic
          multimedia installation</a> by David Behrman, Robert Watts, and Bob
          Diamond. This piece will play music based on the camera data it
          receives. It is tuned to the color values of clouds but will sound
          with any input. It will be completely static without camera data.
        </p>
        <div className="startPadding startAlign">
          <Button
            variant="outline-primary"
            onClick={() => props.dismiss(false)}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
