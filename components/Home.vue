<template>
  <main class="container">
    <section class="main-section">
      <h1>Easily access the service you need, handle your pending work</h1>

      <form @submit.prevent="submit">
        <input
          type="text"
          placeholder="What serve are you searching?"
          v-model="search"
        />
        <Button text="Search" />
      </form>
    </section>
    <section class="middle-sections">
      <div>
        <h3>Get Quality Service</h3>
        <p>
          You can see the quality of the service providers you get offers from,
          thanks to the real customer reviews they received in their previous
          jobs, and you can make your decision with confidence.
        </p>
      </div>
      <img src="../static/qualty.jpg" alt="qualty image" />
    </section>
    <section class="middle-sections mat-background">
      <div>
        <h3>Save Time</h3>
        <p>
          Don't bother going from shop to shop or looking for references from
          people you know for the service you are looking for. Let the offers
          come to your pocket, keep your time with your loved ones.
        </p>
      </div>
      <img src="../static/save-time.jpg" alt="qualty image" />
    </section>
    <section class="middle-sections">
      <div>
        <h3>Be Guaranteed</h3>
        <p>
          In order for you to receive service with peace of mind, the works you
          choose from Armut are under our guarantee.
        </p>
      </div>
      <img src="../static/aggrement.jpg" alt="qualty image" />
    </section>

    <section class="middle-sections mat-background">
      <div>
        <h3>Use Easily</h3>
        <p>
          Answer your questions prepared specifically for the service you will
          receive, within a minute, and easily handle your pending work.
        </p>
      </div>
      <img src="../static/choose-best-time.jpg" alt="qualty image" />
    </section>
  </main>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  useContext,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      search: "",
      messages: [],
    });
    const submit = () => {
      state.search = "";
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

.container {
  .main-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 53vh;
    background-image: url("https://cdni.iconscout.com/illustration/premium/thumb/business-deal-3217531-2689890.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: gray;
    form {
      button {
        @include green-button(1.3rem);
        width: auto;
        padding: 1rem;
      }
      input {
        @include login-register-input;
        padding: 1rem;
        border: none;
        font-size: 1.3rem;
        width: 20rem;
      }
    }
  }
  .mat-background {
    background-color: #f8f8f8;
    flex-direction: row-reverse;
  }
  .middle-sections {
    display: flex;
    justify-content: center;

    div,
    img {
      width: 35vw;
    }
    div {
      margin: auto 0;
    }
  }
}
@media #{$media-tablet} {
  .middle-sections,
  .mat-background {
    display: flex;
    align-items: center;
    flex-direction: column !important;

    div,
    img {
      margin: auto;
      width: 100vw !important;
    }
    div {
      margin: auto 0;
      h3,
      p {
        margin: auto;
        padding: 1rem;
        text-align: center;
      }
    }
  }
}
</style>