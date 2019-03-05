import { mount } from "@vue/test-utils";
import GeneralTable from "@/components/GeneralTable.vue";

describe("GeneralTable.vue", () => {
    it("emit onCheck when click.", () => {

        const wrapper = mount(GeneralTable, {
            propsData: {
                tableData : [{title: 'hello', id:1 , isCompleted: false}],
            }
        });

        wrapper.vm.handleCheck(0, {title: 'hello', id:1 , isCompleted: false});
        expect(wrapper.emitted().onCheck).toBeTruthy();
    });

    it("emit onEdit when click.", () => {

        const wrapper = mount(GeneralTable, {
            propsData: {
                tableData : [{title: 'hello', id:1 , isCompleted: false}],
            }
        });

        wrapper.vm.handleEdit(0, {title: 'hello', id:1 , isCompleted: false});
        expect(wrapper.emitted().onEdit).toBeTruthy();
    });

    it("emit onDelete when click.", () => {

        const wrapper = mount(GeneralTable, {
            propsData: {
                tableData : [{title: 'hello', id:1 , isCompleted: false}],
            }
        });

        wrapper.vm.handleDelete(0, {title: 'hello', id:1 , isCompleted: false});
        expect(wrapper.emitted().onDelete).toBeTruthy();
    });
});
