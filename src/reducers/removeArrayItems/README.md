## removeArrayItems

> Remove an item or items from an array

### What does it do?

If you have a slice of state that is an array, you can:

* Remove an item from the array
* Remove items from the array

### Import

```js
import { removeArrayItems } from '@seedrs/redux-reducers';
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
import { removeArrayItems } from '@seedrs/redux-reducers';
import { SOME_ACTION } from 'constants/actions';

const reducer = combineReducers({
  slice: handleActions({
    [SOME_ACTION]: () => removeArrayItems(SOME_ACTION)
  }, [])
});

export default reducer;
```

```js
// ['a', 'b', 'c']

someAction('a') // ['b', 'c']

someAction(['b', 'c']) // []
```
