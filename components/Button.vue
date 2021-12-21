<template>
  <button v-if="!clickEvent" :value="asked_service_user">
    {{ text }}
  </button>
  <button v-else @click="clickEvent" :value="asked_service_user">
    {{ text }}
  </button>
</template>

<script>
import { reactive, toRefs } from "@nuxtjs/composition-api";

export default {
  props: ["clickEvent", "asked_service_user", "text"],
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>