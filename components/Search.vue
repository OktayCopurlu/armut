<template>
  <section class="main-section">
    <h1>Easily access the service you need, handle your pending work</h1>

    <form @submit.prevent="submit">
      <input
        type="text"
        placeholder="What serve are you searching?"
        v-model="search"
      />
      <Button text="Search" />
    </form>
  </section>
</template>

<script lang='ts'>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { search } from "~/store";

export default defineComponent({
  setup() {
    const submit = () => {
      search.value = "";
    };

    return {
      submit,
      search,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 53vh;
  background-image: url("https://cdni.iconscout.com/illustration/premium/thumb/business-deal-3217531-2689890.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: gray;
  form {
    button {
      @include green-button(1.3rem);
      width: auto;
      padding: 1rem;
    }
    input {
      @include login-register-input;
      padding: 1rem;
      border: none;
      font-size: 1.3rem;
      width: 20rem;
    }
  }
}

@media #{$media-tablet} {
}
</style>