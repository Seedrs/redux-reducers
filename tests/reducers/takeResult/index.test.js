import result from 'reducers/takeResult';

describe('reducers',() => {
  const setup = () => {
    const SUCCESS_ACTION = payload => ({ type: 'SUCCESS_ACTION', payload });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = result(
      SUCCESS_ACTION().type
    );

    return {
      SUCCESS_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('result', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup();

      const state = ['rum', 'absinthe'];

      const payload = ['tequila'];

      const expected = state;

      expect(reducer(state, NOT_A_TYPE(payload))).toEqual(expected);
    });

    it('returns the value in results', () => {
      const {
        SUCCESS_ACTION,
        reducer
      } = setup();

      const payload = { result: { result: 1 } };

      expect(reducer(undefined, SUCCESS_ACTION(payload))).toEqual(1);
    });
  });
});
