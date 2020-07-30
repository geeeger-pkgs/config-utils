import getGMT8LocalDate from '../src';

describe('@geeeger/get-gmt8-local-date module', () => {
  it('should be ', () => {
    expect(getGMT8LocalDate(Math.ceil(Date.now() / 1000))).toBeInstanceOf(Date);
  });
});
