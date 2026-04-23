import * as THREE from "three";

window.onerror = function(message, source, lineno, colno, error) {
  const display = document.getElementById('error-display');
  display.style.display = 'block';
  display.innerHTML = `<strong>Error:</strong> ${message} <br> 
                      <strong>File:</strong> ${source} <br> 
                      <strong>Line:</strong> ${lineno}`;
  return false; // Prevents the error from showing in the console
};


console.log("testing!");

//three js needs three things for each scene. 
// a render, a camera and a scene objecct

//set width and height of window
//he puts as a const but couldnt it change if you resize the screen?
let w = window.innerWidth;
let h = window.innerHeight;
//renderer
// making antialias true
const renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(w,h);

//make it visible in html
//append canvas
document.body.appendChild(renderer.domElement);

// fov, aspect, near, far for input
//feild of view is in degrees
let fov = 75;

//idk what this is
let ascpet = w/h;

//how close the camer renders
let near = 0.1;

// renders ten meters away
let far = 10;
let camera = new THREE.PerspectiveCamera(fov, ascpet, near, far);
//make camera not in the centre
camera.position.z = 2;

//made the scene!
let scene = new THREE.Scene();

//making geometry
let geo = new THREE.IcosahedronGeometry(1.0,2);

//this is unlit material
let mat = new THREE.MeshBasicMaterial({color: 0xccff});

//container for both geomrty and material
let mesh = new THREE.Mesh(geo,mat);
scene.add(mesh);


function animate(t=0){

  //everytime animation frame is called its passing in
  // a time difference each time
  requestAnimationFrame(animate);

  //cosing the size of the shape, 
  //looks like its zooming in and out
  mesh.scale.setScalar(Math.cos(t*0.001)+1.0)
  renderer.render(scene, camera);
}
 animate();
