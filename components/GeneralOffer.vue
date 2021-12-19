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
        /><label class="label" for="search"
          >Search ! what service do you want to get?</label
        >
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
        <input type="date" id="city" name="city" required v-model="city" />
      </div>
      <div class="floating-form">
        <textarea
          v-model="more_info"
          type="text"
          id="more-info"
          name="more-info"
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
  ref,
  Ref,
  useRoute,
} from "@nuxtjs/composition-api";
import { OfferFormType } from "~/store/types";
import { states } from "~/store";
import { useCategoryList } from "~/store/categoryList";

export default defineComponent({
  setup() {
    const state: any = reactive({
      category: "",
      canton: "",
      city: "",
      more_info: "",
      filteredCategories: [],
      categories: computed(() => states.categories),
    });
    const route = useRoute();
    const page = route.value.path.substring(7).replace(/_/g, " ");

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
      state.canton = "";
      state.city = "";
      state.more_info = "";
      state.category = "";
    };

    const submit = (): void => {
      console.log(state.canton, state.city, state.more_info, state.category);
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
  textarea,
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

