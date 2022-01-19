<template>
  <ul class="c-services_list">
    <li v-for="service in services" :key="service.title">
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
  }
}
</script>

<style lang="scss" scoped>
@use './ServicesList.scss';
</style>