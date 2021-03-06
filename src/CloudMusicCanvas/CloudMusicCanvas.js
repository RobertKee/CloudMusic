import React, { useEffect } from "react";
import "./CloudMusicCanvas.css";
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial
} from "three";

let pixels = []

const getPixels = () => {
  for (let i = 0; i < 6; i++) {
    pixels.push({
      width: Math.floor(Math.random() * window.innerWidth),
      height: Math.floor(Math.random() * window.innerHeight)
    });
  }
};

// for (let i = 0; i < blackDot.data.length; i+=4) {
// blackDot.data[i+3] = 255
// }

const CloudMusicCanvas = props => {
  useEffect(() => {
    getPixels();
    
    import { OrbitControls } from './jsm/controls/OrbitControls.js';

    var camera, scene, renderer, video;

    init();
    animate();

    function init() {

      camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
      camera.position.z = 0.01;

      scene = new THREE.Scene();

      video = document.getElementById( 'video' );

      var texture = new THREE.VideoTexture( video );

      var geometry = new THREE.PlaneBufferGeometry( 16, 9 );
      geometry.scale( 0.5, 0.5, 0.5 );
      var material = new THREE.MeshBasicMaterial( { map: texture } );

      var count = 128;
      var radius = 32;

      for ( var i = 1, l = count; i <= l; i ++ ) {

        var phi = Math.acos( - 1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var mesh = new THREE.Mesh( geometry, material );
        mesh.position.setFromSphericalCoords( radius, phi, theta );
        mesh.lookAt( camera.position );
        scene.add( mesh );

      }

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      var controls = new OrbitControls( camera, renderer.domElement );
      controls.enableZoom = false;
      controls.enablePan = false;

      window.addEventListener( 'resize', onWindowResize, false );

      //

      if ( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ) {

        var constraints = { video: { width: 1280, height: 720, facingMode: 'user' } };

        navigator.mediaDevices.getUserMedia( constraints ).then( function ( stream ) {

          // apply the stream to the video element used in the texture

          video.srcObject = stream;
          video.play();

        } ).catch( function ( error ) {

          console.error( 'Unable to access the camera/webcam.', error );

        } );

      } else {

        console.error( 'MediaDevices interface not available.' );

      }

    }

    function onWindowResize() {

       camera.aspect = window.innerWidth / window.innerHeight;
       camera.updateProjectionMatrix();

       renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

       requestAnimationFrame( animate );
       renderer.render( scene, camera );

    }
  });

  return (
    <div className="canvasContainer">
      <canvas
        className="canvas"
        height={window.innerHeight}
        width={window.innerWidth}>
        </canvas>
    </div>
  );
};

export default CloudMusicCanvas;
