import sequelize from '../config/database.js';
const baseUrl = 'http://localhost:3000';

const biere = {
    name: 'Test Biere',
    description: 'A test biere',
    degree: 5.0,
    price: 3.5
};

const updatedBiere = {
    name: 'Updated Test Biere',
    description: 'An updated test biere',
    degree: 6.0,
    price: 4.0
};

describe('Biere API', () => {
    afterAll(async () => await sequelize.close());

    test('GET /bar/:barId/bieres - should return all bieres for a bar', async () => {
        const response = await fetch(`${baseUrl}/bar/1/bieres`);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
    });

    test('POST /bar/:barId/biere - should create a new biere', async () => {
        const response = await fetch(`${baseUrl}/bar/1/biere`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(biere)
        });
        const data = await response.json();
        expect(response.status).toBe(201);
        expect(data.name).toBe(biere.name);
    });

    test('GET /bieres/:id - should return a specific biere', async () => {
        const response = await fetch(`${baseUrl}/bieres/1`);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.name).toBe(biere.name);
    });

    test('PUT /bieres/:id - should update an existing biere', async () => {
        const response = await fetch(`${baseUrl}/bieres/1`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBiere)
        });
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.name).toBe(updatedBiere.name);
    });

    test('DELETE /bieres/:id - should delete an existing biere', async () => {
        const response = await fetch(`${baseUrl}/bieres/1`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});
