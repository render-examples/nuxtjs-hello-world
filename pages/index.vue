<template>
  <div>
    <home-hero />

    <section id="services">
      <h2>Services</h2>
    </section>

    <section id="about">
      <h2>About</h2>
    </section>
    
    <section id="contact">
      <h2>Contact</h2>
    </section>
  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero/HomeHero';

export default {
  components: {
    HomeHero
  },
  head: {
    title: 'Home page'
  },
  layout: 'default'
}
</script>
