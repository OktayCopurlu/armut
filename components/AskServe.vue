<template>
  <v-app>
    <div class="main">
      <h1>
        Get offer for
        <p>{{ category }}</p>
      </h1>
      <form @submit.prevent="submit">
        <v-autocomplete
          class="autocomplete"
          solo
          :items="cantons"
          v-model="canton"
          label="Choose Canton"
          @change="selectCanton"
        ></v-autocomplete>
        <v-autocomplete
          v-if="cities.length"
          class="autocomplete"
          solo
          :items="cities"
          v-model="city"
          label="Choose City"
        ></v-autocomplete>

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
      </form></div
  ></v-app>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRoute,
} from "@nuxtjs/composition-api";
import { AskServiceFormType } from "~/store/types";
import { useAsked_service } from "~/store/createAsked_service";
import { useCantons } from "~/store/canton";
import { currentUserInfo, states } from "~/store";
import _ from "lodash";
export default defineComponent({
  setup() {
    const state: AskServiceFormType = reactive({
      canton: "",
      city: "",
      message: "",
      date: "",
      category: "",
      cantons: [],
      cities: [],
    });
    const route = useRoute();
    state.category = route.value.path.substring(11).replace(/_/g, " ");

    const { createAsked_service } = useAsked_service();
    const { getCantons, getCities } = useCantons();
    const setCantonData = async (): Promise<void> => {
      await getCantons();
      state.cantons = _.map(states.cantons, (obj: { canton: string }) => {
        return obj.canton;
      });
    };
    setCantonData();

    const selectCanton = async (): Promise<void> => {
      await getCities(state.canton);
      state.cities = states.cities;
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

