<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/user-page/messages">Messages</nuxt-link>
      </li>
      <li v-if="provider">
        <nuxt-link to="/user-page/asked-service">Asked Service</nuxt-link>
      </li>
      <li v-else>
        <nuxt-link to="/user-page/rezervation">My Rezervation</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/user-page">Profile</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
import { initAuth } from "~/store/auth";
import protectedRouter from "~/protectRouter";
import { currentUserInfo } from "~/store";
export default defineComponent({
  setup() {
    const state: { provider: boolean } = reactive({
      provider: currentUserInfo.provider,
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
@include userpage_link_style;
</style>