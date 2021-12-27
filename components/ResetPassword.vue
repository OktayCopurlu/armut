<template>
  <div class="main">
    <p class="faild" v-if="doesEmailSent === false">Password couldn't reset!</p>
    <div class="success" v-if="doesEmailSent === true">
      <p>Password has been reset successfully...</p>
      <nuxt-link to="/login">Go to Login Page</nuxt-link>
    </div>
    <form v-else @submit.prevent="submit">
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
        /><label class="label" for="password">New Password</label>
      </div>
      <div class="floating-form">
        <input
          type="password"
          name="pswd"
          id="new-password"
          required
          v-model="confirm_password"
        /><label class="label" for="new-password">Confirm Password</label>
      </div>
      <p v-if="!isConfirm" class="faild">
        Error! Confirm Password is not matching
      </p>
      <Button text="Reset Password" />
    </form>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRoute,
  useRouter,
  ref,
  Ref,
} from "@nuxtjs/composition-api";
import { useForgotPassword } from "~/store/resetPassword";
export default defineComponent({
  setup() {
    const state = reactive({
      email: "",
      password: "",
      confirm_password: "",
      isConfirm: true,
    });
    const doesEmailSent: Ref<boolean | null> = ref(null);
    const route = useRoute();
    const token = route.value.params.id;
    const emptyForm = (): void => {
      state.email = "";
      state.password = "";
      state.confirm_password = "";
    };
    const { resetPassword } = useForgotPassword();
    const submit = async (): Promise<void> => {
      if (state.password === state.confirm_password) {
        state.isConfirm = true;
        const result = await resetPassword(state.email, token, state.password);
        if (result) {
          doesEmailSent.value = true;
          emptyForm();
        } else {
          doesEmailSent.value = false;
        }
      } else {
        state.isConfirm = false;
      }
    };
    return {
      ...toRefs(state),
      submit,
      doesEmailSent,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
.main {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 3rem;
  width: 30rem;
  margin: 5rem auto;
  box-shadow: 2px 2px 12px gray;
  * {
    font-size: 1rem;
  }
  .faild {
    background-color: #e57373;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
  }
  .success {
    background-color: lighten($green, 10%);
    padding: 1rem;
    color: white;
    border-radius: 4px;
    text-align: center;
    a {
      color: blue;
      font-size: 1.1rem;
    }
  }
  .floating-form {
    position: relative;
  }
  input,
  select {
    @include login-register-input;
  }
  .label {
    @include label;
  }
  button {
    @include green-button(1.3rem);
  }
  .radio-buttons {
    display: flex;
    align-items: center;
    * {
      margin: 0.5rem;
      width: auto;
    }
  }
  .categories {
    margin: 0 0.5rem;
    * {
      width: auto;
      padding: 0;
      margin-right: 0.7rem;
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

