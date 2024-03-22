import React from "react";
import NavBar from "../shared/NavBar";

const ARScene = () => {
  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
        renderer="antialias: true; alpha: true"
      >
        <a-camera gps-new-camera="gpsMinDistance: 5; gpsAccuracy: 500"></a-camera>
        <a-entity
          material="color: blue"
          geometry="primitive: sphere"
          gps-new-entity-place="latitude: 43.64345853120786; longitude: -79.38229042530689"
          scale="5 5 5"
        ></a-entity>
      </a-scene>
      <NavBar />
    </div>
  );
};

export default ARScene;
