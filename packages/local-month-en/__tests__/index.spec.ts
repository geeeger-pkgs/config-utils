import map from '../src';

describe('@geeeger/local-month-en module', () => {
  it('should exist', () => {
    expect(Object.keys(map)).toEqual(['default', 'min', 'short']);
    expect(map.default[0]).toEqual('January');
    expect(map.default['January']).toEqual(0);
    expect(map.min['Jan']).toEqual(0);
    expect(map.min[0]).toEqual('Jan');
  });
});
