<template>
    <div class="game">
        <Header @resetParams="resetParams" />
        <CardsList ref="gameField" />
    </div>
</template>

<script>

import Header from "../components/Header.vue";
import CardsList from "../components/CardsList.vue";

export default {
  name: 'Home',
    components: {
      CardsList,
        Header
    },
    methods: {
        resetParams() {
            this.$refs.gameField.restartGame();
        }
    }
}
</script>
