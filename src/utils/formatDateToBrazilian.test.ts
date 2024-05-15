import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { formatDateToBrazilian } from './formatDateToBrazilian';

afterEach(() => {
  cleanup();
});

describe('formateDateToBrazilian', () => {
  it('if the param is empty, should return a empty string', () => {
    expect(formatDateToBrazilian('')).toBe('');
  });

  it('given a date in year-month-day format, shoud return a date in the day/month/year format', () => {
    expect(formatDateToBrazilian('2018-08-19')).toBe('19/08/2018');
  });
});
