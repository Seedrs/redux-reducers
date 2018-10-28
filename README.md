## @seedrs/redux-reducers


[![npm version](https://badge.fury.io/js/%40seedrs%2Fredux-reducers.svg)](https://badge.fury.io/js/%40seedrs%2Fredux-reducers) [![Build status](https://badge.buildkite.com/d3580e40ed2858a737c15677c44ddd5f2bc5636f0d0cef5422.svg)](https://buildkite.com/seedrs/redux-reducers) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> A package for reusable reducers.

### Setup

```bash
# With yarn (preferred)
yarn add @seedrs/redux-reducers
```

```bash
npm i @seedrs/redux-reducers --save
```

### Usage

To use the reducers, you can import them as named imports.

For example:

```javascript
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { takeResult } from '@seedrs/redux-reducers';
import { SOME_ACTION } from 'constants/actions';

const reducer = combineReducers({
  some_slice_of_state: handleActions({
    [SOME_ACTION]: () => takeResult(SOME_ACTION)
  }, null)
});

export default reducer
```

For more detailed usage, use the links below:

* [addArrayItems](src/reducers/addArrayItems)
* [isFetching](src/reducers/isFetching)
* [mergeArrays](src/reducers/mergeArrays)
* [mergeObject](src/reducers/mergeObject)
* [removeArrayItems](src/reducers/removeArrayItems)
* [removeObjectItem](src/reducers/removeObjectItem)
* [replaceObject](src/reducers/replaceObject)
* [takeResult](src/reducers/takeResult)
