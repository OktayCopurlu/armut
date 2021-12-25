<template>
  <div class="card-container">
    <div class="card" v-for="category in rezervations" :key="category._id">
      <h3>
        {{ category.category }}
      </h3>

      <p>{{ category.message }}</p>
      <nuxt-link to="/user_page/messages">
        <Button :text="'See Offers'"
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
import { currentUserInfo, askedService } from "~/store/index";
import { useAsked_service } from "~/store/asked_service";
import { RezervationType } from "~/store/types";

export default defineComponent({
  setup() {
    const state: RezervationType = reactive({
      rezervations: computed(() => askedService.asked_services),
      _id: computed(() => currentUserInfo._id),
    });

    const { getUserRezervations } = useAsked_service();
    getUserRezervations(state._id);

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
  min-width: 18rem;
  h3 {
    text-align: center;
    padding-bottom: 1.5rem;
    margin-bottom: 0;
    box-shadow: $tiny-shadow;
  }
  p {
    text-align: center;
  }
  button {
    @include green-button(1rem);
    width: 93%;
    margin: 0 0.5rem;
    padding: 0.5rem;
  }
}
</style>