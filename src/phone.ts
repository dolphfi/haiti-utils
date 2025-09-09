// Internal helper to clean and get the core 8-digit number
function getCleanedNumber(phoneNumber: string): string | null {
    if (!phoneNumber) {
        return null;
    }

    // Remove country code, spaces, hyphens, and parentheses
    const cleaned = phoneNumber
        .replace(/^\+?509/g, '') // Remove country code +509
        .replace(/[\s-()]/g, ''); // Remove spaces, hyphens, parentheses

    // Check if the cleaned number is exactly 8 digits and starts with 2, 3, or 4
    const regex = /^[234]\d{7}$/;
    if (regex.test(cleaned)) {
        return cleaned;
    }

    return null;
}

/**
 * Validates a Haitian phone number.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} `true` if the phone number is valid, `false` otherwise.
 * @example
 * validatePhoneNumber('+509 34 56 78 90'); // true
 */
export function validatePhoneNumber(phoneNumber: string): boolean {
    return getCleanedNumber(phoneNumber) !== null;
}

/**
 * Formats a Haitian phone number into a consistent, readable format.
 * If the number is invalid, it returns `null`.
 *
 * @param {string} phoneNumber - The phone number to format.
 * @param {{ format: 'international' | 'national' | 'compact' }} [options] - Formatting options.
 *   - `international`: `+509 XX XX XX XX` (default)
 *   - `national`: `XXXX-XXXX`
 *   - `compact`: `+509XXXXXXXX`
 * @returns {string | null} The formatted phone number or `null`.
 * @example
 * formatPhoneNumber('34567890'); // "+509 34 56 78 90"
 * formatPhoneNumber('+509 34.56.78.90', { format: 'national' }); // "3456-7890"
 * formatPhoneNumber('34567890', { format: 'compact' }); // "+50934567890"
 */
export function formatPhoneNumber(
    phoneNumber: string,
    options: { format: 'international' | 'national' | 'compact' } = { format: 'international' }
): string | null {
    const cleaned = getCleanedNumber(phoneNumber);

    if (!cleaned) {
        return null;
    }

    switch (options.format) {
        case 'national':
            return `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
        case 'compact':
            return `+509${cleaned}`;
        case 'international':
        default:
            return `+509 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6)}`;
    }
}
