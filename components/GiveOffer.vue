 <template>
  <div class="main">
    <form @submit.prevent="submit">
      <div class="floating-form">
        <input type="number" min="0" max="10000" step="1 CHF" v-model="price" />
        <label class="label" for="canton">Price</label>
      </div>

      <div class="floating-form">
        <textarea
          v-model="message"
          type="text"
          id="more-info"
          name="more-info"
          required
        /><label class="label" for="more-info">More information</label>
      </div>
      <h2 v-if="price.length > 0">{{ price }} CHF</h2>
      <p>{{ message }}</p>
      <Button text="Give Offer" />
    </form>
  </div>
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
import { messageState, currentUserInfo } from "~/store";
import { useMessage } from "~/store/message";
import { MessageType } from "~/store/types";

export default defineComponent({
  setup() {
    const state: MessageType = reactive({
      price: "",
      message: "",
      senderID: currentUserInfo._id,
      receiverID: messageState.receiverID,
    });

    const { createMessage } = useMessage();

    const emptyForm = (): void => {
      state.price = "";
      state.message = "";
    };

    const submit = (): void => {
      createMessage(
        state.price,
        state.message,
        state.senderID,
        state.receiverID
      );
      emptyForm();
    };

    return {
      ...toRefs(state),
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../static/index";
.main {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 3rem;
  width: 35rem;
  margin: 5rem auto;
  box-shadow: 2px 2px 12px gray;
  * {
    font-size: 1rem;
  }

  .floating-form {
    position: relative;
  }
  input,
  textarea,
  select {
    @include login-register-input;
  }
  .label {
    @include label;
  }
  button {
    @include green-button(1.3rem);
  }
  .radio-buttons {
    display: flex;
    align-items: center;
    * {
      margin: 0.5rem;
      width: auto;
    }
  }
  .categories {
    margin: 0 0.5rem;
    * {
      width: auto;
      padding: 0;
      margin-right: 0.7rem;
    }
  }
}
@media #{$media-mobile} {
  .main {
    width: auto;
    margin: 5vw auto;
    padding: 4vw;
  }
}
</style>

