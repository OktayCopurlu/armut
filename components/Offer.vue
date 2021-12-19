<template>
  <div class="main">
    <form @submit.prevent="submit">
      <div class="floating-form">
        <input
          type="text"
          id="canton"
          name="canton"
          required
          v-model="canton"
        /><label class="label" for="canton">Canton</label>
      </div>
      <div class="floating-form">
        <input
          type="text"
          id="city"
          name="city"
          required
          v-model="city"
        /><label class="label" for="city">City</label>
      </div>
      <div class="floating-form">
        <input type="date" id="city" name="city" required v-model="date" />
      </div>
      <div class="floating-form">
        <textarea
          v-model="more_info"
          type="text"
          id="more-info"
          name="more-info"
          rows="4"
          required
        /><label class="label" for="more-info">More information</label>
      </div>
      <button>Get Offer</button>
    </form>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  computed,
  useRoute,
} from "@nuxtjs/composition-api";
import { OfferFormType } from "~/store/types";
import { useOffer } from "~/store/createOffer";
export default defineComponent({
  setup() {
    const state: OfferFormType = reactive({
      canton: "",
      city: "",
      more_info: "",
      date: "",
      category: "",
    });
    const route = useRoute();
    state.category = route.value.path.substring(7).replace(/_/g, " ");
    const { createOffer } = useOffer();
    const emptyForm = (): void => {
      state.canton = "";
      state.city = "";
      state.more_info = "";
      state.date = "";
    };
    const submit = (): void => {
      createOffer(
        state.canton,
        state.city,
        state.date,
        state.more_info,
        state.category
      );
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
  padding: 3rem;
  width: 35rem;
  margin: 5rem auto;
  box-shadow: 2px 2px 12px gray;
  * {
    font-size: 1rem;
  }

  .floating-form {
    position: relative;
  }
  input,
  textarea {
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

