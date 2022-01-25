<template>
  <AskServe />
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRoute,
} from "@nuxtjs/composition-api";
import { initAuth } from "../../store/auth";
import protectedRouter from "~/protectRouter";
export default defineComponent({
  setup() {
    const state = reactive({});
    const route = useRoute();
    const category = route.value.params.slug;
    initAuth();
    protectedRouter();
    return {
      ...toRefs(state),
      category,
    };
  },
  head() {
    return {
      title: "Get Offer -> " + this.category,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>