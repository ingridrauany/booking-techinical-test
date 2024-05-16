import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CalendarHeaderDate } from '.';

describe('CalendarHeaderDate', () => {
  it('should render the component with the correct date', () => {
    render(<CalendarHeaderDate date={'2024-08-19'} />);

    expect(screen.getByText('AUG')).toBeTruthy();
    expect(screen.getByText('MON 19')).toBeTruthy();
  });
});
