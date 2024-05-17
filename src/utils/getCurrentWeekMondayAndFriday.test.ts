import { describe, expect, it } from 'vitest';
import { getCurrentWeekMondayAndFriday } from './getCurrentWeekMondayAndFriday';

describe('getCurrentWeekMondayAndFriday', () => {
  it('should return the monday and friday of a specific week given a date', () => {
    const date = new Date('2024-05-15');
    expect(getCurrentWeekMondayAndFriday(date)).toStrictEqual(['2024-05-13', '2024-05-17']);
  });

  it('should return the monday and friday when the current date is the first day of week', () => {
    const date = new Date('2024-05-13');
    expect(getCurrentWeekMondayAndFriday(date)).toStrictEqual(['2024-05-13', '2024-05-17']);
  });

  it('should return the monday and friday when the current date is the last day of week', () => {
    const date = new Date('2024-05-17');
    expect(getCurrentWeekMondayAndFriday(date)).toStrictEqual(['2024-05-13', '2024-05-17']);
  });

  it('should return the monday and friday when the current date is a sunday', () => {
    const date = new Date('2024-05-18');
    expect(getCurrentWeekMondayAndFriday(date)).toStrictEqual(['2024-05-13', '2024-05-17']);
  });

  it('should return the monday and friday when the current date is a saturday', () => {
    const date = new Date('2024-05-19');
    expect(getCurrentWeekMondayAndFriday(date)).toStrictEqual(['2024-05-13', '2024-05-17']);
  });
});
