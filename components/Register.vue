<template>
  <div class="main">
    <form @submit.prevent="submit">
      <div class="floating-form">
        <input
          type="text"
          id="search"
          name="search"
          v-model="search"
          required
        /><label class="label" for="search">What service do you provide?</label>
      </div>
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
      <!-- <select required v-model="category">
        <option value="">Select a service</option>
        <option value="tadilat">Tadilat</option>
        <option value="cleaning">Cleaning</option>
      </select> -->

      <div class="radio-buttons">
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
      <button>Start to Serve</button>
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
} from "@nuxtjs/composition-api";
import { RegisterFormType } from "~/store/types";
import { useStartServe } from "~/store/register";
import { states } from "~/store";
import { useCategory } from "~/store/categories";
export default defineComponent({
  setup() {
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
    const { getAllCategories } = useCategory();
    getAllCategories();

    const search: any = ref("");
    const searchedProducts = computed(() => {
      return state.categories.filter((category) => {
        return category.toLowerCase().indexOf(search.value.toLowerCase()) != -1;
      });
    });
    const isShowing = computed(() => search.value.length > 3);
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

    const { register } = useStartServe();
    const submit = (): void => {
      register(
        state.fullname,
        state.email,
        state.password,
        state.category,
        state.status,
        state.address,
        state.tel
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
$media-mobile: "only screen and (max-width : 600px)";

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

