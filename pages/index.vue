<template>
  <div>
    <home-hero />

    <div class="home_content">
      <section class="c-home_section" id="services">
        <div class="o-wrapper o-wrapper--h o-grid">
          <div class="c-home_section__title_wrap">
            <h2 class="c-home_section__title t-heading_2 t-heading--caps">Services</h2>
          </div>

          <div class="c-home_section__content">
            <ServicesList :services="services" />
          </div>
        </div>
      </section>

      
      <section class="c-home_section" id="about">
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
      
      <section class="c-home_section" id="about">
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
                P. <a href="tel:+64212110659">+64 21 211 0659</a>
              </div>
            </div>
          </div>

          <div class="c-home_section__content  c-home_section__content--short">
            <form name="contact" netlify>
              <div class="c-form__row  u-mb_4">
                <label for="#contact-name"> Name</label>
                <input type="text" class="--large" name="name" id="contact-name" placeholder="Your name">
              </div>
              <div class="c-form__row  u-mb_4">
                <label for="#contact-email">Email</label>
                <input type="text" class="--large" name="name" id="contact-name" placeholder="you@email.com">
              </div>
              <div class="c-form__row  u-mb_4">
                <label for="#contact-name" class="u-mb_2"> Message</label>
                <textarea name="message" id="message" cols="30" rows="20" placeholder="Your message"></textarea>
              </div>
              <div class="c-form__row  u-mb_4">
                <button class="c-btn c-btn--pri ">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    </div>
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
  --foreground: var(--omega);
  --background: var(--zeta);

  background-color:hsl(var(--background));
  color: hsl(var(--foreground));
  padding: clamp(80px, 10vw, 180px) 0;

}
</style>