<template>
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 47">
    <g fill="#22211E">
      <path d="M19.359.055C8.667.055 0 8.748 0 19.47v3.534h11.16v-3.534c0-4.541 3.671-8.223 8.199-8.223h26.515V.055H19.359ZM19.359 23.136C8.667 23.136 0 31.83 0 42.553v3.502h11.16v-3.502c0-4.541 3.671-8.223 8.199-8.223h26.515V23.136H19.359ZM53.079.966V.055h-4.452v.911h1.68v3.032h1.091V.966h1.68ZM56.865 3.998l1.219-2.834v2.834h1.057V.055H57.54L56.437 2.68 55.335.055H53.71v3.943h1.063V1.164l1.213 2.834h.88Z"/>
    </g>
  </svg>
</template>

<script>
export default {
  props:  {
    type: {
      type: String,
      default: 'full',
      validator: (val)=>{
        return ['full', 'logo'].includes(val);
      }
    }
  }
}
</script>