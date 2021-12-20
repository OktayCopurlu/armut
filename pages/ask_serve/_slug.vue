<template>
  <AskServe />
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
import { initAuth } from "../../store/user";
import protectedRouter from "~/auth";
export default defineComponent({
  setup() {
    const state = reactive({});
    initAuth();
    protectedRouter();
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>