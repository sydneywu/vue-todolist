import {createTodoItem, editTodoItem, filterTodoItems} from '../todoHelper.js';
import {FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED} from '../../constants/todoFilter.js'

describe('DomainAuth __tests__', function() {
    beforeEach(function(done) {
        done();
    });

    afterEach(function(done) {
        done();
    });

    it('filterTodoItems should return todoItem', async () => {
        let todoList = [
            {title: 'completedTask1', isCompleted: true},
            {title: 'incompleteTask2', isCompleted: false},
            {title: 'incompleteTask3', isCompleted: false},
        ];
        expect(filterTodoItems({todoItems: todoList, filter: FILTER_ALL}).length).toBe(3);
        expect(filterTodoItems({todoItems: todoList, filter: FILTER_ACTIVE}).length).toBe(2);
        expect(filterTodoItems({todoItems: todoList, filter: FILTER_ACTIVE})[0].title).toBe('incompleteTask2');
        expect(filterTodoItems({todoItems: todoList, filter: FILTER_COMPLETED}).length).toBe(1);
        expect(filterTodoItems({todoItems: todoList, filter: FILTER_COMPLETED})[0].title).toBe('completedTask1');
    });

    it('createTodoItem should return todoItem', async () => {
        let newTodo = {
            title: 'new todo item',
        };
        let createdTodo = createTodoItem(newTodo);

        expect(createdTodo.title).toBe(newTodo.title);
        expect(createdTodo.creationTime).toBeDefined();
        expect(createdTodo.isCompleted).toBe(false);
    });

    it('editTodoItem should return todoItem', async () => {
        let existingTodo = {
            title: 'new todo item',
            isCompleted: true,
            id: 1,
            creationTime: '2019-01-01T00:00:00'
        };
        let editedTodo = editTodoItem(existingTodo);

        expect(editedTodo.title).toBe(existingTodo.title);
        expect(editedTodo.creationTime).toBe(existingTodo.creationTime);
        expect(editedTodo.id).toBe(existingTodo.id);
        expect(editedTodo.creationTime).toBe(existingTodo.creationTime);
    });

});