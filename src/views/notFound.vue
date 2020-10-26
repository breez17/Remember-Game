<template>
    <div class="not-found">
        <h1 class="not-found__title">404 error</h1>
        <h4 class="not-found__description">Sorry, can not find this page!</h4>
        <router-link class="not-found__link" to="/">Got to Home page</router-link>
    </div>
</template>

<script>
    export default {
        name: "notFound"
    }
</script>

<style lang="scss">
@import "../assets/styles/scss-variables.scss";

.not-found {
    background: $blue;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__title {
        font-size: 30px;
        letter-spacing: 2px;
        font-weight: 100;
        color: $white;
    }

    &__description {
        margin-top: 20px;
        font-size: 15px;
        letter-spacing: 2px;
        font-weight: 100;
        color: $white;
    }

    &__link {
        margin-top: 20px;
        color: $white;
        text-decoration: none;
        border-bottom: 1px solid $white;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding-bottom: 10px;
        transition: all .3s;

        &:hover {
            letter-spacing: 3px;
        }
    }
}
</style>
