<template>
  <button>
    {{ text }}
  </button>
</template>

<script>
import { reactive, toRefs } from "@nuxtjs/composition-api";

export default {
  props: ["value", "text"],
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>