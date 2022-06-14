/*import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = THREE.PerspectiveCamera( 75, window.innderWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

const geometry = new THREE.TorusGeometry( 10,3 ,16,100 )
const material = new MeshBasicMaterial
const torus = new THREE.Mesh( geometry, material);

scene.add(torus)

function animate() {
  requestAnimationFreame( animate );
  renderer.render( scene, camera)
}

animate()

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scence, camera);

function addStar() {
  const geometry = newTHREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial( { color: 0xfffff})
  const star = new THREE.Mesh( geometry, material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100));

  star.position.set(x,y,z);
  scene.add(star)
}
scene.add(star)

Array(200).fill().forEach(addStar) */

