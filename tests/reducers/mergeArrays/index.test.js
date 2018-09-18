import mergeArrays from 'reducers/mergeArrays';

describe('reducers', () => {
  const setup = () => {
    const MERGE_ACTION = payload => ({ type: 'MERGE_ACTION', payload });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = mergeArrays(MERGE_ACTION().type);

    return {
      MERGE_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('mergeArrays', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup();

      expect(reducer(undefined, NOT_A_TYPE())).toEqual([]);
    });

    it('returns the merged array', () => {
      const {
        MERGE_ACTION,
        reducer
      } = setup();

      const state = ['halibut', 'cod'];

      const payload = {
        result: 'sea bass'
      };

      const expected = ['halibut', 'cod', 'sea bass'];

      expect(reducer(state, MERGE_ACTION(payload))).toEqual(expected);
    });

    describe('when the arrays are not unique', () => {
      it('it returns the merged array with unique values', () => {
        const {
          MERGE_ACTION,
          reducer
        } = setup();

        const state = ['swordfish', 'tuna'];

        const payload = {
          result: 'tuna'
        };

        const expected = ['swordfish', 'tuna'];

        expect(reducer(state, MERGE_ACTION(payload))).toEqual(expected);
      });
    });
  });
});
