import { mount } from "@vue/test-utils";
import InputWithButtons from "@/components/InputWithButtons.vue";

describe("InputWithButtons.vue", () => {
    it("emit inputted value when click.", () => {
        const btnText = "Confirm";
        const wrapper = mount(InputWithButtons, {
            propsData: { btnText }
        });

        wrapper.setData({inputValue: 'hello'})

        const button = wrapper.find('el-button')
        button.trigger('click')

        expect(wrapper.text()).toMatch(btnText);
        expect(wrapper.emitted().onClick).toBeTruthy()
        expect(wrapper.emitted().onClick[0][0]).toBe('hello')

    });
});
