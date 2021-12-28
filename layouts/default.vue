<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang='scss'>
@import "../static/index";
body {
  margin: 0;
  padding: 0;
}
* {
  font-family: $font-family;
}

.layout-enter,
.page-enter,
.layout-leave-to,
.page-leave-to {
  opacity: 0;
  transition: opacity 300ms;
}

.layout-enter-to,
.page-enter-to {
  opacity: 1;
  transition: opacity 300ms;
}
</style>