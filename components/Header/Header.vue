<template>
  <header class="c-header">
    <div class="o-wrapper o-wrapper--h o-grid">
      <div class="c-header__logo">
        <Logo type="logo"/>
      </div>

      <nav class="c-header__nav">
        <ul class="c-header__nav_list">
          <li class="c-header__nav_item">
            <a class="c-header__nav_link" href="#services">Services</a>
          </li>
          <li class="c-header__nav_item">
            <a class="c-header__nav_link" href="#about">About</a>
          </li>
          <li class="c-header__nav_item">
            <a class="c-header__nav_link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue';

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>