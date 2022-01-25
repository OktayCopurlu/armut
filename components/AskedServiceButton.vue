<template>
  <nuxt-link
    :to="
      isOffered
        ? `/user-page/messages/${asked_service_user}`
        : `/user-page/asked-service/${id}`
    "
  >
    <Button
      :clickEvent="handleInfo"
      :asked_service_user="asked_service_user"
      :text="isOffered ? 'See Messages' : 'Give Offer'"
      :class="isOffered ? 'yellow darken-2' : ''"
    />
  </nuxt-link>
</template>

<script lang='ts'>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { messageState, currentUserInfo } from "~/store/index";
import { useUser } from "~/store/user";
import _ from "lodash";

export default defineComponent({
  props: ["asked_service_user", "id"],
  setup(props) {
    const handleInfo = (e: { target: { value: string } }) => {
      messageState.receiverID = e.target.value;
    };

    const { getUserInfo } = useUser();
    const isOffered = ref(false);
    const changeText = async () => {
      const data = await getUserInfo(currentUserInfo._id);
      if (_.includes(data.given_offer_service, props.id)) {
        isOffered.value = true;
      } else {
        isOffered.value = false;
      }
    };
    changeText();
    return {
      handleInfo,
      isOffered,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
button {
  @include green-button(1rem);
  width: 93%;
  margin: 0 0.5rem;
  padding: 0.5rem;
}
</style>