import { mount } from "@vue/test-utils";
import InputWithButtons from "@/components/InputWithButtons.vue";

describe("InputWithButtons.vue", () => {
    it("renders props.btnText when passed", () => {
        const btnText = "Confirm";
        const wrapper = mount(InputWithButtons, {
            propsData: { btnText }
        });
        expect(wrapper.text()).toMatch(btnText);
    });
});
