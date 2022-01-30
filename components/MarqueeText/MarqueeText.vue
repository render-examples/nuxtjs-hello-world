<template>
  <div class="c-marquee_text">
    <div class="c-marquee_text__inner  u-mt_24  u-mb_24">
      <div class="c-marquee_text__track">
        <span class="c-marquee_text__block">Let's make something awesome</span><span class="c-marquee_text__block">Let's make something awesome</span><span class="c-marquee_text__block">Let's make something awesome</span><span class="c-marquee_text__block">Let's make something awesome</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c-marquee_text {
  overflow: hidden;
}

.c-marquee_text__inner {
  position: relative;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  font-size: clamp(70px, 8vw, 8vw);
  padding: 0.3em 0 0.06em 0;
  line-height: 1;
  transform: rotate(-2deg);
  width: calc(100vw  + var(--stretch));
  margin-left: calc(var(--stretch) * -0.5);
}

.c-marquee_text__track {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 10s linear infinite;
  animation-play-state: running;
}

.c-marquee_text__block {
  padding: 0 2vw;
  white-space: nowrap;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  &::after {
    display: block;
    content: '';
    width: 0.8em;
    height: 0.8em;
    margin: -0.25em 0 0 0.5em;
    background-size: 100% auto;
    background-image: url("data:image/svg+xml,%3Csvg width='73' height='73' viewBox='0 0 73 73' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M38.1777 0.177734H34.1777V28.7152L19.9082 3.99969L16.4441 5.99969L30.713 30.7141L5.99999 16.4461L3.99999 19.9102L28.7122 34.1777H0.177735L0.177734 38.1777H28.7119L3.99968 52.4453L5.99968 55.9094L30.7141 41.6405L16.4453 66.3548L19.9094 68.3548L34.1777 43.6414V72.1777H38.1777V43.6434L52.4441 68.3535L55.9082 66.3535L41.6412 41.6423L66.3538 55.9102L68.3538 52.446L43.6404 38.1777H72.1777V34.1777H43.6401L68.3535 19.9094L66.3535 16.4453L41.6423 30.7123L55.9094 6.00098L52.4453 4.00098L38.1777 28.7131V0.177734Z' fill='%2322211E'/%3E%3C/svg%3E%0A");
  }
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>