<template>
  <v-app>
    <div class="main">
      <form @submit.prevent="submit">
        <v-autocomplete
          class="autocomplete"
          solo
          v-model="category"
          :items="categories"
          label="Choose Service"
        ></v-autocomplete>
        <div class="radio-buttons" v-if="provider">
          <input
            v-model="status"
            type="radio"
            id="person"
            name="whoAreYou"
            value="person"
            required
          />
          <label for="person"> Person</label>

          <input
            v-model="status"
            type="radio"
            id="company"
            name="whoAreYou"
            value="company"
            required
          />
          <label for="company">Company</label><br />
        </div>

        <div class="floating-form">
          <input
            id="full-name"
            type="text"
            name="txt"
            required
            v-model="fullname"
          /><label class="label" for="full-name">Full Name</label>
        </div>
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
        <section class="canton-city">
          <v-autocomplete
            class="autocomplete"
            solo
            :items="cantons"
            v-model="canton"
            label="Choose Canton"
            @change="selectCanton"
          ></v-autocomplete>
          <v-autocomplete
            class="autocomplete"
            solo
            :items="cities"
            v-model="city"
            label="Choose City"
            @change="selectCanton"
          ></v-autocomplete>
        </section>
        <div class="floating-form">
          <input
            type="text"
            id="address"
            name="address"
            required
            v-model="address"
          /><label class="label" for="address">Address</label>
        </div>
        <div class="floating-form">
          <input
            v-model="tel"
            type="tel"
            id="phone"
            name="phone"
            required
          /><label class="label" for="phone">Phone</label>
        </div>
        <Button :text="button_text" />
      </form></div
  ></v-app>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  computed,
} from "@nuxtjs/composition-api";
import { RegisterFormType } from "~/store/types";
import { useStartServe } from "~/store/register";
import { states } from "~/store";
import { useCategoryList } from "~/store/categoryList";
import { useCantons } from "~/store/canton";
import _ from "lodash";
export default defineComponent({
  props: ["button_text", "provider"],
  setup(props) {
    const state: RegisterFormType = reactive({
      fullname: "",
      email: "",
      password: "",
      tel: "",
      address: "",
      status: "",
      category: "",
      service: "",
      canton: "",
      city: "",
      filteredCategories: [],
      categories: computed(() => states.categories),
      cantons: [],
      cities: [],
    });

    const { register } = useStartServe();
    const { getAllCategoryList } = useCategoryList();
    getAllCategoryList();

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
      state.fullname = "";
      state.email = "";
      state.password = "";
      state.tel = "";
      state.address = "";
      state.status = "";
      state.category = "";
      state.service = "";
      state.canton = "";
      state.city = "";
    };
    const provider = props.provider;

    const submit = (): void => {
      register(
        state.fullname,
        state.email,
        state.password,
        state.category,
        state.status,
        state.canton,
        state.city,
        state.address,
        state.tel,
        provider
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
.canton-city {
  display: flex;
  .autocomplete:nth-child(1) {
    margin-right: 0.2rem;
  }
  .autocomplete:nth-child(2) {
    margin-left: 0.2rem;
  }
}
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

