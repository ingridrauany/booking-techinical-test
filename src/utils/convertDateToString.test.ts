import { describe, expect, it } from 'vitest';
import { convertDateToString } from './convertDateToString';

describe('convertDateToString', () => {
  it('should return the date in string format', () => {
    expect(convertDateToString(new Date('2018-08-19'))).toStrictEqual('2018-08-19');
  });
});
