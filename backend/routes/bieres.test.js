import sequelize from '../database.js';
const baseUrl = 'http://localhost:5173';

const biere = {
    id:1,
    name: 'test',
};
const updatedBiere = {
    name: 'test',
};

describe('Biere API', () => {
    afterAll(async () => await sequelize.close())

    test('GET /bieres - should return all bieres', async () => {
        const response = await fetch(`${baseUrl}/bieres`);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
    });

    test('POST /bieres - should create a new biere', async () => {
        const response = await fetch(`${baseUrl}/bieres`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(biere)
        });
        const data = await response.json();
        expect(response.status).toBe(201);
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
        expect(data.name).toBe('test');
    });

    test('DELETE /bieres/:id - should delete an existing biere', async () => {
        const response = await fetch(`${baseUrl}/bieres/1`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});
