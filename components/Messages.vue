 <template>
  <main>
    <aside>
      <ul>
        <nuxt-link
          v-for="user in users"
          :key="user"
          :to="`/user_page/messages/${user}`"
        >
          <MessageUserCard :_id="user" />
        </nuxt-link>
      </ul>
    </aside>

    <div v-if="messages.length > 0" class="message-window">
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
      </li>
      <div>
        <section
          v-for="message in messages"
          :key="message._id"
          :class="message.senderID == senderID ? 'right' : 'left'"
        >
          <p>
            {{ message.message }}
          </p>
        </section>
        <form @submit.prevent="submit">
          <input
            v-model="message"
            type="text"
            id="more-info"
            name="more-info"
            required
            placeholder="Type here"
          />
          <Button text="Send" />
        </form>
      </div>
    </div>
    <div v-else class="empty-message-window">
      <img
        src="https://cdn.armut.com/images/angular/CustomerApp/start-to-chat.png"
        alt="empty messages img"
      />
      <h3>
        Contact from the menu on the left-side, talk details, get your job done
        easily!
      </h3>
    </div>
  </main>
</template>

<script lang='ts'>
import {
  reactive,
  defineComponent,
  toRefs,
  useRoute,
  Ref,
  ref,
} from "@nuxtjs/composition-api";
import { currentUserInfo } from "~/store";
import { useMessage } from "~/store/message";
import { UserMessagesType, UserPageType } from "~/store/types";
import _ from "lodash";
import { useUser } from "~/store/user";
export default defineComponent({
  setup() {
    const state: UserMessagesType = reactive({
      price: "",
      message: "",
      senderID: currentUserInfo._id,
      receiverID: "",
      messages: [],
      users: [],
    });
    const route = useRoute();
    const routeID = route.value.params.id;
    state.receiverID = routeID;
    const { createMessage, getUserMessages } = useMessage();
    const _id = currentUserInfo._id;

    let filteredUsers: string[] = [];

    const getMessages = async () => {
      const messages = getUserMessages(_id);
      messages
        .then((ms: any) => {
          ms.forEach((msg: { receiverID: string; senderID: string }) => {
            filteredUsers.push(msg.receiverID);
            filteredUsers.push(msg.senderID);
          });
        })
        .then(() => {
          const us = _.uniq(filteredUsers);
          state.users = _.filter(us, (user: string) => user !== state.senderID);
        });

      messages.then((msg: any) => {
        state.messages = _.filter(
          msg,
          (obj: { receiverID: string; senderID: string }) =>
            obj.receiverID == routeID || obj.senderID == routeID
        );
      });
    };
    const { getUserInfo } = useUser();
    const user: Ref<UserPageType> = ref({}) as Ref<UserPageType>;
    if (routeID) {
      const data = getUserInfo(routeID);
      data.then((dt: UserPageType) => {
        user.value = dt;
      });
    }
    const emptyForm = (): void => {
      state.price = "";
      state.message = "";
    };
    getMessages();
    const submit = (): void => {
      createMessage(
        state.price,
        state.message,
        state.senderID,
        state.receiverID
      );
      emptyForm();
      getMessages();
    };

    return {
      ...toRefs(state),
      submit,
      user,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
main {
  display: flex;
  aside {
    width: 20rem;
    ul {
      margin: 0;
      padding: 0;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }

  .empty-message-window {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 120px);
    width: 100%;
    background-color: #f3f3f3;
    text-align: center;
  }

  .message-window {
    background-color: #f3f3f3;
    width: 100%;
    height: calc(100vh - 121px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    li {
      list-style: none;
      padding: 0.5rem;
      padding-left: 1rem;
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
    div {
      background-color: #f3f3f3;
      height: calc(100vh - 127px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 2rem;

      section {
        display: flex;
        background-color: #404259;
        padding: 0.5rem 1.2rem;
        margin: 2px;
        max-width: 75%;
        color: white;
        display: inline-block;
        border-radius: 5px;
        box-shadow: 0 0 2px #343a431a, 0 1px 2px #343a4314, 0 1px 4px #343a4314;

        p {
          padding: 0;
          margin: 0.2rem;
        }
      }
      .right {
        align-self: flex-end;
      }
      .left {
        align-self: flex-start;
      }
      form {
        width: 100%;
        display: flex;
        input {
          @include login-register-input;
          width: 100%;
        }
        button {
          @include green-button(1rem);
          width: 5rem;
          margin-left: 0.2rem;
        }
      }
    }
  }
}
</style>

