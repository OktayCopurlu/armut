import { mount } from "@vue/test-utils";
import StartServe from "~/components/RegisterServisProvider.vue";

describe("StartService", () => {
  test("test form if it is correct", async () => {
    const wrapper = mount(StartServe);

    const form = wrapper.find("form");
    const inputEmail = wrapper.find("input[name='email']");
    const inputFullname = wrapper.find("input[name='txt']");
    const inputPassword = wrapper.find("input[name='pswd']");
    const radioPerson = wrapper.find("input[id='person']");
    const radioCompany = wrapper.find("input[id='company']");
    const inputAddress = wrapper.find("input[id='address']");
    const inputPhone = wrapper.find("input[id='phone']");

    await inputEmail.setValue("my@mail.com");
    expect(inputEmail.element.value).toBe("my@mail.com");

    await inputFullname.setValue("Fullname");
    expect(inputFullname.element.value).toBe("Fullname");

    await inputPassword.setValue("123456");
    expect(inputPassword.element.value).toBe("123456");

    await radioCompany.setChecked();
    expect(radioCompany.element.value).toBe("company");

    await radioPerson.setChecked();
    expect(radioPerson.element.value).toBe("person");

    await inputAddress.setValue("address");
    expect(inputAddress.element.value).toBe("address");

    await inputPhone.setValue("phone");
    expect(inputPhone.element.value).toBe("phone");

    await form.trigger("submit");

    expect(inputEmail.element.value).toBe("");
    expect(inputFullname.element.value).toBe("");
    expect(inputPassword.element.value).toBe("");
    expect(inputAddress.element.value).toBe("");
    expect(inputPhone.element.value).toBe("");
  });
});
