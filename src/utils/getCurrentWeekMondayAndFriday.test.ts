import { describe, expect, it } from 'vitest';
import { getCurrentWeekMondayAndFriday } from './getCurrentWeekMondayAndFriday';

describe('getCurrentWeekMondayAndFriday', () => {
  it('given a date in year-month-day format, shoud return a date in the day/month/year format', () => {
    const date = new Date('2018-08-19');
    const expectedStartDate = new Date('2018-08-19');
    const expectedEndDate = new Date('2018-08-23');
    expect(getCurrentWeekMondayAndFriday(date)).toBe([expectedStartDate, expectedEndDate]);
  });
});
