import moment from 'moment'

export const createTodoItem = ({title, isCompleted}) => {
    return {
        id:null,
        title,
        isCompleted: isCompleted || false,
        creationTime: moment().format()
    }
};

export const editTodoItem = ({id, title, isCompleted, creationTime}) => {
    if(!id) throw new Error('id is required for edit todo');
    if(!isCompleted) throw new Error('isComplete is required for edit todo');
    if(!title) throw new Error('isComplete is required for edit todo');
    if(!creationTime) throw new Error('creationTime is required for edit todo');

    return {
        id,
        title,
        isCompleted,
        creationTime
    }
};