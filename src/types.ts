export interface Commune {
    name: string;
    postalCode: string;
}

export interface DepartmentData {
    department: string;
    communes: Commune[];
}
