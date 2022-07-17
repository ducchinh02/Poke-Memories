<template>
  <div>
    <!-- back to start screen -->
    <back-mode v-if="status === 'play'" @backToStart="backToStart" />
    <!--start screen  -->
    <start-screen v-if="status === 'default'" @startGame="setUpMatch($event)" />
    <div class="container">
      <!--play game screen -->
      <play-screen
        v-if="status === 'play'"
        :cardContext="this.settings.cardContext"
        @finishedMatch="showScore"
      />
      <!-- score screen -->
      <score-screen
        v-if="status === 'result'"
        @playAgain="playAgain"
        :timeFinish="timeFinish"
      />
    </div>
  </div>
</template>

<script>
import PlayScreen from "./views/PlayScreen.vue";
import ScoreScreen from "./views/ScoreScreen.vue";
import StartScreen from "./views/StartScreen.vue";
import { shuffled } from "./utils/array";
import BackMode from "./components/BackMode.vue";
export default {
  components: { StartScreen, PlayScreen, ScoreScreen, BackMode },
  data() {
    return {
      status: "default",
      settings: {
        totalCard: 0,
        cardContext: [],
        startAt: 0,
      },
      timeFinish: 0,
    };
  },
  methods: {
    setUpMatch(data) {
      this.settings.totalCard = data.totalCard;
      // create array quantity of cards
      const firstCardArray = Array.from(
        { length: this.settings.totalCard / 2 },
        (_, i) => i + 1
      );
      const secondCardArray = [...firstCardArray];
      const cardArray = [...firstCardArray, ...secondCardArray];
      // shuffle array
      this.settings.cardContext = shuffled(
        shuffled(shuffled(shuffled(cardArray)))
      );
      // set status
      this.status = "play";
      // get time start
      this.settings.startAt = new Date().getTime();
    },
    showScore() {
      this.status = "result";
      this.timeFinish = new Date().getTime() - this.settings.startAt;
    },
    backToStart() {
      this.status = "default";
    },
    playAgain() {
      this.status = "default";
    },
  },
};
</script>

<style lang="scss"></style>
