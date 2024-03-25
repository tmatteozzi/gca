import { Policy } from './types/Policy';

export async function getAllPoliciesByUser(id): Promise<Policy[]> {
    return policiesTestData;
}

export async function getPolicyById(id): Promise<Policy> {
    return policy1;
}

// CREAR NUEVO CLIENTE
export async function addPolicy(policy: Policy) {
    // METODO POST PARA AGREGAR
}

// EDITAR CLIENTE
export async function editPolicy(policy: Policy) {
    // METODO PARA EDITAR
    console.log(policy);
}

// ELIMINAR CLIENTE
export async function deletePolicy(id: string) {
    // METODO DELETE
}

// TEST DATA
export const policy1: Policy = {
    id: 1,
    startDate: new Date('1982-03-10'),
    endDate: new Date('1982-04-10'),
    productName: 'A todo riesgo',
    companyName: 'Sancor Seguros',
    branchName: '200'
};

export const policy2: Policy = {
    id: 2,
    startDate: new Date('2005-08-20'),
    endDate: new Date('2006-08-20'),
    productName: 'Seguro de vida',
    companyName: 'La Caja Seguros',
    branchName: '500'
};

export const policy3: Policy = {
    id: 3,
    startDate: new Date('2010-12-05'),
    endDate: new Date('2011-12-05'),
    productName: 'Seguro de automóvil',
    companyName: 'Provincia Seguros',
    branchName: '800'
};

export const policy4: Policy = {
    id: 4,
    startDate: new Date('2018-06-15'),
    endDate: new Date('2023-06-15'),
    productName: 'Seguro de hogar',
    companyName: 'Allianz',
    branchName: '300'
};

export const policy5: Policy = {
    id: 5,
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-01-01'),
    productName: 'Seguro de salud',
    companyName: 'Swiss Medical',
    branchName: '600'
};

export const policiesTestData: Policy[] = [
    policy1,
    policy2,
    policy3,
    policy4,
    policy5
];
