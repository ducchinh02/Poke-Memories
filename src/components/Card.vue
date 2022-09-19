<template>
  <div
    class="card"
    :class="{
      'is-flipped': isFlipped,
      matched: isMatched,
    }"
    @click="toggleFlip"
  >
    <div class="card_inner">
      <div class="card_face front-face">
        <div class="card_content w-100 h-100"></div>
      </div>
      <div class="card_face back-face">
        <div
          class="card_content w-100 h-100"
          :style="{
            backgroundImage: `url(${require('@/assets/images/' + imgUrl)}`,
          }"
        ></div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    card: {
      type: [String, Number, Array, Object],
      required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
      isMatched: false,
    };
  },
  methods: {
    toggleFlip() {
      if (this.isMatched) return;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) this.$emit("onFlip", this.card);
    },
    flipBack() {
      this.isFlipped = false;
    },
    flipOn() {
      this.isMatched = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  margin: 0 1rem 1rem 0;
  width: 100%;
  color: var(--dark);
  background-color: unset;
  cursor: pointer;
  border: unset;
  border-radius: 1rem;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  &_inner {
    width: 100%;
    padding-top: 180%;
    border-radius: 1rem;
    position: relative;
    transition: all 0.5s ease;
    transform-style: preserve-3d;
    .card_face {
      position: absolute;
      backface-visibility: hidden;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--dark);
      border-radius: inherit;
      box-shadow: 0 3px 18px 3px rgb(0 0 0 / 20%);
    }
    .front-face {
      .card_content {
        background: url("../assets/images/icon_back.png") center center /
          contain no-repeat;
        background-size: 50% auto;
      }
    }
    .back-face {
      background-color: var(--light);
      transform: rotateY(180deg);
      .card_content {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 80% auto;
      }
    }
  }
  &.is-flipped .card_inner {
    transform: rotateY(180deg);
  }
  &.disabled {
    pointer-events: none;
  }
  &.matched {
    pointer-events: none;
    cursor: default;
    opacity: 0;
  }
}
</style>
