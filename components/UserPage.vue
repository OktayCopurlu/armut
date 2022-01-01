<template>
  <v-app>
    <div>
      <div class="main">
        <div class="photo">
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*, .heic"
            @change="getFile"
          />
          <label for="photo"><i class="fas fa-camera"></i></label>
          <img v-if="userPhoto" :src="userPhoto" alt="user photo" />
          <img v-else src="../static/person-icon.png" alt="user photo" />
          <p>Change Photo</p>
        </div>
        <form @submit.prevent="submit">
          <label for="fullname">Full name</label>
          <input
            class="input"
            id="fullname"
            type="text"
            name="txt"
            required
            v-model="fullname"
            :default-value="fullname"
          />
          <label for="email">Email</label>

          <input
            class="input"
            id="email"
            type="email"
            name="email"
            required
            v-model="email"
            :default-value="email"
          />
          <section class="canton-city">
            <v-autocomplete
              class="autocomplete"
              solo
              :items="cantons"
              v-model="canton"
              label="Choose Canton"
              @change="selectCanton"
            ></v-autocomplete>
            <v-autocomplete
              class="autocomplete"
              solo
              :items="cities"
              v-model="city"
              label="Choose City"
            ></v-autocomplete>
          </section>
          <label for="address">Address</label>

          <input
            class="input"
            type="text"
            id="address"
            name="address"
            required
            v-model="address"
            :default-value="address"
          />
          <label for="phone">Phone Number</label>
          <input
            class="input"
            v-model="tel"
            type="tel"
            id="phone"
            name="phone"
            required
            :default-value="tel"
          />
          <Button text="Save" />
        </form>
      </div></div
  ></v-app>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  computed,
  ref,
  Ref,
} from "@nuxtjs/composition-api";
import { currentUserInfo, states } from "~/store/index";
import { useEditUser } from "~/store/register";
import storage from "../plugins/firebase";
import {
  getDownloadURL,
  ref as firebaseRef,
  uploadBytesResumable,
} from "firebase/storage";
import { useCantons } from "~/store/canton";
import _ from "lodash";
export default defineComponent({
  setup() {
    const state = reactive({
      _id: currentUserInfo._id,
      fullname: currentUserInfo.fullname,
      email: currentUserInfo.email,
      tel: currentUserInfo.tel,
      address: currentUserInfo.address,
      userPhoto: currentUserInfo.photo,
      provider: currentUserInfo.provider,
      canton: currentUserInfo.canton,
      city: currentUserInfo.city,
    });
    const { editUser, addPhoto } = useEditUser();
    const getFile = (e: {
      target: { files: { [s: string]: unknown } | ArrayLike<unknown> };
    }) => {
      if (e.target.files) {
        Object.values(e.target.files).forEach((element: any) => {
          const photoRef = firebaseRef(storage, `images/${element.name}`);
          const uploadTask = uploadBytesResumable(photoRef, element);
          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
              console.error(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                if (downloadURL) {
                  addPhoto(state._id, downloadURL);
                  state.userPhoto = computed(() => downloadURL);
                }
              });
            }
          );
        });
      }
    };
    const cantons: Ref<boolean[]> = ref([]);
    const cities: Ref<Object[]> = ref([]);
    const { getCantons, getCities } = useCantons();
    const setCantonData = async (): Promise<void> => {
      await getCantons();
      cantons.value = _.map(states.cantons, (obj: { canton: string }) => {
        return obj.canton;
      });
    };
    setCantonData();

    const selectCanton = async (): Promise<void> => {
      await getCities(state.canton);
      cities.value = states.cities;
    };
    selectCanton();
    const submit = (): void => {
      editUser(
        state.address,
        state.email,
        state.fullname,
        state.tel,
        state._id,
        state.canton,
        state.city
      );
    };
    return {
      ...toRefs(state),
      getFile,
      selectCanton,
      cantons,
      cities,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
.canton-city {
  display: flex;

  .autocomplete:nth-child(1) {
    margin-right: 0.2rem;
  }
  .autocomplete:nth-child(2) {
    margin-left: 0.2rem;
  }
}
.main {
  border-radius: 5px;
  padding: 3rem;
  width: 35rem;
  margin: 5rem auto;

  * {
    font-size: 1rem;
  }
  .photo {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 1rem;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      opacity: 0;
      color: white;
      font-weight: bold;
      height: 5rem;
      background-color: black;
      width: 10rem;
      transition: all 0.4s linear;
    }
    img {
      width: 10rem;
      margin-right: 1rem;
    }
    input {
      display: none;
    }
    label {
      cursor: pointer;
      i {
        font-size: 1.3rem;
      }
      &:hover ~ img {
        opacity: 0.8;
        transition: all 0.4s linear;
      }
      &:hover ~ p {
        opacity: 0.8;
        transition: all 0.4s linear;
      }
    }
  }
  label {
    font-weight: bold;
  }
  .input {
    @include login-register-input;
  }

  button {
    @include green-button(1.3rem);
  }
}
</style>