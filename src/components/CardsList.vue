<template>
    <div class="cards-list">
        <h2 class="cards-list__title">Game Field</h2>
        <div class="cards-list__start" v-if="cards.length > 0">
            <button class="cards-list__start-btn btn" @click="restartGame">Start new game</button>
        </div>
        <div class="cards-list__moves-wrapper" v-if="cards.length > 0">
            <p class="cards-list__moves-item cards-list__options">{{ movies }} steps</p>
        </div>
        <div class="cards-list__time-wrapper" v-if="cards.length > 0">
            <p class="cards-list__time-item cards-list__options">{{ minutes }}m : {{ seconds }}s</p>
        </div>
        <div class="cards-list__cards" v-if="cards.length > 0">
            <div v-for="card in cards"
                 :key="card.id"
                 class="card-item hidden"
                 :class="{ 'card-item--active': Object.keys(openedCards).includes(`${card.id}`),
                 'card-item--active card-item--true' : trueEnums.includes(card.value)}"
                 @click="openOneItem(card)">
                {{ card.name }}
            </div>
        </div>
        <div class="cards-list__start" v-else>
            <button class="cards-list__start-btn btn" @click="refreshBoard">Start!</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "CardsList",
    data() {
        return {
            cards: [],
            trueEnums: [],
            openedCards: {},
            seconds: 0,
            minutes: 0,
            isStopped: false,
            interval: null,
            movies: 0
        }
    },
    watch: {
        trueEnums(updatedEnums) {
            if ( updatedEnums.includes(0)
              && updatedEnums.includes(1)
              && updatedEnums.includes(2)
              && updatedEnums.includes(3)
              && updatedEnums.includes(4)
              && updatedEnums.includes(5)) {
                alert("Congratulations!!!");
                clearInterval(this.interval);
            }
        },
        seconds(second) {
                if (second === 60) {
                    this.seconds = 0;
                    this.minutes = this.minutes + 1;
            }
        }
    },
    computed: {
        ...mapGetters([
         "getFields",
        ])
    },
    methods: {
        openOneItem(card) {
            let cardsIds = [];
            cardsIds = Object.keys(this.openedCards);
            // :TODO fix third click
            if (cardsIds.length === 2) {
                for (let i = 0; i < 2; i++) {
                    if (this.openedCards[cardsIds[i]] && this.openedCards[cardsIds[0]].value !== this.openedCards[cardsIds[1]].value) {
                        this.movies++;
                        this.openedCards = {};
                    }
                    if (this.openedCards[cardsIds[i]] && this.openedCards[cardsIds[0]].value === this.openedCards[cardsIds[1]].value) {
                        this.trueEnums.push(this.openedCards[cardsIds[0]].value);
                        this.movies++;
                        this.openedCards = {};
                    }
                }

                return;
            }
            this.$set(this.openedCards, card.id, card);
        },

        restartGame() {
            this.trueEnums = [];
            this.cards = [];
            this.isStopped = false;
            this.minutes = 0;
            this.seconds = 0;
            clearInterval(this.interval);
        },

        toggleTimer() {
            if (this.isStopped) {
                clearInterval(this.interval);
            } else {
                this.interval = setInterval(this.incrementTime, 1000);
            }
            this.isStopped = !this.isStopped
        },

        incrementTime() {
            this.seconds = parseInt(this.seconds) + 1;
        },

        refreshBoard() {
            let currentIndex = this.getFields.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = this.getFields[currentIndex];
                this.getFields[currentIndex] = this.getFields[randomIndex];
                this.getFields[randomIndex] = temporaryValue;
            }

            this.cards = this.getFields;
            this.toggleTimer();
        }
    }
}
</script>

<style lang="scss">
@import "../assets/styles/scss-variables.scss";

.cards-list {
    width: 100%;

    &__title {
        text-align: center;
        padding: 20px 0;
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 2px;
    }

    &__cards {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        width: max-content;
    }

    &__moves {
        &-wrapper {
            width: 100%;
            text-align: center;
            position: relative;
        }

        &-item {

            left: 100px;
        }
    }

    &__options {
        margin: 0 auto;
        background: $blue;
        color: white;
        border-radius: 50%;
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 2px;
        width: 130px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 100px;
    }

    &__time {
        &-wrapper {
            width: 100%;
            text-align: center;
            position: relative;
        }
        &-item {
            right: 100px;
        }
    }

    &__start {
        width: 100%;
        text-align: center;

        &-btn {
            background: $white;
            border: 1px solid $black;
            color: $black;
            margin: 40px auto;
            padding: 5px 15px;
            font-size: 18px;
            width: 240px;
            text-align: center;
            font-weight: 100;
            letter-spacing: 2px;

            &:hover {
                background: $black;
                color: $white;
                border: 1px solid $white;
            }
        }
    }
}

.card-item {
    width: 125px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $black;
    border-radius: 4px;
    color: $white;
    cursor: pointer;
    z-index: 2;

    &--active {
        font-size: 3rem !important;
        user-select: none;
    }

    &--true {
        background: green;
        font-size: 3rem !important;
    }
}

.hidden {
    font-size: 0;
}
</style>
