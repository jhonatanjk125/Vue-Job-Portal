import nextElementInList from '@/utils/nextElementInList';
import { describe } from 'vitest';

describe('nextElementInList', () => {
  it('should return the next element in the list', () => {
    const list = ['A', 'B', 'C', 'D', 'E'];
    const value = 'C';
    const result = nextElementInList(list, value);
    expect(result).toBe('D');
  });

  describe('when the value is the last element in the list', () => {
    it('should return the first element in the list', () => {
      const list = ['A', 'B', 'C', 'D', 'E'];
      const value = 'E';
      const result = nextElementInList(list, value);
      expect(result).toBe('A');
    });
  });
});