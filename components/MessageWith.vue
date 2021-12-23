 <template>
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
    </span>
    <button class="back-button" @click="showList">
      <i class="fas fa-chevron-circle-right"></i>
    </button>
  </li>
</template>

<script lang='ts'>
import { reactive, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: ["user", "showList"],
  setup() {
    const state = reactive({});
  },
});
</script>

<style lang="scss" scoped>
@import "~/static/index";
.back-button {
  display: none;
}
li {
  list-style: none;
  padding: 1rem;
  display: flex;
  background-color: #c9c0c0;
  span {
    display: flex;
    align-items: center;
    h4 {
      margin: 0 1rem;
    }
    a {
      margin-left: 1rem;
      text-decoration: none;
      color: black;
    }
  }

  img {
    width: 3.3rem;
    margin-right: 1rem;
  }
}
@media #{$media-tablet} {
  li {
    display: flex;
    justify-content: space-between;
  }
  .back-button {
    display: inline;
    background-color: #c9c0c0;
    max-height: 3rem;
    border: none;
    font-size: 1.5rem;
  }
}
</style>

