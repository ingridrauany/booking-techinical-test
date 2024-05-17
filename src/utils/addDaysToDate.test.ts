import { describe, expect, it } from 'vitest';
import { addDaysToDate } from './addDaysToDate';

describe('addDaysToDate', () => {
  it('given a date sum', () => {
    expect(addDaysToDate('2018-08-19', 1)).toStrictEqual(new Date('2018-08-20T00:00:00.000Z'));
    expect(addDaysToDate('2018-08-19', -1)).toStrictEqual(new Date('2018-08-18T00:00:00.000Z'));
  });
});
