import removeArrayItems from 'reducers/removeArrayItems';

describe('reducers', () => {
  const setup = (key = null) => {
    const MERGE_ACTION = payload => ({ type: 'MERGE_ACTION', payload });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = removeArrayItems(MERGE_ACTION().type, key);

    return {
      MERGE_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('removeArrayItems', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup();

      expect(reducer(undefined,NOT_A_TYPE())).toEqual([]);
    });

    describe('when a key is passed', () => {
      describe('when the value is a string', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup('cheeses');

          const state = ['cheddar'];

          const payload = {
            cheeses: 'cheddar'
          };

          expect(reducer(state, MERGE_ACTION(payload))).toEqual([]);
        });
      });

      describe('when the value is an array', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup('cheeses');

          const state = ['brie', 'stilton', 'gouda', 'swiss'];

          const payload = {
            cheeses: ['brie', 'gouda']
          };

          const expected = ['stilton', 'swiss'];

          expect(reducer(state, MERGE_ACTION(payload))).toEqual(expected);
        });
      });
    });

    describe('when a key is not passed', () => {
      describe('when the value is a string', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup();

          const state = ['mexican', 'babybel', 'goats'];

          const payload = 'goats';

          const expected = ['mexican', 'babybel'];

          expect(reducer(state, MERGE_ACTION(payload))).toEqual(expected);
        });
      });

      describe('when the value is an array', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup();

          const state = ['compte', 'wensleydale'];

          const payload = ['wensleydale'];

          const expected = ['compte'];

          expect(reducer(state, MERGE_ACTION(payload))).toEqual(expected);
        });
      });
    });
  });
});
