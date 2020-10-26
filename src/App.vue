<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/_scss-variables.scss";
@import "./assets/styles/default-styles.scss";

#app {
  font-family: $lightFont;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
