<template>
  <section class="c-home_hero" :data-loaded="hasLoaded ? 'true' : 'false'">
    <div class="o-wrapper  o-wrapper--h">
      <Blob class="c-home_hero__blob" :blobScale="blobScale"/>
      <div class="c-home_hero__copy o-grid">
        <h1 class="c-home_hero__title t-display_1  o-grid">
          <span class="c-home_hero__title--1" ref="title1">Creativity</span>
          <span class="c-home_hero__title--2" ref="title2">&amp; Code</span> 
        </h1>
          <h2 class="t-heading_5 c-home_hero__sub_title">
            Format is a digital design and development consultancy working with forward-thinking businesses to create engaging experiences.</h2>
        <div class="c-home_hero__micro">
          <span class="c-home_hero__loc">
            Ōtautahi CHC &bull; NZ / -43.546760&deg;, 172.646543&deg;
          </span>
          <span class="c-home_hero__temp">
            16&deg;C
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Blob from './Blob.vue';

export default {
  components: {
    Blob
  },
  data() {
    return {
      blobScale: {
        value: 0
      },
      hasLoaded: false
    }
  },
  mounted() {
    this.hasLoaded = true;
    const timeline = this.$gsap.timeline({paused: true, delay: 1});

    timeline.fromTo(this.blobScale, {value: 0}, {value: 1, duration: 2, ease: "circ.out"})
            .fromTo(this.$refs.title1, {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 2, ease: "power4.out"})
            .fromTo(this.$refs.title2, {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 2, ease: "power4.out"}, '-=1');

    timeline.play();
  }
}
</script>

<style lang="scss" scoped>
@import './HomeHero.scss';

</style>