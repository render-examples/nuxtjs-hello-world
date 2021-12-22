<template>
  <section class="o-wrapper  o-wrapper--h">
    <div class="c-home_hero" ref="homeHero">
      <Blob class="c-home_hero__blob" />
      <div class="c-home_hero__micro">
        <span class="c-home_hero__loc">
          CHC &bull; NZ / -43.546760,  172.646543
        </span>
        <span class="c-home_hero__temp">
          16&deg;C
        </span>
      </div>
      <div class="c-home_hero__copy">
        <h1 class="c-home_hero__title t-display_1  o-grid">
          <span class="c-home_hero__title--1">Creativity</span>
          <span class="c-home_hero__title--2">&amp; Code</span> 
        </h1>
        <div class="o-grid">
          <h2 class="t-heading_5 c-home_hero__sub_title">
            Format&trade; is a digital design and development consultancy working with forward-thinking businesses to create engaging experiences.</h2>
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
  }
}
</script>

<style lang="scss" scoped>
@import './HomeHero.scss';

</style>