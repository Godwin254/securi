
const mongoose = require('mongoose');
const request = require('supertest');


const app = require('../src/server');
require('dotenv').config();

//connect to db before each test
beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

});

/*//close db connection after each test
afterEach(async () => {
    return await mongoose.connection.close();
}   
*/

//test resident routes (endpoints)
describe("GET /api/residents", () => {
    it("should return all residents", async () => {
        const res = await request(app).get("/api/residents");
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe('GET /api/residents/:residentId', () => {
    it('should return one resident', async () => {
        const res = await request(app).get('/api/residents/63447f2c895310da80e01a22');
        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBe('resident@email.com');
    });
});

describe('POST /api/residents/register', () => {
    it('should create a new resident', async () => {
        const res = await request(app).post('/api/residents/register').send({
            email: "resident1@email.com"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.email).toBe("resident1@email.com");
    });

});

describe('PATCH /api/residents/:residentId', () => {
    it('should update one resident', async () => {
        const res = await request(app).patch('/api/residents/63447efd895310da80e01a10').send({
            email: "member3@email.command"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBe("member3@email.com");

    });
});

describe('DELETE /api/residents/:residentId', () => {
    it('should delete a resident', async () => {
        const res = await request(app).delete('/api/residents/63447efd895310da80e01a10');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe("Resident deleted");
    });
});