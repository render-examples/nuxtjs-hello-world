<template>
  <div>
    <home-hero />
    <NLink to="/about">
      About Page
    </NLink>
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
