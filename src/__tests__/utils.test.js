import { getRandomInt } from '../utils';

describe('Utility functions', () => {
  it('gets a random integer between the range', () => {
    const int = getRandomInt(1, 10);
    expect(int).toBeGreaterThanOrEqual(1);
    expect(int).toBeLessThanOrEqual(10);
  });
});
