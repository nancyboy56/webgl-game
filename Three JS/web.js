import * as THREE from "three";

console.log("testing!");

//three js needs three things for each scene. 
// a render, a camera and a scene objecct

//set width and height of window
//he puts as a const but couldnt it change if you resize the screen?
w = window.innerWidth;
h= window.innerHeight;
//renderer
// making antialias true
const renderer = new new THREE.WebGLRenderer({antialias : true});
renderer.setSize(w,h);

//make it visible in html
//append canvas
document.body.appendChild(renderer.domElement);

// fov, aspect, near, far for input
//feild of view is in degrees
fov = 75;

camera = new THREE.PerspectiveCamera()
 
