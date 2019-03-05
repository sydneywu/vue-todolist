import { mount } from "@vue/test-utils";
import GeneralFilter from "@/components/GeneralFilter.vue";

describe("GeneralFilter.vue", () => {
    it("emit onChange when click.", () => {

        const wrapper = mount(GeneralFilter, {
            propsData: {
                filterOptions : ['all', 'active', 'completed'],
                defaultFilter : 'all'
            }
        });

        wrapper.findAll('el-option').at(1).trigger('change');
        expect(wrapper.emitted().onChange).toBeTruthy();
    });
});
