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

      <button>Login</button>
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
$media-mobile: "only screen and (max-width : 600px)";

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
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    &:focus,
    &:active,
    &:valid {
      background-color: rgb(226, 239, 241);
      outline: none;
      & + .label {
        transform: translateY(-10%);
        top: -2px;
        z-index: 100;
        font-size: 1rem;
        background-color: #f2f2f2;
      }
    }
  }
  .label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    z-index: 1;
    font-size: 1rem;
    transform: translateY(-60%);
    transition: all 0.3s;
  }
  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s linear;

    &:hover {
      background-color: #2d8032;
      transition: all 0.3s linear;
    }
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
