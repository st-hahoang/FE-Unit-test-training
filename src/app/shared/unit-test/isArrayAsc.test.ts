/* eslint-disable no-use-before-define */
import { isArrayAsc } from './isArrayAsc';

describe('Check array ascending', () => {
  describe('Input is not an array', () => {
    test('string', () => {
      expect(isArrayAsc('a')).toBe(false);
    });
    test('null', () => {
      expect(isArrayAsc(null)).toBe(false);
    });
    test('boolean', () => {
      expect(isArrayAsc(true)).toBe(false);
      expect(isArrayAsc(false)).toBe(false);
    });
    test('undefined', () => {
      expect(isArrayAsc(undefined)).toBe(false);
    });
    test('object', () => {
      expect(isArrayAsc({ a: 1, b: 2 })).toBe(false);
    });
    test('function', () => {
      expect(isArrayAsc(() => {})).toBe(false);
    });
  });
  describe('Array length < 2', () => {
    test('Array length = 0 ', () => {
      expect(isArrayAsc([])).toBe(false);
    });
    test('Array length = 1', () => {
      expect(isArrayAsc([0])).toBe(false);
    });
  });
  describe('Array length >= 2', () => {
    test('Validate number array false', () => {
      expect(isArrayAsc(['x', 0, 1])).toBe(false);
      expect(isArrayAsc([true, 0, 1])).toBe(false);
      expect(isArrayAsc([false, 0, 1])).toBe(false);
      expect(isArrayAsc([undefined, 0, 1])).toBe(false);
      expect(isArrayAsc([null, 0, 1])).toBe(false);
      expect(isArrayAsc([{}, 0, 1])).toBe(false);
      expect(isArrayAsc([() => {}, 0, 1])).toBe(false);
    });
    test('Array is not ascending', () => {
      expect(isArrayAsc([0, 1, 3, 2, 5])).toBe(false);
    expect(isArrayAsc([-1.1, -1.2, -1.4])).toBe(false);
    });
    test('Array is ascending', () => {
      expect(isArrayAsc([0, 1, 2])).toBe(true);
      expect(isArrayAsc([1, 1, 2])).toBe(true);
      expect(isArrayAsc([-1, 0, 1])).toBe(true);
    expect(isArrayAsc([1.1, 1.2, 1.4])).toBe(true);
    expect(isArrayAsc([-1.4, -1.2, -1.1])).toBe(true);
    });
  });
});
