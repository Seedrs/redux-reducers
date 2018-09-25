import replaceObject from 'reducers/replaceObject';

describe('reducers', () => {
  const setup = (key) => {
    const REPLACE_ACTION = payload => ({ type: 'REPLACE_ACTION', payload });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = replaceObject(REPLACE_ACTION().type, key);

    return {
      REPLACE_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('replaceObject', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup();

      const state = { 1: 'lamb' };

      const payload = { 1: 'bacon' };

      const expected = state;

      expect(reducer(state, NOT_A_TYPE(payload))).toEqual(expected);
    });

    describe('when a key is passed', () => {
      it('returns the correct state', () => {
        const {
          REPLACE_ACTION,
          reducer
        } = setup('meat');

        const state = { 1: 'lamb' };

        const payload = {
          entities: {
            meat: { 2: 'beef' }
          }
        };

        const expected = { 2: 'beef' };

        expect(reducer(state, REPLACE_ACTION(payload))).toEqual(expected);
      });
    });

    describe('when a key is not passed', () => {
      it('returns the correct state', () => {
        const {
          REPLACE_ACTION,
          reducer
        } = setup();

        const state = { 1: 'chicken' };

        const payload = { 4: 'rabbit', 6: 'veal' };

        const expected = { 4: 'rabbit', 6: 'veal' };

        expect(reducer(state, REPLACE_ACTION(payload))).toEqual(expected);
      });
    });
  });
});
