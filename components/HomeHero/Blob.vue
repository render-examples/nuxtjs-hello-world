<template>
  <canvas ref="blob"></canvas> 
</template>

<script>
import { mapGetters } from 'vuex';
// import * as THREE from 'three';
import { onLoad } from '../../helpers/onLoad';

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

    var raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerMoved = false;

    let perlin =  {
      value: 2,
      adjust: 0.2
    };


    const renderer = new THREE.WebGLRenderer({
      canvas : this.$refs.blob,
      antialias:true,
      alpha: true
    });
    // renderer.setPixelRatio(window.devicePixelRatio / 2);
    renderer.setPixelRatio(1);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0x000000,0);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 6;

    var sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
    var sphere_material = new THREE.MeshPhongMaterial(0xffffff);
    var sphere = new THREE.Mesh(sphere_geometry, sphere_material);
    sphere.name = 'blob';
    scene.add(sphere);

    const pointLight1 = new THREE.PointLight( 0xffffff, 0.5, 500, 2 );
    pointLight1.position.set( 0, 70, -40 );
    scene.add( pointLight1 );

    const pointLight2 = new THREE.PointLight( 0xffffff, 0.35, 500, 2 );
    pointLight2.position.set( 0, -50, 50 );
    scene.add( pointLight2 );

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add( ambientLight );

    var update = function() {
      var time = performance.now() * 0.0005;

      for (var i = 0; i < sphere.geometry.vertices.length; i++) {
          var p = sphere.geometry.vertices[i];
          p.normalize().multiplyScalar(1 - perlin.adjust * noisifier.noise.perlin3(
            p.x * perlin.value + time,
            p.y * perlin.value + time,
            p.z * perlin.value + time));
      }
      sphere.geometry.computeVertexNormals();
      sphere.geometry.normalsNeedUpdate = true;
      sphere.geometry.verticesNeedUpdate = true;

      if(!self.getIsMobile) {
        // Detect if the mouse is over the blob, warp the blob if true
        raycaster.setFromCamera( pointer, camera );
        const intersects = raycaster.intersectObjects( scene.children );
  
        // Move these anims to onPointerMove for better perf?
        if(intersects.length && intersects[0].object.name === 'blob' && pointerMoved) {
          self.$gsap.to(perlin, { duration: 0.35, ease: 'power1.out', adjust: 0.4, value: 2.5});
        } else {
          self.$gsap.to(perlin, { duration: 0.35, ease: 'power1.out', adjust: 0.2, value: 2});
        }
      }
    }

    function animate() {
      sphere.rotation.x += self.$gsap.utils.mapRange(0, window.innerHeight, -0.02, 0.02, self.getCursorPosition.y);
      sphere.rotation.y += self.$gsap.utils.mapRange(0, window.innerWidth, -0.02, 0.02, self.getCursorPosition.x);
      sphere.scale.set(self.blobScale.value, self.blobScale.value, self.blobScale.value);

      update();
      renderer.render(scene,camera);
      requestAnimationFrame(animate);
    }

    onLoad(()=>{
      requestAnimationFrame(animate);
    }, 1);

    window.addEventListener( 'resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }, {passive: true} );

    if(!this.getIsMobile) {
      window.addEventListener( 'pointermove', onPointerMove );
    }

    function onPointerMove( e ) {
      pointerMoved = true;
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
      pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    }
  },
  computed : {
    ...mapGetters("app", ["getIsMobile", "getIsDesktop", "getHasHover", "getIsLoading", "getCursorPosition"]),
  }
}
</script>

<style>

</style>