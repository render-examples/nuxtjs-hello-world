<template>
  <canvas ref="blob"></canvas> 
</template>

<script>
import * as THREE from 'three';

export default {
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  mounted() {
    const noisifier = require('@/helpers/perlin.js');

    const renderer = new THREE.WebGLRenderer({
      canvas : this.$refs.blob,
      antialias:true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0x000000,0);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    var sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
    var sphere_material = new THREE.MeshPhongMaterial(0xffffff);
    var sphere = new THREE.Mesh(sphere_geometry, sphere_material);
    scene.add(sphere);

    const pointLight1 = new THREE.PointLight( 0xffffff, 0.5, 1000, 2 );
    pointLight1.position.set( 0, 70, -40 );
    scene.add( pointLight1 );

    const pointLight2 = new THREE.PointLight( 0xffffff, 0.35, 500, 2 );
    pointLight2.position.set( 0, -50, 50 );
    scene.add( pointLight2 );

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add( ambientLight );



    // const positionAttribute = sphere.geometry.getAttribute( 'position' );
    // const sphereVertex = new THREE.Vector3();

    var update = function() {

      // change '0.003' for more aggressive animation
      var time = performance.now() * 0.0006;
      //console.log(time)

      //go through vertices here and reposition them
      
      // change 'k' value for more spikes

      var k = 2;
      for (var i = 0; i < sphere.geometry.vertices.length; i++) {
          var p = sphere.geometry.vertices[i];
          p.normalize().multiplyScalar(1 - 0.2 * noisifier.noise.perlin3(p.x * k  + time, p.y * k  + time, p.z * k  + time * -1));
      }
      sphere.geometry.computeVertexNormals();
      sphere.geometry.normalsNeedUpdate = true;
      sphere.geometry.verticesNeedUpdate = true;
    }

    function animate() {
      sphere.rotation.x -= 0.01;
      // sphere.rotation.y += 0.005;

      update();
      /* render scene and camera */
      renderer.render(scene,camera);
      requestAnimationFrame(animate);
    }


    requestAnimationFrame(animate);

  }
}
</script>

<style>

</style>