import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
import * as domMatchers from 'vitest-dom/matchers';

expect.extend(domMatchers);

afterEach(() => {
  cleanup();
});
