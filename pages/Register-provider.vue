<template>
  <Register :provider="true" :button_text="'Register as a Service Provider'" />
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
import { initAuth } from "../store/auth";
import protectedRouter from "~/protectRouter";
export default defineComponent({
  setup() {
    const state = reactive({});
    initAuth();
    protectedRouter();
    return {
      ...toRefs(state),
    };
  },
  head() {
    return {
      title: "Register as a Provider",
    };
  },
});
</script>

<style lang="scss" scoped>
</style>