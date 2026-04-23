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
const renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(w,h);

//make it visible in html
//append canvas
document.body.appendChild(renderer.domElement);

// fov, aspect, near, far for input
//feild of view is in degrees
fov = 75;

//idk what this is
ascpet = w/h;

//how close the camer renders
near = 0.1;

// renders ten meters away
far = 10;
camera = new THREE.PerspectiveCamera(fov, ascpet, near, far);
//make camera not in the centre
camera.position.z = 2;

//made the scene!
scene = new THREE.Scene();

geo = new THREE.IcosahedronGeometry(1.0,2);
mat = new THREE.MeshBasicMaterial({color: 0xccff});
mesh = new THREE.Mesh(geo,mat);
scene.add(mesh);


renderer.render(scene, camera);
 
