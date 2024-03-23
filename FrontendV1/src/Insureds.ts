import { Insured } from './types/Insured';

export async function getAllInsureds(): Promise<Insured[]> {
    // METODO GET DE TODOS
    return insuredTestData;
}

export async function getInsured(id): Promise<Insured> {
    return insured1;
}

// CREAR NUEVO CLIENTE
export async function addInsured(insured: Insured) {
    // METODO POST PARA AGREGAR
}

// EDITAR CLIENTE
export async function editInsured(insured: Insured) {
    // METODO PARA EDITAR
}

// ELIMINAR CLIENTE
export async function deleteInsured(id: string) {
    // METODO DELETE
}

// TEST DATA
// CLIENT
const insured1: Insured = {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    birthDay: new Date('1990-01-01'),
    phone: '+1234567890',
    country: 'USA',
    userId: 123
};

const insured2: Insured = {
    id: 2,
    name: 'Alice',
    lastName: 'Smith',
    address: '456 Elm St',
    birthDay: new Date('1985-05-15'),
    phone: '+1987654321',
    country: 'Canada',
    userId: 456
};

const insured3: Insured = {
    id: 3,
    name: 'Emily',
    lastName: 'Johnson',
    address: '789 Oak St',
    birthDay: new Date('1978-09-20'),
    phone: '+1122334455',
    country: 'UK',
    userId: 789
};

const insured4: Insured = {
    id: 4,
    name: 'Michael',
    lastName: 'Brown',
    address: '101 Pine St',
    birthDay: new Date('1982-03-10'),
    phone: '+4455667788',
    country: 'Australia',
    userId: 101
};

const insured5: Insured = {
    id: 5,
    name: 'Sophia',
    lastName: 'Martinez',
    address: '202 Maple St',
    birthDay: new Date('1995-07-25'),
    phone: '+6677889900',
    country: 'Mexico',
    userId: 202
};

export const insuredTestData: Insured[] = [
    insured1,
    insured2,
    insured3,
    insured4,
    insured5
];
