//Variables for setup

let container;
let camera;
let renderer;
let scene;
let model;



function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
    })

    renderer.render(scene, camera);
}

init();