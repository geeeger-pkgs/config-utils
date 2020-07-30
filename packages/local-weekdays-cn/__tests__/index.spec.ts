import map from '../src';

describe('@geeeger/local-weekdays-cn module', () => {
  it('should exist', () => {
    expect(Object.keys(map)).toEqual(['default', 'min', 'short']);
    expect(map.default[0]).toEqual('星期日');
    expect(map.default['星期日']).toEqual(0);
    expect(map.min['日']).toEqual(0);
    expect(map.min[0]).toEqual('日');
  });
});
