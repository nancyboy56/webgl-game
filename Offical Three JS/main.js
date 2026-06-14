import * as THREE from 'three';
//idk why my old code was not working

// this is for displaying errors on the webpage
window.onerror = function (message, source, lineno, colno, error) {
    const display = document.getElementById('error-display');
    display.style.display = 'block';
    display.innerHTML = `<strong>Error:</strong> ${message} <br> 
                      <strong>File:</strong> ${source} <br> 
                      <strong>Line:</strong> ${lineno}`;
    return false; // Prevents the error from showing in the console
};

function main() {
    const scene = new THREE.Scene();
    // should i keep them all as const?
    // i feel like fov couldn change but ill leave for now
    const fov = 75;

    //ascept ratio
    const aspect = window.innerWidth / window.innerHeight;

    // other values can get you better performace
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // so not inthe middle of an object
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();

    // if you want to render at a lower resolution but keep the same siz in the browser
    //renderer.setSize(window.innerWidth/2, window.innerHeight/2, false)
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const size = 1;
    const box = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(box, material);

    const c = add_cube();

    scene.add(c);

    //const text = new CSS2DRenderer();


    // im not sure how to make it take in a parameter
    // const animate = function () {
    //     requestAnimationFrame(animate);

    //     c.rotation.x += 0.01;
    //     c.rotation.y += 0.01;

    //     renderer.render(scene, camera);
    // };

    // animate();

    // oh i forgot this in my other code

    function animate(time) {
        c.rotation.x = time / 2000;
        cube.rotation.y = time / 1000;
        renderer.render(scene, camera);
    }



    renderer.setAnimationLoop(animate);
    //renderer.render(scene, camera);
}

function add_cube() {
    const size = 1;
    const box = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(box, material);
    return cube;

}

main();

