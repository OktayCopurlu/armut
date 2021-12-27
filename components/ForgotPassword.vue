<template>
  <div class="main">
    <p class="faild" v-if="isEmailValid === false">Email does not exist!</p>
    <p class="success" v-if="isEmailValid === true">
      Reset Password link has been sent
    </p>

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

      <Button text="Send Reset Password Link" />
    </form>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  ref,
  Ref,
} from "@nuxtjs/composition-api";
import { useForgotPassword } from "~/store/resetPassword";
export default defineComponent({
  setup() {
    const state = reactive({
      email: "",
    });
    const isEmailValid: Ref<boolean | null> = ref(null);
    const emptyForm = (): void => {
      state.email = "";
    };
    const { forgotPassword } = useForgotPassword();

    const submit = async (): Promise<void> => {
      const token = await forgotPassword(state.email);
      if (token) {
        isEmailValid.value = true;
        emptyForm();
      } else {
        isEmailValid.value = false;
      }
    };
    return {
      ...toRefs(state),
      submit,
      isEmailValid,
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

