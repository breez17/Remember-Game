<template>
    <div class="header">
        <h1 class="header__logo">
            <span class="header__logo-char">G</span>
            ame Remember
        </h1>
        <div class="header__reset">
            <button @click="resetParams" class="btn btn-white">Reset</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        resetParams() {
            this.$emit('resetParams')
        }
    }
}
</script>

<style lang="scss">
@import "../assets/styles/_scss-variables.scss";

.header {
    width: 100%;
    background: $blue;
    height: 10%;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
        font-size: 30px;
        color: $white;
        letter-spacing: 2px;
        font-weight: 100;
        cursor: pointer;

        &:hover {
            .header__logo-char {
                background: $white;
                color: $blue;
            }
        }

        &-char {
            border: 1px solid $white;
            padding: 5px 15px;
            transition: all .3s;
        }
    }

    &__reset {
        display: flex;
        align-items: center;
    }
}
</style>
