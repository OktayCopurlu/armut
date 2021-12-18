<template>
  <div class="card-container">
    <div class="card">
      <img
        src="https://cdn.armut.com/images/services/tr:w-278,h-168/00727-koltuk-yikama-temizleme.jpg"
        alt="cleaning img"
      />
      <section>
        <h4>Home Cleaning</h4>
        <p>123 Professional</p>
        <p>4.5 (2.000.000 comments)</p>
      </section>
      <button>Rezervation</button>
    </div>
    <div class="card">
      <img
        src="https://cdn.armut.com/images/services/tr:w-278,h-168/00727-koltuk-yikama-temizleme.jpg"
        alt="cleaning img"
      />
      <section>
        <h4>Home Cleaning</h4>
        <p>123 Professional</p>
        <p>4.5 (2.000.000 comments)</p>
      </section>
      <button>Rezervation</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.card {
  border-radius: 5px;
  border: 1px solid gray;
  margin: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  section {
    padding: 0.5rem;
    * {
      margin: 0.1rem;
      padding: 0.1rem;
    }
  }
  button {
    margin: 0 0.5rem;
    padding: 0.5rem;
    border: none;
    background-color: green;
    color: white;
    font-size: 1rem;
    border-radius: 4px;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      background-color: rgb(11, 78, 11);

      transition: all 0.2s linear;
    }
  }
}
</style>