<template>
  <article class="c-service_card">
    <h3 class="c-service_card__title">{{service.title}}</h3>
    <img :src="require(`@/assets/img/service-icons/${service.icon}`)" :alt="`${service.title} Icon`"  class="c-service_card__icon">
    <div class="c-service_card__description  t-richtext" v-html="service.description"></div>
  </article>
</template>

<script>

export default {
  props: [
    'service'
  ],
  computed: {
    icon(){
      return require(`@/assets/img/service-icons/${this.service.icon}`);
    }
  }
}
</script>

<style lang="scss" scoped>
@use './ServiceCard.scss';
</style>