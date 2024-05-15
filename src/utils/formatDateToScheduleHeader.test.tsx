import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { formateDateToScheduleHeader } from './formatDateToScheduleHeader';

afterEach(() => {
  cleanup();
});

describe('formateDateToScheduleHeader', () => {
  it('should format the date string to a schedule header format', () => {
    const dateString = '2024-08-19';
    render(formateDateToScheduleHeader(dateString));

    expect(screen.getByText('MON')).toBeTruthy();
    expect(screen.getByText('AUG')).toBeTruthy();
    expect(screen.getByText('19')).toBeTruthy();
  });
});
