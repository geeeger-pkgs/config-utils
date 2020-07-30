import map from '../src';

describe('@geeeger/local-month-cn module', () => {
  it('should exist', () => {
    expect(Object.keys(map)).toEqual(['default', 'min', 'short']);
    expect(map.default[0]).toEqual('一月');
    expect(map.default['一月']).toEqual(0);
    expect(map.min['1月']).toEqual(0);
    expect(map.min[0]).toEqual('1月');
  });
});
