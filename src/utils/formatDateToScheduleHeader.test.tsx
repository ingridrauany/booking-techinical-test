import { describe, expect, it } from 'vitest';
import { formateDateToScheduleHeader } from './formatDateToScheduleHeader';

describe('formateDateToScheduleHeader', () => {
  it('if the param is empty, should return a array of empty strings', () => {
    expect(formateDateToScheduleHeader('')).toStrictEqual(['', '', '']);
  });

  it('should format the date string to a schedule header format', () => {
    expect(formateDateToScheduleHeader('2024-08-18')).toStrictEqual(['SUN', 'AUG', '18']);
  });
});
