import isFetching from 'reducers/isFetching';

describe('reducers',() => {
  const setup = (initialState = false) => {
    const REQUEST_ACTION = () => ({ type: 'REQUEST_ACTION' });
    const SUCCESS_ACTION = () => ({ type: 'SUCCESS_ACTION' });
    const FAILURE_ACTION = () => ({ type: 'FAILURE_ACTION' });
    const NOT_A_TYPE = () => ({ type: 'NOT_A_TYPE' });

    const reducer = isFetching([
      REQUEST_ACTION().type,
      SUCCESS_ACTION().type,
      FAILURE_ACTION().type
    ],initialState);


    return {
      REQUEST_ACTION,
      SUCCESS_ACTION,
      FAILURE_ACTION,
      NOT_A_TYPE,
      reducer
    };
  };

  describe('isFetching', () => {
    it('returns the initial state', () => {
      const {
        NOT_A_TYPE,
        reducer
      } = setup();

      expect(reducer(undefined,NOT_A_TYPE())).toEqual(false);
    });

    describe('when the initialState is set to true', () => {
      describe('and no action matches', () => {
        it('returns the initial state', () => {
          const {
            NOT_A_TYPE,
            reducer
          } = setup(true);

          expect(reducer(undefined,NOT_A_TYPE())).toEqual(true);
        });
      });
    });
    describe('on REQUEST_ACTION', () => {
      it('it returns true', () => {
        const {
          REQUEST_ACTION,
          reducer
        } = setup();

        expect(reducer(undefined,REQUEST_ACTION())).toEqual(true);
      });
    });

    describe('on SUCCESS_ACTION', () => {
      it('returns false', () => {
        const {
          SUCCESS_ACTION,
          reducer
        } = setup();

        expect(reducer(true,SUCCESS_ACTION())).toEqual(false);
      });
    });

    describe('on FAILURE_ACTION', () => {
      it('returns false', () => {
        const {
          FAILURE_ACTION,
          reducer
        } = setup();

        expect(reducer(true,FAILURE_ACTION())).toEqual(false);
      });
    });
  });
});
