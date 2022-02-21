<template>
  <ul class="c-services_list" ref="list">
    <li v-for="service in services" :key="service.title" ref="item">
      <ServiceCard :service="service"/>
    </li>
  </ul>
</template>

<script>
import ServiceCard from './ServiceCard/ServiceCard';

export default {
  props: [
    'services'
  ],
  components: {
    ServiceCard
  },
  mounted(){

    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.list,
        start: "top bottom-=200px",
      },
    });
    
    tl.fromTo(this.$refs.item, {opacity: 0, y: 20}, {opacity: 1, y: 0, rotateX: 0, duration: 2, stagger: 0.4, ease: 'expo.out'})

  }
}
</script>

<style lang="scss" scoped>
@use './ServicesList.scss';
</style>