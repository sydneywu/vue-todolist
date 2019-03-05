import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";
const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";

export const state = {
    todoItems: [],
    nextTodoId: 1
}

export const mutations = {
    ADD_TODO(state, todoItem) {
        let newTodoItem = Object.assign(todoItem, {id: state.nextTodoId});
        let clonedTodoItems = [].concat(state.todoItems);
        clonedTodoItems.push(newTodoItem);
        state.todoItems = clonedTodoItems;
        state.nextTodoId = state.nextTodoId + 1;
        localStorage.setItem('TODO_STORE', JSON.stringify(state))
    },
    EDIT_TODO(state, todoItem) {
        let clonedTodoItems = [].concat(state.todoItems);
        let matchedIndex = clonedTodoItems.findIndex(x => x.id === todoItem.id);
        clonedTodoItems[matchedIndex] = todoItem;
        state.todoItems = clonedTodoItems;
        localStorage.setItem('TODO_STORE', JSON.stringify(state))
    },
    DELETE_TODO(state, todoItem) {
        let clonedTodoItems = [].concat(state.todoItems);
        let matchedIndex = clonedTodoItems.findIndex(x => x.id === todoItem.id);
        clonedTodoItems.splice(matchedIndex, 1);
        state.todoItems = clonedTodoItems;
        localStorage.setItem('TODO_STORE', JSON.stringify(state))
    },
    FETCH_TODO_SUCCESS(state, {todoItems, nextTodoId}) {
        console.log(todoItems);
        console.log(nextTodoId);
        state.todoItems = todoItems
        state.nextTodoId = nextTodoId
    }
}

export const getters = {
    todoItems: state => state.todoItems
}

export const actions = {
    fetchTodoList({commit}) {
        let todoStoreString = localStorage.getItem('TODO_STORE');
        let todoStore = JSON.parse(todoStoreString);
        commit(FETCH_TODO_SUCCESS, {todoItems: todoStore.todoItems, nextTodoId: todoStore.nextTodoId})
    },
    deleteTodo({commit}, payload) {
        commit(DELETE_TODO, payload.todoItem)
    },
    editTodo({commit}, payload) {
        commit(EDIT_TODO, payload.todoItem)
    },
    addTodo({commit}, payload) {
        commit(ADD_TODO, payload.todoItem)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
