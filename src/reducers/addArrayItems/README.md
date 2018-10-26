## addArrayItems

> Add an item or items to an array

### What does it do?

If you have a slice of state that is an array, you can:

* Add an item to the array
* Add items (from an array) to the array

### Import

```js
import { addArrayItems } from '@seedrs/redux-reducers';
```

### Usage

```js
// Actions
import { createActions } from 'redux-actions';
import { SOME_ACTION } from 'constants/actions';

const actions = createActions(
  {},
  SOME_ACTION
);

export default actions;
```

```js
// Reducer
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addArrayItems } from '@seedrs/redux-reducers';
import { SOME_ACTION } from 'constants/actions';

const reducer = combineReducers({
  slice: handleActions({
    [SOME_ACTION]: () => addArrayItems(SOME_ACTION)
  }, [])
});

export default reducer;
```

> Adding an item to an array

```js
someAction('a') // ['a']

someAction('b') // ['a', 'b']
```

> Adding multiple items to the array

```js
someAction(['b', 'c', 'd']) // ['a', 'b', 'c', 'd']
```

Please note that the reducer will ensure all items in the array are unique.
