import { mount, createLocalVue } from "@vue/test-utils";
import TodoList from "@/containers/TodoList.vue";
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TodoList.vue", () => {

    let actions;
    let store;

    beforeEach(function() {
        actions = {
            fetchTodoList: jest.fn(),
            deleteTodo: jest.fn(),
            editTodo: jest.fn(),
            addTodo: jest.fn(),
        };
        store = new Vuex.Store({
            actions
        })
    });

    it("editTodo to be called when check.", () => {

        const wrapper = mount(TodoList, { store, localVue});
        wrapper.vm.onCheck({id:1, title: 'hello', isCompleted: 'true'});

        expect(actions.editTodo).toHaveBeenCalled();

    });

    it("delete to be called when onDelete.", () => {

        const wrapper = mount(TodoList, { store, localVue});
        wrapper.vm.onDelete({id:1, title: 'hello', isCompleted: 'true'});

        expect(actions.deleteTodo).toHaveBeenCalled();

    });
});
