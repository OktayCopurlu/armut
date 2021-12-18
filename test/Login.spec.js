import { mount } from "@vue/test-utils";
import Login from "@/components/Login.vue";

describe("Login", () => {
  test("check form if it is correct", async () => {
    const wrapper = mount(Login);

    const inputEmail = wrapper.find("input[name='email']");
    const inputPassword = wrapper.find("input[name='pswd']");
    const form = wrapper.find("form");

    await inputEmail.setValue("my@mail.com");
    expect(inputEmail.element.value).toBe("my@mail.com");

    await inputPassword.setValue("123456");
    expect(inputPassword.element.value).toBe("123456");

    await form.trigger("submit");
    expect(inputEmail.element.value).toBe("");
    expect(inputPassword.element.value).toBe("");
  });
});
