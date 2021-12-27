 <template >
  <li>
    <img
      :src="
        user.photo
          ? user.photo
          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png'
      "
      alt="User Photo"
    />
    <span>
      <h4>{{ user.fullname }}</h4>
      <a :href="`tel:${user.tel}`">{{ user.tel }}</a>
      <!-- <strong>{{ price }} CHF</strong> -->
    </span>
  </li>
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from "@nuxtjs/composition-api";
import { currentUserInfo } from "~/store";
import { useMessage } from "~/store/message";
import { UserPageType } from "~/store/types";
import { useUser } from "~/store/user";

export default defineComponent({
  props: ["_id"],
  setup(props: { _id: string; provider: boolean }) {
    const { getUserInfo } = useUser();
    const user: Ref<UserPageType> = ref({}) as Ref<UserPageType>;
    const offers: Ref<Object[]> = ref([]);
    const { getOffer } = useMessage();
    const setOffer = async () => {
      const data = await getUserInfo(props._id);
      user.value = data;
      const bidderID = currentUserInfo.provider
        ? currentUserInfo._id
        : data._id;
      offers.value = await getOffer(bidderID);
      // offer.forEach((elm) => {
      //   offers.value = elm
      // });
    };
    setOffer();
    return {
      user,
      offers,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~/static/index";
li {
  list-style: none;
  padding: 0.5rem;
  padding-left: 1rem;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: rgb(216, 203, 203);
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      margin: 0;
      width: 15rem;
    }
    strong {
      color: red;
      margin: 0;
      width: 15rem;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }

  img {
    width: 3.3rem;
    margin-right: 1rem;
  }
}
</style>