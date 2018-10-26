## removeObjectItem

> Takes the result from a response

### What does it do?

If you have a slice of state that is an object, it will:

* Remove a alice of the object

### Import

```js
import { removeObjectItem } from '@seedrs/redux-reducers';
```

### Usage

```js
// Actions
import { createActions } from 'redux-actions';
import { recieveAll } from 'schemas/books';
import { REMOVE_BOOK } from 'constants/actions';

const actions = createActions(
  {},
  REMOVE_BOOK
);

export default actions;
```

```js
// Reducer
import { combineReducers } from 'redux';
import { takeResult } from '@seedrs/redux-reducers';
import { REMOVE_BOOK } from 'constants/books';

const reducer = combineReducers({
  books: removeObjectItem(REMOVE_BOOK, 'id')
});

export default reducer;
```
