<template>
  <div
    class="cursor"
    :style="cursorPosition"
    :class="{
      '-is_active': isActive,
      '-is_hovering': isHovering,
      '-is_hidden': isHidden,
    }"
  >
    <div class="cursor__inner"></div>
    <span class="cursor__pos  cursor__pos--x">
      {{getCursorPosition.x}}
    </span>
    <span class="cursor__pos  cursor__pos--y">
      {{getCursorPosition.y}}
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      position: {
        x: null,
        y: null,
      },
      isActive: false,
      isHovering: false,
      isHidden: false,
    };
  },
  mounted() {
    const canHover = window.matchMedia('(hover: hover)').matches; //true or false
    if(!canHover) return;

    const body = document.querySelector("body");

    document.addEventListener(
      "mousemove",
      (e) => {
        window.requestAnimationFrame(() => {
          this.updateCursorPosition(e);
          this.isActive = true;
        });

        if (this.isAnchorOrButton(e.target)) {
          this.isHovering = true;
          return;
        }
        this.isHovering = false;
      },
      { passive: true }
    );

    document.addEventListener("mousedown", (e) => {
      if (e.target.hasAttribute("data-cursor-hide-active") || e.target.closest("[data-cursor-hide-active]")) {
        this.isHidden = true;
        e.target.addEventListener(
          "mouseleave",
          (e) => {
            this.isHidden = false;
          },
          { once: true }
        );
        return;
      }
      this.isHidden = false;
    });

    body.addEventListener("mouseenter", (e) => {
      if (this.position.x || this.position.y) {
        this.isActive = true;
      }
    });

    body.addEventListener("mouseleave", (e) => {
      this.isActive = false;
    });
  },
  methods: {
    updateCursorPosition(e) {
      this.position.x = e.clientX;
      this.position.y = e.clientY;

      // Set the position to the store so we can use it elsewhere
      this.$store.commit('app/setCursorPosition', {x: e.clientX, y: e.clientY})
    },
    isAnchorOrButton(el) {
      if (!el) return;
      let isAnchorLink = el.tagName === "A" && el.href;
      let isButton = el.tagName === "BUTTON";
      let isInput = el.tagName === "input";
      let isLabel = el.tagName === ("label" && el.hasAttribute("for")) || (el.parentNode && el.closest("label"));
      let isInAorB = (el.parentNode && el.closest("a")) || (el.parentNode && el.closest("button"));
      let forceActiveCursor =
        (el.dataset && el.dataset.activeCursor === "true") || (el.dataset && el.closest("[data-active-cursor=true]"));

      if (isAnchorLink || isButton || isInAorB || isInput || forceActiveCursor || isLabel) return true;
      return false;
    },
  },
  computed: {
    ...mapGetters("app", ["getIsMobile", "getIsDesktop", "getHasHover", "getIsLoading", "getCursorPosition"]),
    ...mapActions("app", ["setIsMobile", "setIsDesktop", "setHasHover", "setIsLoading", "setCursorPosition"]),

    cursorPosition: function () {
      return `transform: translate(${this.position.x}px, ${this.position.y}px);`;
    },
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  --cursor-width: 1.5rem;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.25s ease;
  z-index: 5000;
  perspective: 500px;

  &.-is_active {
    opacity: 1;
    transform: scale(1);
  }
  &.-is_hovering {
    --cursor-width: 3rem;
    .cursor__inner {
      opacity: 0.25;
    }
  }
  &.-is_hidden {
    .cursor__inner {
      opacity: 0;
      transform: scale(0);
    }
  }
  /* Might do something with this some time?
  &.-is-loading {
    //...
  }
  */
}
.cursor__inner {
  border-radius: 3em;
  position: relative;
  width: var(--cursor-width);
  height: var(--cursor-width);
  border: 1px solid hsla(var(--foreground));
  left: calc(var(--cursor-width) / -2);
  top: calc(var(--cursor-width) / -2);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: 5000;
}
.cursor__pos {
  position: absolute;
  font-size: 10px;
  opacity: 0.3;

  &--x {
    left: 0;
    top: 100%;
    transform: translate(-50%, -50%);
  }
  &--y {
    top: 0%;
    left: -100%;
    transform: translate(-50%, -50%) rotate(-90deg);
  }
}

</style>