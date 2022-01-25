<template>
  <div>
    <UserPageNavigation />
    <Message />
  </div>
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
import { initAuth } from "~/store/auth";
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
      title: "Messages",
    };
  },
});
</script>

<style lang="scss" scoped>
</style>