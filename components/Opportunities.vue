<template>
  <div class="card-container">
    <div class="card" v-for="category in categories" :key="category._id">
      <img
        src="https://cdn.armut.com/images/services/tr:w-278,h-168/00727-koltuk-yikama-temizleme.jpg"
        alt="cleaning img"
      />
      <section>
        <div>
          <h4>{{ category.category }}</h4>
          <strong>{{ category.canton }}</strong>
        </div>
        <div>
          <p>{{ category.more_info }}</p>
          <strong>{{ category.city }}</strong>
        </div>
      </section>
      <nuxt-link :to="`/give_offer/${category.category.replace(/ /g, '_')}`">
        <Button :value="category.category" :text="'Give Offer'"
      /></nuxt-link>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  computed,
} from "@nuxtjs/composition-api";
import { userInfo } from "~/store/index";
import { useOpportunity } from "~/store/opportunity";
import { Categories, OpportunityType } from "~/store/types";

export default defineComponent({
  setup() {
    const state: OpportunityType = reactive({
      categories: [],
      userCategory: computed(() => userInfo.category),
    });

    const { getOpportunity } = useOpportunity();
    const result = getOpportunity(state.userCategory);
    result.then((category) => (state.categories = category as Categories[]));

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
.card-container {
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
    div {
      display: flex;
      justify-content: space-between;
      h4 {
        color: $category-color;
      }
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