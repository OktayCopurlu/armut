<template>
  <div class="main">
    <form @submit.prevent="submit">
      <div class="floating-form" v-if="provider">
        <input
          type="text"
          id="search"
          name="search"
          v-model="search"
          required
        /><label class="label" for="search">What service do you provide?</label>
      </div>
      <div v-if="provider">
        <div class="categories" v-for="ctgry in searchedProducts" :key="ctgry">
          <input
            v-if="isShowing"
            type="radio"
            v-model="category"
            :value="ctgry"
            :id="ctgry"
            name="categories"
          />
          <label v-if="isShowing" :for="ctgry">{{ ctgry }}</label>
        </div>
      </div>
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
    </form>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  computed,
  ref,
  Ref,
} from "@nuxtjs/composition-api";
import { RegisterFormType } from "~/store/types";
import { useStartServe } from "~/store/register";
import { states } from "~/store";
import { useCategoryList } from "~/store/categoryList";
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

      filteredCategories: [],
      categories: computed(() => states.categories),
    });

    const { register } = useStartServe();
    const { getAllCategoryList } = useCategoryList();
    getAllCategoryList();

    const search: Ref<string> = ref("");
    const searchedProducts = computed(() => {
      return state.categories.filter((category) => {
        return category.toLowerCase().indexOf(search.value.toLowerCase()) != -1;
      });
    });
    const isShowing = computed(() => search.value.length > 2);

    const emptyForm = (): void => {
      state.fullname = "";
      state.email = "";
      state.password = "";
      state.tel = "";
      state.address = "";
      state.status = "";
      state.category = "";
      state.service = "";
    };
    const provider = props.provider;

    const submit = (): void => {
      register(
        state.fullname,
        state.email,
        state.password,
        state.category,
        state.status,
        state.address,
        state.tel,
        provider
      );
      emptyForm();


    };
    return {
      ...toRefs(state),
      submit,
      searchedProducts,
      search,
      isShowing,
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

