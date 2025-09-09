import { describe, it, expect } from "bun:test";
import {
    getDepartments,
    getCommunes,
    getPostalCode,
    getAllData,
} from "./index";

describe("haiti-utils", () => {
    describe("getDepartments", () => {
        it("should return all 10 departments", () => {
            const departments = getDepartments();
            expect(departments).toHaveLength(10);
            expect(departments).toContain("Ouest");
        });
    });

    describe("getCommunes", () => {
        it("should return the communes for a given department", () => {
            const ouestCommunes = getCommunes("Ouest");
            expect(Array.isArray(ouestCommunes)).toBe(true);
            expect(ouestCommunes.length).toBe(19);
            expect(ouestCommunes).toContain("Port au Prince");
            expect(ouestCommunes).toContain("Gressier");
        });

        it("should return an empty array for a non-existent department", () => {
            const communes = getCommunes("NonExistentDepartment");
            expect(communes).toEqual([]);
        });

        it("should be case-insensitive", () => {
            const communes = getCommunes("ouest");
            expect(communes.length).toBeGreaterThan(0);
        });
    });

    describe("getPostalCode", () => {
        it("should return the postal code for a given commune in a department", () => {
            const postalCode = getPostalCode("Ouest", "Delmas");
            expect(postalCode).toBe("HT6120");
        });

        it("should return null for a commune with an empty postal code", () => {
            const postalCode = getPostalCode("Ouest", "Gressier");
            expect(postalCode).toBeNull();
        });

        it("should return null for a non-existent commune", () => {
            const postalCode = getPostalCode("Ouest", "NonExistentCommune");
            expect(postalCode).toBeNull();
        });

        it('should be case-insensitive for department and commune', () => {
            const postalCode = getPostalCode('ouest', 'pétion-ville');
            expect(postalCode).toBe('HT6122');
        });

        it("should return null for a non-existent department", () => {
            const postalCode = getPostalCode("NonExistentDepartment", "Delmas");
            expect(postalCode).toBeNull();
        });
    });

    describe("getAllData", () => {
        it("should return all geographical data", () => {
            const allData = getAllData();
            expect(allData).toHaveLength(10);

            const totalCommunes = allData.reduce((acc, dep) => acc + dep.communes.length, 0);
            expect(totalCommunes).toBe(142);

            const ouestData = allData.find(dep => dep.department === "Ouest");
            expect(ouestData).toBeDefined();
            expect(Array.isArray(ouestData?.communes)).toBe(true);

            const gressier = ouestData?.communes.find(c => c.name === "Gressier");
            expect(gressier).toBeDefined();
            expect(gressier?.postalCode).toBe("");
        });
    });
});