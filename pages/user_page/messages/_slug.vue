<template>
  <div>
    <UserPageNavigation />
    <Message/>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  computed,
} from "@nuxtjs/composition-api";
import { initAuth } from "~/store/auth";
import protectedRouter from "~/protectRouter";
import { currentUserInfo } from "~/store";
export default defineComponent({
  setup() {
    const state = reactive({
      provider: computed(() => currentUserInfo.provider),
    });

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

