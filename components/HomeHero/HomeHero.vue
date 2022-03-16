<template>
  <section class="c-home_hero" :data-loaded="hasLoaded ? 'true' : 'false'">
    <div class="o-wrapper  o-wrapper--h">
      <LazyHydrate when-idle>
        <Blob class="c-home_hero__blob" :blobScale="blobScale"/>
      </LazyHydrate>
      <div class="c-home_hero__copy o-grid">
        <h1 class="c-home_hero__title t-display_1  o-grid" ref="titleText" >
          <span class="c-home_hero__title--1" data-text="Creativity" v-html="title1"></span>
          <span class="c-home_hero__title--2" data-text="&amp; Code" v-html="title2"></span> 
        </h1>
        <h2 class="t-heading_5 c-home_hero__sub_title" ref="subTitle">
          Format is a design and development consultancy working with forward-thinking businesses to create engaging digital experiences.
        </h2>
        <div class="c-home_hero__micro">
          <span class="c-home_hero__loc">
            Ōtautahi CHC &bull; NZ
          </span>
          <span class="c-home_hero__temp">
            -43.546760&deg;, 172.646543&deg;
            <!-- 16&deg;C -->
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { diceCharacters } from '@/helpers/textDicer.js';
import LazyHydrate from 'vue-lazy-hydration';


export default {
  components: {
    LazyHydrate,
    Blob: () => import('./Blob.vue')
  },
  data() {
    return {
      blobScale: {
        value: 0
      },
      titleLine1: 'Creativity',
      titleLine2: '& Code',
      hasLoaded: false
    }
  },
  computed: {
    title1() {
      return diceCharacters(this.titleLine1);
    },
    title2() {
      return diceCharacters(this.titleLine2);
    }
  },
  mounted() {
    this.hasLoaded = true;
    const timeline = this.$gsap.timeline({paused: true, delay: 0.5});
    timeline.fromTo(this.blobScale, {value: 0}, {value: 1, duration: 2, ease: "circ.out"})
            .fromTo(this.$refs.titleText.querySelectorAll('.letter'), {opacity: 0, y: 20}, {opacity: 1, y: 0, stagger: 0.05, duration: 1, ease: "power4.out"}, '-=0.65')
            .fromTo(this.$refs.subTitle, {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1, ease: "power4.out"}, '-=0.6')

    // wait for the main thread before we fire off animations
    timeline.play();
  }
}
</script>

<style lang="scss" scoped>
@import './HomeHero.scss';

</style>