<template>
  <div class="default_layout" :class="preload ? '-preload': ''">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
    <CustomCursor />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import CustomCursor from '@/components/CustomCursor/CustomCursor.vue';

export default {
  data(){
    return {
      preload: true
    }
  },
  components: {
    CustomCursor,
    Footer,
    Header,
  },
  mounted(){
    const canHover = window.matchMedia('(hover: hover)').matches; //true or false
    this.$store.dispatch('app/setIsMobile', !canHover)

    this.preload = false;
    const tl = new this.$gsap.timeline({delay: 0.2});
    tl.fromTo('.default_layout', {opacity: 0}, {opacity: 1, duration: 1});
  }
};
</script>

<style lang="scss" scoped>
.default_layout {
  padding-top: var(--header-height);
  &.-preload {
    visibility: hidden;
  }
}
</style>