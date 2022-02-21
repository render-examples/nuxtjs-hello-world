<template>
  <form name="contact" action="https://usebasin.com/f/1a2b3c4d5e6f" method="POST" autocomplete>
    <div class="c-form__row  u-mb_4">
      <label for="#contact-name">Name</label>
      <input type="text" class="--large" v-model="name" name="name" id="contact-name" placeholder="Your name" autocomplete="name">
    </div>
    <div class="c-form__row  u-mb_4">
      <label for="#contact-email">Email</label>
      <input type="email" class="--large" v-model="email" name="email" id="contact-email" placeholder="you@email.com" autocomplete="email">
    </div>
    <div class="c-form__row  u-mb_4">
      <label for="#contact-message" class="u-mb_2">Message</label>
      <textarea v-model="message" id="contact-message" name="message"  cols="30" rows="20" placeholder="Your message"></textarea>
    </div>
    <div class="c-form__row  u-mb_4">
      <button class="c-btn c-btn--pri" @submit.prevent="handleSubmit">Send</button>
    </div>
  </form>
</template>

<script>

export default {
  data(){
    return {
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    handleSubmit(){
      // Do the validating
      // Gather form data
      // Send to Basin
    }
  }
}
</script>

<style lang="scss" scoped>

</style>