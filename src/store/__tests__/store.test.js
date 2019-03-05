import {mutations} from '../store.js';

describe('store __tests__', function() {
    beforeEach(function(done) {
        done();
    });

    afterEach(function(done) {
        done();
    });

    it('add a todo item and increment the nextTodoId', () => {
        let state = {
            todoItems: [
                { title:'hello', id:1, isCompleted: false }
            ],
            nextTodoId: 2
        };
        mutations.ADD_TODO(state, { title:'bye', id:null, isCompleted: false });
        expect(state.todoItems.length === 2);
        expect(state.todoItems[1].title === 'bye');
        expect(state.todoItems[1].id === 2);
        expect(state.nextTodoId === 3)
    });

    it('edit a todo item', () => {
        let state = {
            todoItems: [
                { title:'hello', id:1, isCompleted: false }
            ],
            nextTodoId: 2
        };
        mutations.EDIT_TODO(state, { title:'bye', id:1, isCompleted: false });
        expect(state.todoItems.length === 1);
        expect(state.todoItems[0].title === 'bye');
        expect(state.nextTodoId === 2)
    });

    it('delete a todo item', () => {
        let state = {
            todoItems: [
                { title:'hello', id:1, isCompleted: false }
            ],
            nextTodoId: 2
        };
        mutations.EDIT_TODO(state, { title:'bye', id:1, isCompleted: false });
        expect(state.todoItems.length === 0);
        expect(state.nextTodoId === 2)
    });

});