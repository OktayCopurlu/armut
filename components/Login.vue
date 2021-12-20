<template>
  <div class="main">
    <form @submit.prevent="submit">
      <div class="floating-form">
        <input
          type="email"
          name="email"
          id="email"
          required
          v-model="email"
        /><label class="label" for="email">Email</label>
      </div>
      <div class="floating-form">
        <input
          type="password"
          name="pswd"
          id="password"
          required
          v-model="password"
        /><label class="label" for="password">Password</label>
      </div>
      <Button text="Login" />
    </form>
  </div>
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
import { LoginFormType } from "~/store/types";
import { useLogin } from "~/store/user";

export default defineComponent({
  setup() {
    const state: LoginFormType = reactive({
      email: "",
      password: "",
    });

    const emptyForm = (): void => {
      state.email = "";
      state.password = "";
    };
    const { login } = useLogin();

    const submit = (): void => {
      login(state.password, state.email);
      emptyForm();
    };
    return {
      ...toRefs(state),
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";

.main {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 3vw;
  width: 25rem;
  margin: 5rem auto;
  box-shadow: 2px 2px 12px gray;
  * {
    font-size: 1rem;
  }

  .floating-form {
    position: relative;
  }
  input {
    @include login-register-input;
  }
  .label {
    @include label;
  }
  button {
    @include green-button(1.3rem);
  }
}
@media #{$media-mobile} {
  .main {
    width: auto;
    margin: 5vw auto;
    padding: 4vw;
  }
}
</style>
