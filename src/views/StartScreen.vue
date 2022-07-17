<template>
  <div>
    <div class="screen_header text-center">
      <h1 class="screen_header-heading mb-0">POKE MEMORIES</h1>
      <p class="screen_header-title">Select mode to start game</p>
    </div>
    <!--game mode options -->
    <div
      class="game-mode mt-5 d-flex align-items-center flex-wrap justify-content-center"
    >
      <!-- option -->
      <button class="mode-button" @click="playGame(16)">
        <span class="mode-title">4 x 4</span>
        <span class="mode-level">Easy</span>
      </button>
      <!-- option -->
      <button class="mode-button" @click="playGame(36)">
        <span class="mode-title">6 x 6</span>
        <span class="mode-level">Normal</span>
      </button>
      <!-- option -->
      <button class="mode-button" @click="playGame(64)">
        <span class="mode-title">8 x 8</span>
        <span class="mode-level">Hard</span>
      </button>
      <!-- option -->
      <button class="mode-button" @click="playGame(100)">
        <span class="mode-title">10 x 10</span>
        <span class="mode-level">Super hard</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playGame(totalCard) {
      this.$emit("startGame", { totalCard });
    },
  },
};
</script>

<style lang="scss" scoped>
.screen_header {
  &-heading {
    font-size: 7.2rem;
    text-transform: uppercase;
    font-weight: 600;
  }
  &-title {
    font-size: 3.2rem;
  }
}
.game-mode {
  gap: 3rem;
  .mode-button {
    font: var(--font);
    width: 15rem;
    height: 15rem;
    background: transparent;
    box-shadow: none;
    border: 0.1rem solid var(--light);
    color: var(--light);
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    &:hover {
      background-color: var(--light);
      color: var(--dark);
    }
    .mode-title {
      font-size: 3.2rem;
    }
    .mode-level {
      font-size: 2rem;
      margin-top: 0.5rem;
    }
  }
}
</style>
