import sequelize from '../config/database.js';
const baseUrl = 'http://localhost:3000';

const bar = {
    name: 'Test Bar',
};
const updatedBar = {
    name: 'Updated Test Bar'
};

describe('Bars API', () => {
    afterAll(async () => await sequelize.close());

    test('GET /bars - should return all bars', async () => {
        const response = await fetch(`${baseUrl}/bars`);
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
    });

    test('POST /bars - should create a new bar', async () => {
        const response = await fetch(`${baseUrl}/bars`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bar)
        });
        const data = await response.json();
        expect(response.status).toBe(201);
        expect(data.name).toBe(bar.name);
    });

    test('PUT /bars/:id - should update an existing bar', async () => {
        const response = await fetch(`${baseUrl}/bars/1`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBar)
        });
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.name).toBe(updatedBar.name);
    });

    test('DELETE /bars/:id - should delete an existing bar', async () => {
        const response = await fetch(`${baseUrl}/bars/1`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});
