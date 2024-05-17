import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDateRange } from './useDateRange';

vi.mock('@utils/getCurrentWeekMondayAndFriday/getCurrentWeekMondayAndFriday', () => ({
  getCurrentWeekMondayAndFriday: () => vi.fn().mockReturnValue(['2024-05-13', '2024-05-17']),
}));

vi.mock('@utils/addDaysToDate/addDaysToDate', () => ({
  addDaysToDate: () => vi.fn().mockReturnValueOnce(new Date('2024-05-13')).mockReturnValueOnce(new Date('2024-05-17')),
}));

vi.mock('@utils/convertDateToString/convertDateToString', () => ({
  convertDateToString: () => vi.fn().mockReturnValueOnce('2024-05-13').mockReturnValueOnce('2024-05-17'),
}));

describe('useDateRange', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-05-13'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize dateRange with the current week Monday and Friday', async () => {
    const dateRange = {
      startDate: '2024-05-13',
      endDate: '2024-05-17',
    };
    const { result } = renderHook(() => useDateRange());
    expect(result.current.dateRange.startDate).toBe(dateRange.startDate);
    expect(result.current.dateRange.endDate).toBe(dateRange.endDate);
  });

  it('should change dateRange correctly when changeDateRange is called', () => {
    const { result } = renderHook(() => useDateRange());
    const newDateRange = {
      startDate: '2024-05-14',
      endDate: '2024-05-18',
    };

    act(() => {
      result.current.changeDateRange('next');
    });

    expect(result.current.dateRange).toEqual({ startDate: newDateRange.startDate, endDate: newDateRange.endDate });
  });
});
