<template>
  <footer class="site-footer">
    <div class="containers">
      <div class="rows">
        <section class="top-section">
          <h6>Categories</h6>
          <ul class="footer-links">
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
              <nuxt-link @click.native="logout" v-else to="/"
                >Logout
              </nuxt-link>
            </li>
          </ul>
        </section>

        <section class="top-section">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li>
              <nuxt-link to="/about">About Us</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/contact">Contact Us</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
            </li>
          </ul>
        </section>
      </div>
      <hr />
    </div>
    <div class="containers">
      <div class="rows bottom">
        <section class="bottom-section">
          <p class="copyright-text">
            Copyright &copy; 2022 All Rights Reserved by
            <strong> Oktay.</strong>
          </p>
        </section>

        <section class="bottom-section">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a class="twitter" href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a>
            </li>
            <li>
              <a class="linkedin" href="#"><i class="fab fa-linkedin"></i></a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  ComputedRef,
  computed,
} from "@nuxtjs/composition-api";
import { currentUserInfo } from "~/store";
import { useLogin } from "~/store/auth";
export default defineComponent({
  setup() {
    const state: {
      isLogin: boolean | ComputedRef<boolean>;
      photo: string | ComputedRef<boolean>;
    } = reactive({
      isLogin: false,
      photo: "",
    });
    state.isLogin = computed(() => currentUserInfo.isLogin);
    state.photo = computed(() => currentUserInfo.photo);
    const { logout } = useLogin();
    return {
      ...toRefs(state),
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.containers {
  padding: 0 5vw;
  .rows {
    display: flex;
    justify-content: center;
    .top-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      h6 {
        margin: 0;
      }
    }
    .bottom-section {
      display: flex;
      justify-content: space-between;
      width: 50%;
    }
  }
}
strong {
  color: #818c92;
}
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
  margin: 1rem 0;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: white;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: white;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
  font-size: 1.3rem;
}
.copyright-text {
  display: flex;
  align-items: center;
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}

.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .top-section {
    width: 50%;
    h6 {
      margin: 0;
    }
  }
  .bottom-section {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  .bottom {
    display: flex;
    flex-direction: column-reverse;
    section {
      width: 100% !important;
      ul {
        width: 100%;
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 1rem;
        width: 100%;
        text-align: center;
      }
    }
  }
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>