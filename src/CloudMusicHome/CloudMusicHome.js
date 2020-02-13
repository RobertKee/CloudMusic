import React, { useState } from "react";
import "./CloudMusicHome.css";
// import HomeModal from "./HomeModal";

// import CloudMusicPolySynth from "../CloudMusicPolySynth/CloudMusicPolySynth";
import CloudMusicCanvas from "../CloudMusicCanvas/CloudMusicCanvas";

const CloudMusicHome = () => {
  // const [awaitingUser, updateWaitingStatus] = useState(true);

  return (
    <div className="Home">
      <CloudMusicCanvas />
      {/* <CloudMusicPolySynth /> */}      
      {/* <HomeModal dismiss={updateWaitingStatus} /> */}
    </div>
  );
};

export default CloudMusicHome;
