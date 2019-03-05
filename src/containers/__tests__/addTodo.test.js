import { mount, createLocalVue } from "@vue/test-utils";
import AddTodo from "@/containers/AddTodo.vue";
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("AddTodo.vue", () => {

    let actions;
    let store;

    beforeEach(function() {
        actions = {
            fetchTodoList: jest.fn(),
            deleteTodo: jest.fn(),
            editTodo: jest.fn(),
            addTodo: jest.fn(),
        }
        store = new Vuex.Store({
            actions
        })
    });

    it("addTodo to be called when create.", () => {

        const wrapper = mount(AddTodo, { store, localVue});
        wrapper.vm.createTodo({title: 'hello'});

        expect(actions.addTodo).toHaveBeenCalled();

    });

});
