<template>
  <div class="text-center game-container">
    <div
      class="grid-card"
      :style="{
        gridTemplateColumns: `repeat(${Math.sqrt(cardContext.length)}, 1fr)`,
      }"
    >
      <card-flip
        v-for="(card, index) in cardContext"
        :key="index"
        :imgUrl="card + '.png'"
        :card="{ card, index }"
        :ref="`card-${index}`"
        @onFlip="checkRules($event)"
      >
      </card-flip>
    </div>
  </div>
</template>

<script>
import CardFlip from "../components/Card.vue";
export default {
  components: { CardFlip },
  props: {
    cardContext: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRules(data) {
      if (this.rules.length === 2) {
        return;
      }
      this.rules.push(data);
      // if correct
      if (
        this.rules.length === 2 &&
        this.rules[0].card === this.rules[1].card
      ) {
        // prevent user click more than 2 cards
        this.disableAllCard();
        // set 2 cards correct flip
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].flipOn();
          this.$refs[`card-${this.rules[1].index}`][0].flipOn();
          // reset the rules
          this.rules = [];
        }, 800);
        //direct to score screen if all cards are flip
        const disabledCards = document.querySelectorAll(
          ".game-container .card.matched"
        );
        // check if all cards are flip
        if (
          disabledCards &&
          disabledCards.length === this.cardContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("finishedMatch");
          }, 900);
        }
        // if wrong
      } else if (
        this.rules.length === 2 &&
        this.rules[0].card !== this.rules[1].card
      ) {
        // prevent user click more than 2 cards
        this.disableAllCard();
        // set 2 cards flip back
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].flipBack();
          this.$refs[`card-${this.rules[1].index}`][0].flipBack();
          // reset the rules
          this.rules = [];
        }, 800);
      } else return;
    },
    // prevent user click more than 2 cards
    disableAllCard() {
      const cards = document.querySelectorAll(".game-container .card");
      for (const card of cards) {
        card.classList.add("disabled");
      }
      setTimeout(() => {
        for (const card of cards) {
          card.classList.remove("disabled");
        }
      }, 700);
    },
  },
};
</script>

<style lang="scss" scoped>
.game-container {
  margin: 5rem auto 3rem;
  .grid-card {
    display: grid;
    grid-gap: 1rem;
  }
}
</style>
