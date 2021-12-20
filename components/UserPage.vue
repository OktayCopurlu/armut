<template>
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
import { useEditUser } from "~/store/register";
import storage from "../plugins/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default defineComponent({
  setup() {
    const state = reactive({
      _id: userInfo._id,
      fullname: userInfo.fullname,
      email: userInfo.email,
      tel: userInfo.tel,
      address: userInfo.address,
      userPhoto: userInfo.photo,
      provider: userInfo.provider,
    });
    const { editUser, addPhoto } = useEditUser();

    const getFile = (e: {
      target: { files: { [s: string]: unknown } | ArrayLike<unknown> };
    }) => {
      if (e.target.files) {
        Object.values(e.target.files).forEach((element: any) => {
          const photoRef = ref(storage, `images/${element.name}`);
          const uploadTask = uploadBytesResumable(photoRef, element);
          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
              console.log(error);
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

    const submit = (): void => {
      editUser(
        state.address,
        state.email,
        state.fullname,
        state.tel,
        state._id
      );
    };
    return {
      ...toRefs(state),
      getFile,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";


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