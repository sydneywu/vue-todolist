# vue-todolist

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your unit tests
```
npm run test:unit
```

# API Blueprint

FORMAT: 1A

This API demonstrates what APIs are required in order to completely integrate with the front end vue app.

## POST
This action will add one todoItem and return the updated item with an id.

+ Request (application/json)

        {title: 'milk the cow', isCompleted: true}

+ Response 200

        {id:1, title: 'milk the cow', isCompleted: true}

## GET
This action will get all todoItems.

+ Response 200 (application/json)

        [
          {id:1, title: 'milk the cow', isCompleted: false},
          {id:2, title: 'close the freezer', isCompleted: false},
        ]


## PUT
This action will update one todoItem that corresponds to the id and return the updated item.

+ Request (application/json)

        {id:1, title: 'milk the cow', isCompleted: true}

+ Response 200

        {id:1, title: 'milk the cow', isCompleted: true}

## DELETE
This action will delete one todoItem that corresponds to the id and return object with status true.

+ Request (application/json)

        {id:1, title: 'milk the cow', isCompleted: true}

+ Response 200

        {status: true, error: null}
