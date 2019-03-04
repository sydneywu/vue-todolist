import { mount } from "@vue/test-utils";
import InputWithButtons from "@/components/InputWithButtons.vue";

describe("InputWithButtons.vue", () => {
    it("renders props.btnText when passed", () => {
        const btnText = "Confirm";
        const wrapper = mount(InputWithButtons, {
            propsData: { btnText, initialValue: 'hello' }
        });
        const input = wrapper.find('el-input');
        input.element.value = 'hello';
        input.trigger('input');

        console.log(wrapper.vm.inputValue)
        wrapper.setData({inputValue: 'bye'})
        console.log(wrapper.vm.inputValue)

        const button = wrapper.find('el-button')
        button.trigger('click')

        console.log(wrapper.vm.inputValue)
        console.log(wrapper.emitted().onClick)

        expect(wrapper.text()).toMatch(btnText);
        expect(wrapper.emitted().onClick).toBeTruthy()
        expect(wrapper.emitted().onClick).toBeTruthy()

    });
});
