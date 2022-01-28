<template>
  <div class="default_layout">
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
  components: {
    CustomCursor,
    Footer,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.default_layout {
  padding-top: var(--header-height);
}
</style>