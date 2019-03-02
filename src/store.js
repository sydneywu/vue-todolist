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
            localStorage.setItem('TODO_STORE', JSON.stringify(state))
        },
        editTodo(state, todoItem) {
            let clonedTodoItems = [].concat(state.todoItems);
            let matchedIndex = clonedTodoItems.findIndex(x => x.id === todoItem.id);
            clonedTodoItems[matchedIndex] = todoItem;
            state.todoItems = clonedTodoItems;
            localStorage.setItem('TODO_STORE', JSON.stringify(state))
        },
        retrieveTodoListFromStore (state, msg){
            let todoStoreString = localStorage.getItem('TODO_STORE');
            let todoStore = JSON.parse(todoStoreString);
            state.todoItems = todoStore.todoItems
            state.nextTodoId = todoStore.nextTodoId
        }

    },
    getters: {
        todoItems: state=> state.todoItems
    },
    actions: {}
});
