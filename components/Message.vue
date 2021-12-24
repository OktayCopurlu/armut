 <template>
  <main>
    <aside :class="apperance ? 'show-list' : 'hide-list'">
      <ul>
        <nuxt-link
          v-for="user in users"
          :key="user"
          @click.native="hideList"
          :to="`/user_page/messages/${user}`"
        >
          <MessageUserCard :_id="user" />
        </nuxt-link>
      </ul>
    </aside>

    <div
      v-if="messages.length > 0"
      :class="!apperance ? 'message-window existy' : 'message-window not-exist'"
    >
      <MessageWith :user="user" :senderID="senderID" :showList="showList" />

      <div>
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
        </div>
        <VEmojiPicker
          emojisByRow="8"
          @select="selectEmoji"
          :class="display ? 'block' : 'none'"
        />
        <form @submit.prevent="submit">
          <label class="emoji-label" @click="changeDisplay">😀</label>
          <input
            v-model="message"
            type="text"
            id="more-info"
            name="more-info"
            required
            placeholder="Type here"
          />
          <button><i class="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </div>

    <EmpyMessageWindow v-else />
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
  useContext,
} from "@nuxtjs/composition-api";
import { currentUserInfo } from "~/store";
import { useMessage } from "~/store/message";
import { UserMessagesType, UserPageType } from "~/store/types";
import _ from "lodash";
import { useUser } from "~/store/user";
import { VEmojiPicker } from "v-emoji-picker";
export interface SomeType {
  _id: string;
  senderID: string;
  message: string;
}
[];
export default defineComponent({
  components: {
    VEmojiPicker,
  },
  setup() {
    const state: UserMessagesType = reactive({
      price: "",
      message: "",
      senderID: currentUserInfo._id,
      receiverID: "",
      messages: [],
      users: [],
      display: false,
      apperance: true,
    });
    const showList = () => {
      state.apperance = true;
    };

    const hideList = () => {
      state.apperance = false;
    };
    const { createMessage, getUserMessages } = useMessage();

    const changeDisplay = () => {
      state.display = !state.display;
    };

    const selectEmoji = (emoji: {
      aliases: string[];
      category: string;
      data: string;
    }) => {
      state.message = emoji.data;
      state.display = !state.display;
    };

    const route = useRoute();
    const routeID = route.value.params.id;
    state.receiverID = routeID;
    let filteredUsers: string[] = [];
    const getMessages = async (): Promise<void> => {
      try {
        const messages: any = await getUserMessages(state.senderID);
        await messages.forEach(
          (msg: { receiverID: string; senderID: string }) => {
            filteredUsers.push(msg.receiverID);
            filteredUsers.push(msg.senderID);
          }
        );

        const us = _.uniq(filteredUsers);
        state.users = _.filter(us, (user: string) => user !== state.senderID);

        state.messages = _.filter(
          messages,
          (obj: { receiverID: string; senderID: string }) =>
            obj.receiverID == state.receiverID ||
            obj.senderID == state.receiverID
        );
      } catch (error) {
        console.error(error);
      }
    };
    const { getUserInfo } = useUser();
    const user: Ref<UserPageType> = ref({}) as Ref<UserPageType>;
    if (state.receiverID) {
      const data = getUserInfo(state.receiverID);
      data.then((dt: UserPageType) => {
        user.value = dt;
      });
    }
    const emptyForm = (): void => {
      state.price = "";
      state.message = "";
    };

    getMessages();

    const context = useContext();
    const io = context.app.$nuxtSocket({
      name: "main",
    });

    const socket = io.connect();

    socket.on("receive-message", async (message: any) => {
      state.messages.push(message);
    });
    const submit = async (): Promise<void> => {
      const price = state.price;
      const message = state.message;
      const senderID = state.senderID;
      const receiverID = state.receiverID;

      socket.emit("send-message", { price, message, senderID, receiverID });

      await createMessage(price, message, senderID, receiverID);
      emptyForm();
      await getMessages();
    };

    return {
      ...toRefs(state),
      submit,
      changeDisplay,
      selectEmoji,
      showList,
      hideList,
      user,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~/static/index";

.block {
  height: 79rem !important;
  width: 100% !important;
  transition: all 0.3s !important;
}
.none {
  height: 0 !important;
  width: 100% !important;
  transition: all 0.3s !important;
  transform: translateY(10px);
}
.emoji-label {
  font-size: 1.6rem;
  padding: 0.5rem;
  padding-bottom: 0.8rem;
  cursor: pointer;
}
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
    overflow: hidden;

    div {
      background-color: #f3f3f3;
      height: calc(100vh - 183px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;

      div {
        height: 100%;
        padding: 0 3rem;
        section {
          display: flex;
          background-color: #404259;
          padding: 0.5rem 1.2rem;
          margin: 2px;
          max-width: 75%;
          color: white;
          display: inline-block;
          border-radius: 5px;
          box-shadow: 0 0 2px #343a431a, 0 1px 2px #343a4314,
            0 1px 4px #343a4314;

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
      }
      form {
        width: 100%;
        display: flex;
        align-items: center;
        z-index: 100;
        background-color: #f3f3f3;
        input {
          @include login-register-input;
          width: 90%;
        }
        button {
          @include green-button(1.2rem);
          width: auto;
          border-radius: 100%;
          padding: auto;
          margin-left: 0.5rem;
        }
      }
    }
  }
}
@media #{$media-tablet} {
  main {
    .not-exist {
      width: 0;
      transition: all 0.2s ease-out;
    }
    .exist {
      transition: all 0.2s ease-out;
      width: 100%;
    }
    .hide-list {
      width: 0;
    }
    .show-list {
      width: 100%;
      transition: all 0.2s ease-out;

      ul {
        margin: 0;
        padding: 0;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
    .hide-list {
      transition: all 0.2s ease-out;
      width: 0;
    }
  }
}
</style>

