import { mount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Navigation", () => {
  test("check form if it is correct", async () => {
    const wrapper = mount(Navigation, {
      stubs: {
        "nuxt-link": true,
        "any-other-child": true,
      },
    });
  });
});
