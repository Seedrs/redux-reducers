## isFetching

> Returns a boolean depending on an AJAX request

### What does it do?

If you have an AJAX request, it will:

* Return true when the request is made
* Return false when the response is returned

### Import

```js
import { isFetching } from '@seedrs/redux-reducers';
```

### Usage

```js
// Actions
import { createActions } from 'redux-actions';
import {
  REQUEST_ACTION,
  SUCCESS_ACTION,
  FAILURE_ACTION
} from 'constants/actions';

const actions = createActions(
  {
    [REQUEST_ACTION]: params => (
      {
        params
        method: 'get',
        endpoint: '/api'
      }
    )
  },
  SUCCESS_ACTION,
  FAILURE_ACTION
);

export default actions;
```

```js
// Reducer
import { combineReducers } from 'redux';
import { isFetching } from '@seedrs/redux-reducers';
import {
  REQUEST_ACTION,
  SUCCESS_ACTION,
  FAILURE_ACTION
} from 'constants/actions';

const reducer = combineReducers({
  isLoading: isFetching([
    REQUEST_ACTION,
    SUCCESS_ACTION,
    FAILURE_ACTION
  ], true)
});

export default reducer;
```
