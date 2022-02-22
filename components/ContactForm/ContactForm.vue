<template>
  <ValidationObserver v-slot="{ failed }" ref="vObserver">
    <form name="contact" ref="contactForm" autocomplete v-if="!submitSuccess" @submit.prevent="handleSubmit">
      <div class="c-form__row  u-mb_4">
        <ValidationProvider mode="lazy" rules="required" v-slot="{ errors }" name="name">
          <label class="contact-label" :class="errors.length ? '-has-errors' : ''" for="#contact-name">Name<span class="required">*</span></label>
          <input type="text" class="--large" v-model="name" name="name" id="contact-name" placeholder="Your name" autocomplete="name">
          <span class="error-message" v-if="errors.length"><ErrorArrow :mr="true" />{{ errors[0] }}
          </span>
        </ValidationProvider>
      </div>
      <div class="c-form__row  u-mb_4">
        <ValidationProvider mode="lazy" rules="required|email" v-slot="{ errors }" name="email">
          <label class="contact-label" :class="errors.length ? '-has-errors' : ''" for="#contact-email">Email<span class="required">*</span></label>
          <input type="email" class="--large" v-model="email" name="email" id="contact-email" placeholder="you@email.com" autocomplete="email">
          <span class="error-message" v-if="errors.length"><ErrorArrow :mr="true" />{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="c-form__row  u-mb_4">
        <ValidationProvider mode="eager" rules="required" v-slot="{ errors }" name="message">
          <label class="contact-label  u-mb_2" for="#contact-message" :class="errors.length ? '-has-errors' : ''" >Message<span class="required">*</span></label>
          <textarea v-model="message" id="contact-message" name="message"  cols="30" rows="20" placeholder="Your message"></textarea>
          <span class="error-message" v-if="errors.length"><ErrorArrow :mr="true" />{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="c-form__row  u-mb_4">
        <div v-if="failed" class="u-mb_2">
          <p class="u-mb_2">🧐 &nbsp;Oops. Looks like there are some errors. Please check the form.</p>
          <!-- <ul v-if="errors">
            <li v-for="(error, index) in Object.entries(errors)" :key="index">{{toTitleCase(error[0])}}: <span v-for="(e, j) in error[1]" :key="j">{{e}}</span></li>
          </ul> -->
        </div>

        <button class="c-btn c-btn--pri" @submit.prevent="handleSubmit" :disabled="failed">Send</button>
      </div>
    </form>

    <div v-else>
      <svg class="success u-mb_4" width="75" height="99" viewBox="0 0 75 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M70.5127 56.1024C71.7748 54.6621 72.5396 52.7763 72.5396 50.712C72.5396 46.3196 69.0772 42.7354 64.7282 42.5317C64.6674 42.5256 64.6058 42.5225 64.5434 42.5225H47.97C47.9895 41.769 48.0205 40.8119 48.0699 39.7006C48.1968 36.8455 48.4444 32.9877 48.9258 28.9594C49.358 25.3433 49.7459 22.6374 50.0869 20.2597L50.087 20.259C50.4981 17.3915 50.8409 15.0012 51.1101 12.0676C51.7012 5.6264 48.4275 1.52578 44.3167 0.339162C40.3963 -0.79249 35.6416 0.887859 34.4927 5.67968C34.1402 7.15022 33.8485 8.86303 33.5445 10.6486C33.4683 11.0958 33.3914 11.5475 33.3126 12.0012C32.9118 14.3071 32.4482 16.7504 31.7593 19.2111C30.3823 24.1299 28.1364 29.0013 23.8433 32.773C22.3891 34.0506 20.9597 35.157 19.2958 36.445C18.9663 36.7001 18.6274 36.9624 18.2774 37.2345C16.1718 38.8715 13.7287 40.8143 10.6105 43.597C4.08329 49.4221 -0.0217346 57.9056 8.65677e-05 67.3393C0.0406266 84.8655 14.3018 99.0404 31.8532 98.9999L31.9243 98.9997L57.3378 96.9822H64.5434C64.6058 96.9822 64.6674 96.9791 64.7282 96.973C69.0772 96.7693 72.5396 93.1851 72.5396 88.7927C72.5396 86.326 71.4476 84.1142 69.7198 82.6128C71.6832 81.1167 72.9497 78.756 72.9497 76.0991C72.9497 73.9633 72.1312 72.0188 70.7901 70.561C73.3019 69.1613 75 66.482 75 63.4055C75 60.2171 73.1761 57.4553 70.5127 56.1024ZM31.7747 95.3148L34.1273 95.128C32.2934 93.6261 31.1234 91.346 31.1234 88.7927C31.1234 86.6571 31.942 84.7124 33.283 83.2546C30.7713 81.8549 29.0731 79.1757 29.0731 76.0991C29.0731 73.8871 29.951 71.8805 31.378 70.4072C29.0126 68.9705 27.4329 66.3722 27.4329 63.4055C27.4329 60.3296 29.1312 57.6497 31.6426 56.2498C30.3017 54.792 29.4832 52.8475 29.4832 50.712C29.4832 46.3196 32.9456 42.7354 37.2946 42.5317C37.3554 42.5256 37.417 42.5225 37.4794 42.5225H44.2782C44.2981 41.7343 44.3304 40.7204 44.383 39.5372C44.5125 36.624 44.7656 32.6697 45.2612 28.5227C45.7224 24.6645 46.1149 21.9426 46.4526 19.6009L46.4527 19.6005L46.4528 19.5997C46.8478 16.8605 47.1679 14.6413 47.435 11.7313C47.8836 6.8429 45.5106 4.51992 43.2918 3.87945C40.8826 3.18401 38.6248 4.27307 38.0819 6.53774C37.7608 7.87699 37.4962 9.42938 37.1946 11.1988C37.1157 11.6615 37.0344 12.139 36.9488 12.6314C36.543 14.9661 36.0542 17.5579 35.3136 20.2032C33.8318 25.4964 31.3112 31.1206 26.2811 35.5398C24.7333 36.8997 23.1996 38.0865 21.5338 39.3756C21.2095 39.6266 20.8801 39.8815 20.5446 40.1423C18.4748 41.7515 16.1027 43.6382 13.0698 46.3448C7.29492 51.4985 3.67134 58.9931 3.69063 67.3308C3.72641 82.7983 16.2936 95.3127 31.7747 95.3148ZM37.4794 58.9014C37.4778 58.9014 37.4762 58.9014 37.4745 58.9014H35.9486C35.8929 58.9047 35.8369 58.9055 35.7807 58.9037C35.7321 58.9021 35.6832 58.9014 35.6341 58.9014C33.1429 58.9014 31.1234 60.918 31.1234 63.4055C31.1234 65.8931 33.1429 67.9097 35.6341 67.9097C35.6832 67.9097 35.7321 67.909 35.7807 67.9074C35.8369 67.9056 35.8929 67.9064 35.9486 67.9097H67.0855C67.1354 67.9008 67.1861 67.8938 67.2375 67.8888C69.5219 67.6698 71.3094 65.745 71.3094 63.4055C71.3094 61.0661 69.5219 59.1413 67.2375 58.9223C67.1861 58.9173 67.1354 58.9103 67.0855 58.9014H64.5483C64.5467 58.9014 64.5451 58.9014 64.5434 58.9014H37.4794ZM64.434 55.2161L64.4526 55.2151C64.4634 55.2146 64.4742 55.2142 64.485 55.2138C66.9077 55.1371 68.8491 53.1506 68.8491 50.712C68.8491 48.2733 66.9077 46.2868 64.485 46.2101C64.4679 46.2095 64.4508 46.2088 64.4339 46.2078H37.589C37.572 46.2088 37.555 46.2095 37.5378 46.2101C35.1151 46.2868 33.1738 48.2733 33.1738 50.712C33.1738 53.1506 35.1151 55.1371 37.5378 55.2138C37.5549 55.2144 37.5719 55.2151 37.5889 55.2161C37.5889 55.2161 37.5888 55.2161 37.5889 55.2161H64.434ZM64.9857 71.595C65.0274 71.6011 65.0695 71.6059 65.112 71.6093C67.4322 71.793 69.2591 73.7339 69.2591 76.0991C69.2591 78.4643 67.4322 80.4053 65.112 80.589C65.0695 80.5924 65.0274 80.5972 64.9857 80.6033H36.9381C36.88 80.591 36.8207 80.5814 36.7605 80.5746C34.5122 80.3212 32.7637 78.4128 32.7637 76.0991C32.7637 73.7855 34.5122 71.8771 36.7605 71.6237C36.8207 71.6169 36.88 71.6073 36.9381 71.595H64.9857ZM39.1781 84.2909C39.1952 84.2903 39.2123 84.2896 39.2292 84.2886H64.4339C64.4508 84.2896 64.4679 84.2903 64.485 84.2909C66.9077 84.3675 68.8491 86.3541 68.8491 88.7927C68.8491 91.2314 66.9077 93.2179 64.485 93.2946C64.4679 93.2952 64.4508 93.2959 64.4339 93.2969H39.2292C39.2122 93.2959 39.1952 93.2952 39.1781 93.2946C36.7554 93.2179 34.814 91.2314 34.814 88.7927C34.814 86.3541 36.7554 84.3675 39.1781 84.2909Z" />
      </svg>

      <p class="t-heading_3 u-mb_2">Thanks for getting in touch.</p>
      <p class="t-body--lg">Your message has been sent successfully.</p>
    </div>
    <div v-if="submitFailed">
      Looks like something went wrong. How about a call – Glen <a href="tel:+64212110659">+64 21 211 0659</a>
    </div>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import ErrorArrow from "@/components/Forms/FieldErrorArrow.vue";
import {toTitleCase} from "@/helpers/stringHelpers";

export default {
  components: {
    ErrorArrow,
    ValidationObserver,
    ValidationProvider 
  },
  data(){
    return {
      name: null,
      email: null,
      message: null,
      submitSuccess: false,
      submitFailed: false,
      errors: []
    }
  },
  methods: {
    toTitleCase: toTitleCase,
    async handleSubmit(values){
      const that = this;
      const validation = await that.$refs.vObserver.validateWithInfo();
      const isValid = validation.isValid;

      if(isValid) {
        const xhr = new XMLHttpRequest();
        var formData = new FormData(that.$refs.contactForm);

        xhr.open("POST", 'https://usebasin.com/f/2eac124ae226', true);
        xhr.onload = function(e) {
          console.log(xhr);
          const response = JSON.parse(xhr.response);
          if (xhr.status === 200) {
            that.submitSuccess = true
          }
          if (xhr.status !== 200) {
            that.submitFailed = true
          }
        };
        xhr.send(formData);
      } else {
        this.errors = validation.errors
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-label {
  display: flex;
  align-items: baseline;
}

.required {
  opacity: 0.3;
  margin-left: 0.25em;
}

.error-message {
  font-size: 80%;
  display: block;
  padding-top: 0.5em;
  color: var(--warning);
}

.success {
  animation: successWiggle 1s 0.5s alternate forwards ease-in-out;
  opacity: 0;
  transform-origin: 30% 70%;
}

@keyframes successWiggle {
  from {
    opacity: 0.2;
    transform: rotate(-35deg);
  }
  to {
    opacity: 1;
    transform: rotate(-5deg);
  }
}
</style>