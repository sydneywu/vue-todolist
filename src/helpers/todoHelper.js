import moment from 'moment'
import {FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED} from '../constants/todoFilter.js'

export const createTodoItem = ({title, isCompleted}) => {
    return {
        id:null,
        title,
        isCompleted: isCompleted || false,
        creationTime: moment().format()
    }
};

export const editTodoItem = ({id, title, isCompleted, creationTime}) => {
    if(id === null) throw new Error('id is required for edit todo');
    if(isCompleted === null) throw new Error('isComplete is required for edit todo');
    if(title === null) throw new Error('isComplete is required for edit todo');
    if(creationTime === null) throw new Error('creationTime is required for edit todo');
    return {
        id,
        title,
        isCompleted,
        creationTime
    }
};

export const filterTodoItems = ({todoItems, filter}) => {
    if(filter === FILTER_ALL){
        return todoItems
    } else if(filter === FILTER_ACTIVE){
        return todoItems.filter(todoItem => todoItem.isCompleted === false)
    } else if(filter === FILTER_COMPLETED){
        return todoItems.filter(todoItem => todoItem.isCompleted === true)
    } else {
        throw new Error ('not valid filter options')
    }
};