## mergeArrays

> Merges the result from a normalised response

### What does it do?

If you have a slice of state that is an array of ids, it will:

* Merge the ids from the normalised response

### Import

```js
import { mergeArrays } from '@seedrs/redux-reducers';
```

### Usage

```js
// Actions
import { createActions } from 'redux-actions';
import { recieveAll } from 'schemas/books';
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from 'constants/actions';

const actions = createActions(
  {
    [GET_BOOKS_REQUEST]: params => (
      {
        params
        method: 'get',
        endpoint: '/api/books'
      }
    ),
    GET_BOOKS_SUCCESS: response => recieveAll(response)
  },
  GET_BOOKS_FAILURE
);

export default actions;
```

```js
// Reducer
import { combineReducers } from 'redux';
import { mergeArrays } from '@seedrs/redux-reducers';
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from 'constants/books';

const reducer = combineReducers({
  bookIds: mergeArrays(GET_BOOKS_SUCCESS)
});

export default reducer;
```
