<template>
  <Home />
</template>


<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRouter,
} from "@nuxtjs/composition-api";
import { initAuth } from "../store/user";
import protectedRouter from "~/auth";

export default defineComponent({
  setup() {
    const state = reactive({});
    initAuth();
    protectedRouter();

    const router = useRouter();
    router.push("/");

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>