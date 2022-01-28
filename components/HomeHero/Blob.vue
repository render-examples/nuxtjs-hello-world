<template>
  <canvas ref="blob"></canvas> 
</template>

<script>
import { mapGetters } from 'vuex';
import * as THREE from 'three';

export default {
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    blobScale : {
      type: Object
    }
  },
  mounted() {
    const self = this;
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
    var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
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

    var update = function() {
      var time = performance.now() * 0.0005;

      var k = 2;
      for (var i = 0; i < sphere.geometry.vertices.length; i++) {
          var p = sphere.geometry.vertices[i];
          p.normalize().multiplyScalar(1 - 0.2 * noisifier.noise.perlin3(
            p.x * k + time,
            p.y * k + time,
            p.z * k + time));
      }
      sphere.geometry.computeVertexNormals();
      sphere.geometry.normalsNeedUpdate = true;
      sphere.geometry.verticesNeedUpdate = true;
    }

    function animate() {
      // sphere.rotation.x -= 0.01;
      sphere.rotation.x += self.$gsap.utils.mapRange(0, window.innerHeight, -0.02, 0.02, self.getCursorPosition.y);
      sphere.rotation.y += self.$gsap.utils.mapRange(0, window.innerWidth, -0.02, 0.02, self.getCursorPosition.x);
      sphere.scale.set(self.blobScale.value, self.blobScale.value, self.blobScale.value);

      update();
      renderer.render(scene,camera);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    window.addEventListener( 'resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }, {passive: true} );
  },
  computed : {
        ...mapGetters("app", ["getIsMobile", "getIsDesktop", "getHasHover", "getIsLoading", "getCursorPosition"]),
  }
}
</script>

<style>

</style>