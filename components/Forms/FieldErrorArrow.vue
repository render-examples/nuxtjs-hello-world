<template>
  <svg class="el" :class="mr ? '-mr' : ''" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7.5" fill="var(--warning)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65685 3.29289C7.04738 2.90237 7.68054 2.90237 8.07107 3.29289L11.435 6.65685C11.8256 7.04738 11.8256 7.68054 11.435 8.07107C11.0445 8.46159 10.4113 8.46159 10.0208 8.07107L8.36396 6.41421V11C8.36396 11.5523 7.91625 12 7.36396 12C6.81168 12 6.36396 11.5523 6.36396 11V6.41421L4.70711 8.07107C4.31658 8.46159 3.68342 8.46159 3.29289 8.07107C2.90237 7.68054 2.90237 7.04738 3.29289 6.65685L6.65685 3.29289Z" fill="white"/>
  </svg>
</template>

<script>
export default {
  props: {
    mr: {
      type: Boolean
    }
  } 
}
</script>


<style scoped lang="scss">
.el {
  display: inline-flex;
  vertical-align: middle;
  transform: translateY(-10%);

  &.-mr {
    margin-right: 0.5em;
  }
}
</style>