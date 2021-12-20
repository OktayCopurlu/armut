<template>
  <nav>
    <input type="checkbox" id="toggle" class="toggle-input" />
    <label for="toggle" class="toggle-label"
      ><i class="fas fa-bars"></i><span> MENU</span></label
    >
    <label for="toggle" class="close-label"
      ><i class="fas fa-window-close"></i><span> MENU</span></label
    >
    <ul>
      <li>
        <nuxt-link to="/">Armut</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/cleaning">Cleaning</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/renovation">Renovation</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/transportation">Transportation</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/fixing">Fixing</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/private-lesson">Private Lesson</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/healty">Healty</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/others">Others</nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="!isLogin" to="/register">Register</nuxt-link>
      </li>
      <li class="photo" v-if="photo">
        <nuxt-link v-if="photo" to="/user_page"
          ><img :src="photo" alt="user photo"
        /></nuxt-link>
      </li>
      <li v-else-if="isLogin">
        <nuxt-link to="/user_page">My Account</nuxt-link>
      </li>

      <li>
        <nuxt-link v-if="!isLogin" to="/login">Login</nuxt-link>
        <nuxt-link @click.native="logout" v-else to="/">Logout </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import { userInfo } from "~/store";
import { useLogin } from "~/store/user";
import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  toRefs,
} from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const state: {
      isLogin: boolean | ComputedRef<boolean>;
      photo: string | ComputedRef<boolean>;
    } = reactive({
      isLogin: false,
      photo: "",
    });
    state.isLogin = computed(() => userInfo.isLogin);
    state.photo = computed(() => userInfo.photo);
    const { logout } = useLogin();
    return {
      ...toRefs(state),
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
nav {
  // position: fixed;
  // width: 100%;
}
* {
  margin: 0;
  padding: 0;
  transition: $transition;
  color: $white;
  font-size: 1.2vw;
  text-decoration: none;
  list-style: none;
  z-index: 100;
}
ul {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;

  li {
    padding: 1rem 1vw;
    a {
      opacity: 0.7;
      font-family: $font-family;

      &:hover {
        opacity: 1;
        transition: $transition;
      }
    }
  }
  .photo {
    padding: 0;
    padding-top: 1vw;
    width: 2rem;
    height: 2rem;
    a {
      opacity: 1;
    }
    img {
      border-radius: 100%;
      width: 100%;
      height: 100%;
    }
  }
}

.toggle-input {
  display: none;
}
.toggle-label,
.close-label {
  display: none;
}
@media #{$media-desktop} {
  * {
    font-size: 1.5vw;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      a {
        text-decoration: none;
      }
    }
  }
}

@media #{$media-tablet} {
  * {
    font-size: 1.2rem;
  }
  .toggle-label {
    background-color: black;
    display: block;
    padding: 1rem;
    * {
      opacity: 0.7;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }

  .close-label {
    display: none;
  }
  ul {
    width: 10rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: translateX(-200px);
    height: 100%;
    padding: 0 1rem 0 1rem;
    li {
      padding: 0.4rem;
    }
    .photo {
      padding: 0;
      padding-left: 0.7rem;
      width: 2.5rem;
      a {
        opacity: 1;
      }

      img {
        border-radius: 100%;
        width: 100%;
      }
    }
  }
  .toggle-input:checked ~ ul {
    transform: translateX(0px);
  }
  .toggle-input:checked ~ .close-label {
    background-color: black;
    display: block;
    padding: 1rem;
    * {
      opacity: 0.7;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  .toggle-input:checked ~ .toggle-label {
    display: none;
  }
}
</style>