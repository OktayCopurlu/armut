<template>
  <div>
    <h2>Select register status</h2>
    <nav>
      <nuxt-link to="/register-provider">
        <Button text="Register as a Service Provider" />
      </nuxt-link>

      <nuxt-link to="/register-for-service">
        <Button text="Register for Getting Service" />
      </nuxt-link>
    </nav>
  </div>
</template>

<script lang='ts'>
import { currentUserInfo } from "~/store";
import { useLogin } from "~/store/auth";
import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  toRefs,
} from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const state: {
      isLogin: ComputedRef<boolean> | boolean;
      photo: ComputedRef<string> | string;
    } = reactive({
      isLogin: false,
      photo: "",
    });
    state.isLogin = computed(() => currentUserInfo.isLogin);
    state.photo = computed(() => currentUserInfo.photo);
    const { logout } = useLogin();
    return {
      ...toRefs(state),
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";

div {
  height: 50vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
button {
  @include green-button(1.3rem);
  margin: 2rem;
  width: 30vw;
}
</style>