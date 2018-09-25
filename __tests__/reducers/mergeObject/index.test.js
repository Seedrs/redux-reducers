import mergeObject from 'reducers/mergeObject';

describe('reducers',() => {
  const setup = (key = undefined) => {
    const MERGE_ACTION = payload => ({ type: 'MERGE_ACTION', payload });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = mergeObject(MERGE_ACTION().type, key);

    return {
      MERGE_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('mergeObject', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup();

      expect(reducer(undefined,NOT_A_TYPE())).toEqual({});
    });

    describe('when a entity is passed', () => {
      it('returns the merged state', () => {
        const {
          MERGE_ACTION,
          reducer
        } = setup('icecream');
        const payload = {
          entities: {
            icecream: {
              a: 1
            }
          }
        };

        expect(reducer(undefined,MERGE_ACTION(payload))).toEqual({ a: 1 });
      });
    });

    describe('when the merge action matches', () => {
      describe('when the intial state is not empty', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup();
          const payload = { a: 1, b: 2, c: 2 };

          expect(reducer({ a: 1, b: 1 },MERGE_ACTION(payload))).toEqual(payload);
        });
      });

      describe('when the initial state is empty', () => {
        it('returns the merged state', () => {
          const {
            MERGE_ACTION,
            reducer
          } = setup();
          const payload = { a: 1, b: 1 };

          expect(reducer({},MERGE_ACTION(payload))).toEqual(payload);
        });
      });
    });
  });
});
