<template>
  <div>
    <li v-if="provider">
      <nuxt-link to="/user_page/opportunities">Opportunities</nuxt-link>
    </li>
    <UserPage />
  </div>
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
import { initAuth } from "../../store/user";
import protectedRouter from "~/auth";
import { userInfo } from "~/store";
export default defineComponent({
  setup() {
    const state: { provider: boolean } = reactive({
      provider: userInfo.provider,
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
@import "~/static/index";
@include opportunities_link_style;
</style>