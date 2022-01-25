<template>
  <GiveOffer />
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRoute,
} from "@nuxtjs/composition-api";
import { initAuth } from "../../../store/auth";
import protectedRouter from "~/protectRouter";
export default defineComponent({
  setup() {
    const state = reactive({});
    initAuth();
    protectedRouter();
    const route = useRoute();
    const id = route.value.params.id;
    return {
      ...toRefs(state),
      id,
    };
  },
  head() {
    return {
      title: "Give Offer -> " + this.id,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>