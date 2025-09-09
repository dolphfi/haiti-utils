import { departments } from './data/departments';
import type { DepartmentData } from './types';
export { validatePhoneNumber, formatPhoneNumber } from './phone';

/**
 * Returns a list of all department names.
 * @returns {string[]} An array of department names.
 * @example
 * const departments = getDepartments();
 * console.log(departments);
 * // Output: ["Artibonite", "Centre", ...]
 */
export function getDepartments(): string[] {
    return departments.map((dep) => dep.department);
}

/**
 * Returns a list of all communes for a given department.
 * The search is case-insensitive.
 * @param {string} department - The name of the department.
 * @returns {string[]} An array of commune names, or an empty array if the department is not found.
 * @example
 * const communes = getCommunes('Ouest');
 * console.log(communes);
 * // Output: ["Arcahaie", "Cabaret", ...]
 */
export function getCommunes(department: string): string[] {
    const dep = departments.find((d) => d.department.toLowerCase() === department.toLowerCase());
    return dep ? dep.communes.map((c) => c.name) : [];
}

/**
 * Returns the postal code for a specific commune within a department.
 * The search is case-insensitive for both department and commune.
 * @param {string} department - The name of the department.
 * @param {string} commune - The name of the commune.
 * @returns {string | null} The postal code, or null if not found or not available.
 * @example
 * const postalCode = getPostalCode('Ouest', 'Pétion-Ville');
 * console.log(postalCode);
 * // Output: "HT6122"
 */
export function getPostalCode(department: string, commune: string): string | null {
    const dep = departments.find((d) => d.department.toLowerCase() === department.toLowerCase());
    const com = dep?.communes.find((c) => c.name.toLowerCase() === commune.toLowerCase());
    return com && com.postalCode ? com.postalCode : null;
}

/**
 * Returns the complete dataset of all departments and their communes.
 * @returns {DepartmentData[]} An array of all department data.
 */
export function getAllData(): DepartmentData[] {
    return departments;
}
