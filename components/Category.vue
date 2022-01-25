<template>
  <main class="containers">
    <Search />
    <div class="card-containers">
      <div
        class="card"
        v-for="category in searchedCategories.length > 0
          ? searchedCategories
          : categories"
        :key="category.category"
      >
        <img
          src="https://cdn.armut.com/images/services/tr:w-278,h-168/00727-koltuk-yikama-temizleme.jpg"
          alt="cleaning img"
        />
        <section>
          <h4>{{ category.category }}</h4>
          <p>
            <i class="fas fa-user-friends"></i
            >{{ category.users.length }} Professional
          </p>
          <!-- <p>4.5 (2.000.000 comments)</p> -->
        </section>
        <nuxt-link :to="`/ask-serve/${category.category.replace(/ /g, '_')}`">
          <Button :value="category.category" :text="'Rezervation'"
        /></nuxt-link>
      </div>
    </div>
  </main>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRoute,
  computed,
} from "@nuxtjs/composition-api";
import _ from "lodash";
import { search, states } from "~/store";
import { useCategory } from "~/store/pageCategories";
import { CategoryType } from "~/store/types";

export default defineComponent({
  setup() {
    const state: CategoryType = reactive({
      categories: computed(() => states.mainCategory),
    });

    const route = useRoute();
    const page = route.value.path.substring(1);
    const { getCategory } = useCategory();
    getCategory(page);

    const searchedCategories = computed(() => {
      return state.categories.filter((category) => {
        return category.category.toLowerCase().indexOf(search.value.toLowerCase()) != -1;
      });
    });
    return {
      ...toRefs(state),
      searchedCategories,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
.card-containers {
  display: flex;
  flex-wrap: wrap;
  font-family: $font-family;
}
.card {
  border-radius: 5px;
  border: 1px solid $gray;
  margin: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: $tiny-shadow;
  section {
    padding: 0.5rem;

    * {
      margin: 0.1rem;
      padding: 0.1rem;
    }
    h4 {
      color: $category-color;
    }
  }
  button {
    @include green-button(1rem);
    width: 93%;
    margin: 0 0.5rem;
    padding: 0.5rem;
  }
}
</style>