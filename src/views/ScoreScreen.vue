<template>
  <div class="result-screen text-center">
    <h1>✨ Congratulations ✨</h1>
    <div class="time-score">{{ Math.round(timeFinish / 1000) }} seconds</div>
    <button @click="playAgain" class="play-again">Play again</button>
  </div>
</template>

<script>
export default {
  props: {
    timeFinish: {
      type: Number,
      required: true,
    },
  },
  methods: {
    playAgain() {
      this.$emit("playAgain");
    },
  },
};
</script>

<style scoped lang="scss">
.result-screen {
  h1 {
    font-size: 7.5rem;
    font-weight: normal;
    @media screen and (max-width: 576px) {
      font-size: 5rem;
    }
  }
  .time-score {
    font-size: 4rem;
    margin-top: 2.4rem;
    font-weight: normal;
  }
  .play-again {
    outline: none;
    background: transparent;
    box-shadow: none;
    border: 1px solid var(--light);
    color: var(--light);
    margin: 1rem;
    padding: 1.2rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    font-size: 2rem;
    &:hover {
      background-color: var(--light);
      color: var(--dark);
    }
  }
}
</style>
