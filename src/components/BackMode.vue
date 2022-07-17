<template>
  <div class="back-mode" @click="backToStart">
    <ion-icon name="arrow-back"></ion-icon>
  </div>
</template>

<script>
export default {
  methods: {
    backToStart() {
      this.$emit("backToStart");
    },
  },
};
</script>

<style lang="scss" scoped>
.back-mode {
  position: absolute;
  top: 3rem;
  left: 3rem;
  font-size: 3rem;
  color: var(--light);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: rgb(182, 182, 182);
    transform: translateX(-0.5rem);
  }
}
</style>
