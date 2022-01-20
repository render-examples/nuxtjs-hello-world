<template>
  <div>
    <home-hero />

    <div class="home_content">
      <section class="c-home_section  c-home_section--sticky_heading" id="services">
        <div class="o-wrapper o-wrapper--h o-grid">
          <div class="c-home_section__title_wrap">
            <h2 class="c-home_section__title t-heading_2 t-heading--caps">Services</h2>
          </div>

          <div class="c-home_section__content">
            <ServicesList :services="services" />
          </div>
        </div>
      </section>

      <section class="c-home_section   c-home_section--sticky_heading" id="about">
        <div class="o-wrapper o-wrapper--h o-grid">
          <div class="c-home_section__title_wrap">
            <h2 class="c-home_section__title t-heading_2 t-heading--caps">About</h2>
          </div>

          <div class="c-home_section__content  c-home_section__content--short">
            <div class="t-body--md">
              <p>Format is the digital design and development studio of Glen Honeybone. Glen has over a decade&apos;s experience designing and building websites, web applications and digital products for local and international clients. He combines a love of engaging design with a passion for technology to provide a unique blend of strategic design and development.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="c-home_section" id="contact">
        <div class="o-wrapper o-wrapper--h o-grid">
          <div class="c-home_section__title_wrap">
            <h2 class="c-home_section__title t-heading_2 t-heading--caps">Contact</h2>

            <div class="c-contact__direct">
              <address>
                153 Waltham Road<br/>
                Addington<br/>
                Christchurch
              </address>
              <div class="u-mt_2">
                P. <a href="tel:+64212110659" class="c-contact__phone">+64 21 211 0659
                <svg class="c-contact__shaka" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M20.0418 0.248323C21.8494 0.772877 23.2542 2.5808 22.9869 5.3629C22.8747 6.53047 22.6957 7.64376 22.4964 8.87067C22.4906 8.90655 22.4848 8.94253 22.4789 8.97864C22.2834 10.1816 22.0672 11.5124 21.8631 13.1623C21.6526 14.8641 21.5434 16.1379 21.4868 16.9817C21.4801 17.0828 21.4741 17.1777 21.4687 17.2664L29.837 17.2464C31.9241 17.2415 33.6119 18.934 33.607 21.0268C33.6049 21.9084 33.3027 22.7204 32.7976 23.3654C33.9897 23.9995 34.7993 25.2576 34.7958 26.708C34.7925 28.1098 34.0306 29.3355 32.9006 29.9937C33.4345 30.6464 33.7539 31.4825 33.7517 32.3946C33.7494 33.3523 33.393 34.2278 32.8071 34.8964L37.8932 35.1424C39.9685 35.1512 41.6426 36.8384 41.6376 38.9227C41.6326 41.0155 39.9367 42.7161 37.8496 42.7211L14.4028 42.7774C6.95573 42.7952 0.933091 36.7559 0.95086 29.2883C0.960424 25.2688 2.7193 21.6538 5.50014 19.1719C6.81577 17.9977 7.84632 17.1778 8.73321 16.4878C8.88103 16.3728 9.02388 16.2622 9.16266 16.1547C9.86211 15.6129 10.4582 15.1511 11.0655 14.6175C12.8265 13.0701 13.812 10.8953 14.4428 8.6527C14.7567 7.53659 14.9767 6.42667 15.1652 5.39371C15.2054 5.17327 15.2446 4.9541 15.2831 4.73807C15.4215 3.96327 15.5527 3.22879 15.7008 2.6205C16.2203 0.486648 18.3316 -0.247979 20.0418 0.248323ZM20.8359 36.2148L20.1727 36.2163C18.0856 36.2213 16.3978 34.5288 16.4027 32.436C16.4047 31.6094 16.6705 30.844 17.1199 30.2201C15.7917 29.6363 14.8666 28.3057 14.8703 26.7556C14.8737 25.3538 15.6356 24.128 16.7655 23.4698C16.2317 22.8172 15.9123 21.9811 15.9145 21.069C15.9193 19.0186 17.5473 17.3447 19.5761 17.273C19.5832 17.1489 19.5916 17.0124 19.6016 16.8637C19.6605 15.9842 19.7732 14.675 19.988 12.9379C20.1966 11.2517 20.4178 9.89034 20.6131 8.68843C20.6193 8.65039 20.6254 8.6125 20.6316 8.57476C20.832 7.34064 21.0008 6.28663 21.1061 5.19012C21.2967 3.20638 20.3488 2.31237 19.5086 2.06854C18.571 1.79645 17.7394 2.22699 17.5363 3.06153C17.4035 3.60675 17.2867 4.26031 17.1505 5.02239C17.1102 5.24751 17.0683 5.4821 17.0238 5.72616C16.8325 6.77452 16.5998 7.95491 16.2612 9.15895C15.5868 11.5566 14.4675 14.1415 12.3069 16.0399C11.6515 16.6158 11.0019 17.1189 10.3015 17.6612C10.1654 17.7666 10.0273 17.8735 9.88697 17.9827C9.01846 18.6584 8.0244 19.4495 6.75261 20.5846C4.35858 22.7213 2.84857 25.8278 2.84035 29.2838C2.82507 35.705 8.00376 40.898 14.4073 40.8827L37.8541 40.8264C38.8976 40.8239 39.7456 39.9736 39.7481 38.9272C39.7506 37.8808 38.9067 37.0345 37.8631 37.037L37.8392 37.0371L20.8359 36.2148ZM20.1896 28.6376C20.19 28.6376 20.1904 28.6376 20.1907 28.6376L31.0124 28.6117C32.0559 28.6092 32.9039 27.7589 32.9063 26.7125C32.9088 25.6661 32.0649 24.8199 31.0214 24.8223L29.8194 24.8252C29.8192 24.8252 29.8195 24.8252 29.8194 24.8252L18.6538 24.8518C17.6103 24.8543 16.7623 25.7046 16.7598 26.7511C16.7573 27.7975 17.6013 28.6437 18.6448 28.6412L20.1896 28.6376ZM20.1854 30.5323C19.1423 30.5352 18.2947 31.3853 18.2922 32.4315C18.2897 33.4779 19.1337 34.3241 20.1772 34.3216L29.9682 34.2983C31.0117 34.2958 31.8597 33.4455 31.8622 32.3991C31.8647 31.3527 31.0208 30.5064 29.9772 30.5089L20.1854 30.5323C20.1852 30.5323 20.1857 30.5323 20.1854 30.5323ZM29.8237 22.9305C30.8672 22.9279 31.715 22.0776 31.7175 21.0313C31.72 19.9849 30.876 19.1387 29.8325 19.1411L19.698 19.1653C18.6544 19.1678 17.8065 20.0181 17.804 21.0645C17.8015 22.1109 18.6454 22.9572 19.6889 22.9547L29.8237 22.9305C29.8238 22.9305 29.8237 22.9305 29.8237 22.9305Z" />
                </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="c-home_section__content  c-home_section__content--short">
            <form name="contact" netlify autocomplete>
              <div class="c-form__row  u-mb_4">
                <label for="#contact-name"> Name</label>
                <input type="text" class="--large" name="name" id="contact-name" placeholder="Your name" autocomplete="name">
              </div>
              <div class="c-form__row  u-mb_4">
                <label for="#contact-email">Email</label>
                <input type="email" class="--large" name="email" id="contact-email" placeholder="you@email.com" autocomplete="email">
              </div>
              <div class="c-form__row  u-mb_4">
                <label for="#contact-message" class="u-mb_2"> Message</label>
                <textarea name="message" id="contact-message" cols="30" rows="20" placeholder="Your message"></textarea>
              </div>
              <div class="c-form__row  u-mb_4">
                <button class="c-btn c-btn--pri ">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    </div> <!-- .home_content -->
  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero/HomeHero';
import ServicesList from '@/components/ServicesList/ServicesList';

export default {
  components: {
    HomeHero,
    ServicesList
  },
  data() {
    return {
      services: [
        {
          title: 'Strategy',
          description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis auctor adipiscing elit sed amet, interdum. Facilisis donec ultrices amet eleifend purus risus. Mauris vestibulum elit felis habitant tincidunt mi venenatis cras.</p>',
          icon: 'service-icon-strategy.svg'
        },
        {
          title: 'Design',
          description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis auctor adipiscing elit sed amet, interdum. Facilisis donec ultrices amet eleifend purus risus. Mauris vestibulum elit felis habitant tincidunt mi venenatis cras.</p>',
          icon: 'service-icon-design.svg'
        },
        {
          title: 'Development',
          description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis auctor adipiscing elit sed amet, interdum. Facilisis donec ultrices amet eleifend purus risus. Mauris vestibulum elit felis habitant tincidunt mi venenatis cras.</p>',
          icon: 'service-icon-development.svg'
        },
        {
          title: 'Support',
          description: '<p>Launching a shiny new website is just the beginning — it’s only then that it starts to pay dividends. Ongoing maintenance and support measured against strategic goals ensures you’ll see a valuable return on your investment.</p>',
          icon: 'service-icon-support.svg'
        },
      ]
    }
  },
  head: {
    title: 'Home page'
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>
@use './Index.scss';

.home_content {
  // Dark content sections...
  // --foreground: var(--omega);
  // --background: var(--zeta);
  // background-color:hsl(var(--background));
  // color: hsl(var(--foreground));


  padding: clamp(80px, 10vw, 180px) 0 clamp(40px, 5vw, 90px) 0;

}
</style>