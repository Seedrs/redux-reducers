import addArrayItems from 'reducers/addArrayItems';

describe('reducers', () => {
  const setup = (key = null) => {
    const MERGE_ACTION = payload => ({ type: 'MERGE_ACTION', payload });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = addArrayItems(MERGE_ACTION().type, key);

    return {
      MERGE_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('addArrayItems', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup();

      expect(reducer(undefined, NOT_A_TYPE())).toEqual([]);
    });

    describe('when a key is passed', () => {
      describe('when the value is a string', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup('breweries');

          const state = ['brew_dog', 'crate'];

          const payload = {
            breweries: 'fullers'
          };

          expect(reducer(state, MERGE_ACTION(payload))).toEqual(['brew_dog', 'crate', 'fullers']);
        });
      });

      describe('when the value is an array', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup('breweries');

          const state = ['truman', 'kernel', 'hiver'];

          const payload = {
            breweries: ['wild', 'wiper']
          };

          const expected = ['truman', 'kernel', 'hiver', 'wild', 'wiper'];

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

          const state = ['beavertown', 'camden'];

          const payload = 'redchurch';

          expect(reducer(state, MERGE_ACTION(payload))).toEqual(['beavertown', 'camden', 'redchurch']);
        });
      });

      describe('when the value is an array', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup();

          const state = ['partizan', 'hammerton'];

          const payload = ['five_points', 'meantime'];

          const expected = ['partizan', 'hammerton', 'five_points', 'meantime'];

          expect(reducer(state, MERGE_ACTION(payload))).toEqual(expected);
        });
      });
    });
  });
});
