import removeObjectItem from 'reducers/removeObjectItem';

describe('reducers', () => {
  const setup = (key) => {
    const MERGE_ACTION = payload => ({ type: 'MERGE_ACTION', payload });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = removeObjectItem(MERGE_ACTION().type, key);

    return {
      MERGE_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('removeObjectItem', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup('sauce');

      const state = { 1: 'buffalo', 2: 'ketchup' };

      const payload = {
        sauce: 1
      };

      const expected = state;

      expect(reducer(state, NOT_A_TYPE(payload))).toEqual(expected);
    });

    it('returns the correct object', () => {
      const {
        MERGE_ACTION,
        reducer
      } = setup('sauce');

      const state = { 1: 'mayonaise', 2: 'mustard', 3: 'hollandaise' };

      const payload = {
        sauce: 3
      };

      const expected = { 1: 'mayonaise', 2: 'mustard' };

      expect(reducer(state, MERGE_ACTION(payload))).toEqual(expected);
    });
  });
});
