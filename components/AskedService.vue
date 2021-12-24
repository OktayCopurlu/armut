<template>
  <div class="card-container">
    <div class="card" v-for="category in asked_services" :key="category._id">
      <h3 @click="showProfile">
        <span>{{ category.fullname }}</span>
      </h3>
      <div v-if="modal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h1>{{ category.fullname }}</h1>
        </div>
      </div>
      <section>
        <div>
          <h4>{{ category.category }}</h4>
          <strong>{{ category.canton }}</strong>
        </div>
        <div>
          <p>{{ category.message }}</p>
          <strong>{{ category.city }}</strong>
        </div>
      </section>
      <AskedServiceButton :asked_service_user="category.asked_service_user" :id="category._id" />

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
import { messageState, currentUserInfo, askedService } from "~/store/index";
import { useAsked_service } from "~/store/asked_service";
import { Asked_serviceType } from "~/store/types";
import _ from "lodash";

export default defineComponent({
  setup() {
    const state: Asked_serviceType = reactive({
      asked_services: computed(() => askedService.asked_services),
      userCategory: computed(() => currentUserInfo.category),
      modal: false,
    });
    const handleInfo = (e: { target: { value: string } }) => {
      messageState.receiverID = e.target.value;
    };
    const { getAsked_service } = useAsked_service();
    getAsked_service(state.userCategory);

    const showProfile = () => {
      state.modal = !state.modal;
    };
    return {
      ...toRefs(state),
      handleInfo,
      showProfile,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: $tiny-shadow;
}
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
    cursor: pointer;
    padding-bottom: 1.5rem;
    box-shadow: $tiny-shadow;
    &:hover span {
      display: none;
    }
    &:hover:before {
      display: block;
      content: "See Profile";
    }
  }
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