<template>
  <div class="default_layout">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.default_layout {
  padding-top: var(--header-height);
}
</style>