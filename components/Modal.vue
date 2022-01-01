<template>
  <v-dialog width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="red lighten-2"
        width="100%"
        height="50"
        dark
        v-bind="attrs"
        v-on="on"
        @click="openModal"
      >
        {{ name }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 lighten-2 d-flex justify-center title">
        <img v-if="photo" :src="photo" alt="" />
        <h1 v-else>
          {{ avatar }}
        </h1>
      </v-card-title>

      <v-card-text>
        <table>
          <tbody>
            <tr>
              <td><strong>Name</strong> : {{ fullname }}</td>
            </tr>
            <tr>
              <td><strong>Canton</strong> : {{ canton }}</td>
            </tr>
            <tr>
              <td><strong>City</strong> : {{ city }}</td>
            </tr>
            <tr>
              <td>
                <strong>Phone</strong> :
                <a :href="`tel:${tel}`"
                  ><i class="fas fa-phone-square-alt"></i> {{ tel }}</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong> :
                <a :href="`mailto:${email}`"
                  ><i class="fas fa-envelope"></i> {{ email }}</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <nuxt-link
          :to="
            isOffered
              ? `/user_page/messages/${_id}`
              : `/user_page/asked_service/${id}`
          "
        >
          <v-btn
            :class="
              isOffered ? 'yellow darken-2 white--text' : 'green white--text'
            "
          >
            {{ isOffered ? "See Messages" : "Give Offer" }}
          </v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  ref,
} from "@nuxtjs/composition-api";
import _ from "lodash";
import { currentUserInfo } from "~/store";
import { useUser } from "~/store/user";
interface ModalType {
  canton: string;
  city: string;
  email: string;
  fullname: string;
  photo: string | null;
  tel: string;
  _id: string;
  avatar: string;
}

export default defineComponent({
  props: ["userID", "name", "id"],

  setup(props) {
    const state: ModalType = reactive({
      avatar: "",
      canton: "",
      city: "",
      email: "",
      fullname: "",
      photo: "",
      tel: "",
      _id: "",
    });
    const isOffered = ref(false);
    const { getUserInfo } = useUser();
    const openModal = async () => {
      const user: ModalType = await getUserInfo(props.userID);

      state.canton = user.canton;
      state.city = user.city;
      state.email = user.email;
      state.fullname = user.fullname;
      state.photo = user.photo;
      state.tel = user.tel;
      state._id = user._id;

      const username = state.fullname;
      const lastName = username.split(" ").pop() as string;
      const firstName = username.split(" ").shift() as string;
      const avatar = firstName.charAt(0) + lastName.charAt(0);
      state.avatar = avatar.toUpperCase();

      const data = await getUserInfo(currentUserInfo._id);
      if (_.includes(data.given_offer_service, props.id)) {
        isOffered.value = true;
      } else {
        isOffered.value = false;
      }
    };
    return {
      ...toRefs(state),
      openModal,
      isOffered,
    };
  },
});
</script>

<style lang="scss" scoped>
* {
  font-size: 1.2rem;
  color: black;
  padding: 0.4rem;
}
a {
  color: black;
  text-decoration: none;
}
.title {
  img {
    border-radius: 1rem;
    width: 10rem;
  }
  h1 {
    background-color: rgb(109, 17, 109);
    color: white;
    padding: 1.2rem;
    border-radius: 100%;
    font-size: 2rem;
  }
}
table {
  strong {
    display: inline-block;
    width: 5rem;
  }
}
</style>