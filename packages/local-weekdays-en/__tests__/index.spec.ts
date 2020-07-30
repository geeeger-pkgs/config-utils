import map from '../src';

describe('@geeeger/local-weekdays-en module', () => {
  it('should exist', () => {
    expect(Object.keys(map)).toEqual(['default', 'min', 'short']);
    expect(map.default[0]).toEqual('Sunday');
    expect(map.default['Sunday']).toEqual(0);
    expect(map.min['Su']).toEqual(0);
    expect(map.min[0]).toEqual('Su');
  });
});
