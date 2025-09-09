import { describe, it, expect } from 'bun:test';
import { validatePhoneNumber, formatPhoneNumber } from './phone';

describe('validatePhoneNumber', () => {
    // --- Valid Numbers ---
    it('should return true for a valid 8-digit number starting with 3', () => {
        expect(validatePhoneNumber('34567890')).toBe(true);
    });

    it('should return true for a valid 8-digit number starting with 2', () => {
        expect(validatePhoneNumber('28123456')).toBe(true);
    });

    it('should return true for a valid 8-digit number starting with 4', () => {
        expect(validatePhoneNumber('44102030')).toBe(true);
    });

    it('should return true for a valid number with country code +509', () => {
        expect(validatePhoneNumber('+50937654321')).toBe(true);
    });

    it('should return true for a valid number with spaces', () => {
        expect(validatePhoneNumber('34 56 78 90')).toBe(true);
    });

    it('should return true for a valid number with hyphens', () => {
        expect(validatePhoneNumber('4455-6677')).toBe(true);
    });

    it('should return true for a valid number with parentheses and spaces', () => {
        expect(validatePhoneNumber('(34) 56-7890')).toBe(true);
    });

    it('should return true for a valid number with mixed formatting and country code', () => {
        expect(validatePhoneNumber('+509 28 12-3456')).toBe(true);
    });

    // --- Invalid Numbers ---
    it('should return false for a number that does not start with 2, 3, or 4', () => {
        expect(validatePhoneNumber('55567890')).toBe(false);
    });

    it('should return false for a number with too few digits', () => {
        expect(validatePhoneNumber('3456789')).toBe(false);
    });

    it('should return false for a number with too many digits', () => {
        expect(validatePhoneNumber('345678901')).toBe(false);
    });

    it('should return false for an empty string', () => {
        expect(validatePhoneNumber('')).toBe(false);
    });

    it('should return false for a string with only non-digit characters', () => {
        expect(validatePhoneNumber('abcd-efgh')).toBe(false);
    });

    it('should return false for a null or undefined input', () => {
        expect(validatePhoneNumber(null as any)).toBe(false);
        expect(validatePhoneNumber(undefined as any)).toBe(false);
    });
});

describe('formatPhoneNumber', () => {
    it('should format to international by default', () => {
        expect(formatPhoneNumber('34567890')).toBe('+509 34 56 78 90');
    });

    it('should format to international with explicit option', () => {
        expect(formatPhoneNumber('+50928123456', { format: 'international' })).toBe('+509 28 12 34 56');
    });

    it('should format to national', () => {
        expect(formatPhoneNumber('4455-6677', { format: 'national' })).toBe('4455-6677');
    });

    it('should format to compact', () => {
        expect(formatPhoneNumber('34 56 78 90', { format: 'compact' })).toBe('+50934567890');
    });

    it('should return null for an invalid number', () => {
        expect(formatPhoneNumber('12345')).toBeNull();
    });

    it('should handle various messy but valid inputs', () => {
        expect(formatPhoneNumber('(34) 56-7890')).toBe('+509 34 56 78 90');
        expect(formatPhoneNumber('+509-4455-6677', { format: 'national' })).toBe('4455-6677');
    });
});
