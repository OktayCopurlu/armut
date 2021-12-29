<template>
  <div class="main">
    <h1>
      Get offer for
      <p>{{ category }}</p>
    </h1>
    <form @submit.prevent="submit">
      <div class="floating-form">
        <select
          name="chooseCanton"
          defaultValue="Choose Canton"
          @change="selectCanton"
        >
          <option value=" ">Choose Canton</option>
          <option
            v-for="canton in cantons"
            :key="canton._id"
            :value="canton.canton"
          >
            {{ canton.canton }}
          </option>
        </select>
      </div>
      <div v-if="cities.length" class="floating-form">
        <select
          name="chooseCity"
          defaultValue="Choose City"
          @change="selectCity"
        >
          <option value=" ">Choose City</option>
          <option v-for="city in cities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </div>
      <div class="floating-form">
        <input type="date" id="city" name="city" required v-model="date" />
      </div>
      <div class="floating-form">
        <textarea
          v-model="message"
          type="text"
          id="more-info"
          name="more-info"
          rows="4"
          required
        /><label class="label" for="more-info">More information</label>
      </div>
      <Button text="Get Offer" />
    </form>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRoute,
  computed,
} from "@nuxtjs/composition-api";
import { CantonType, AskServiceFormType } from "~/store/types";
import { useAsked_service } from "~/store/createAsked_service";
import { useCantons } from "~/store/canton";
import { currentUserInfo, states } from "~/store";
export default defineComponent({
  setup() {
    const state: AskServiceFormType = reactive({
      canton: "",
      city: "",
      message: "",
      date: "",
      category: "",
      cantons: computed(() => states.cantons as CantonType[]),
      cities: computed(() => states.cities),
    });

    const route = useRoute();
    state.category = route.value.path.substring(11).replace(/_/g, " ");

    const { createAsked_service } = useAsked_service();
    const { getCantons, getCities } = useCantons();

    getCantons();

    const selectCanton = async (e: {
      target: { value: string };
    }): Promise<void> => {
      if (e.target.value !== " ") {
        getCities(e.target.value);
        state.canton = e.target.value;
      } else {
        states.cities = [];
      }
    };
    const selectCity = (e: { target: { value: string } }): void => {
      state.city = e.target.value;
    };
    const emptyForm = (): void => {
      state.canton = "";
      state.city = "";
      state.message = "";
      state.date = "";
    };
    const fullname = currentUserInfo.fullname;
    const email = currentUserInfo.email;
    const tel = currentUserInfo.tel;
    const submit = (): void => {
      createAsked_service(
        fullname,
        email,
        tel,
        state.canton,
        state.city,
        state.date,
        state.message,
        state.category
      );
      emptyForm();
    };
    return {
      ...toRefs(state),
      submit,
      selectCanton,
      selectCity,
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
  h1 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    p {
      display: inline;
      font-size: 1.3rem;
      color: red;
    }
  }
  .floating-form {
    position: relative;
  }
  input,
  select,
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

