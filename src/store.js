import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoItems: [],
        nextTodoId: 1
    },
    mutations: {
        addTodo(state, todoItem) {
            let newTodoItem = Object.assign(todoItem, {id: state.nextTodoId});
            let clonedTodoItems = [].concat(state.todoItems);
            clonedTodoItems.push(newTodoItem);
            state.todoItems = clonedTodoItems;
            state.nextTodoId = state.nextTodoId + 1;
        }
    },
    getters: {
        todoItems: state=> state.todoItems
    },
    actions: {}
});
