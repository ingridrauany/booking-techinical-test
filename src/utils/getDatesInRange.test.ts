import { describe, expect, it } from 'vitest';
import { getDatesInRange } from './getDatesInRange';

describe('getDatesInRange', () => {
  it('should return the five dates of a interval', () => {
    expect(getDatesInRange('2024-05-15', '2024-05-18')).toStrictEqual([
      '2024-05-15',
      '2024-05-16',
      '2024-05-17',
      '2024-05-18',
    ]);
  });

  it('if the start date or end date are empty should return a empty array', () => {
    expect(getDatesInRange('', '2024-05-15')).toStrictEqual([]);
    expect(getDatesInRange('2024-05-15', '')).toStrictEqual([]);
  });
});
