const mongoose = require('mongoose');
const request = require('supertest');

//const connect = require('../src/models/conn');

const app = require('../src/server');
require('dotenv').config();

//connect to db before each test
beforeAll(async () => {
    await mongoose.connect( process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

});

/*//close db connection after each test
afterEach(async () => {
    return await mongoose.connection.close();
});*/

//test admin routes (endpoints)
describe("GET /api/admins", () => {
    it("should return all admins", async () => {
        const res = await request(app).get("/api/admins");
        expect(res.statusCode).toEqual(200);
        //expect(res.body).toHaveProperty("admins");
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe('GET /api/admins/:adminId', () => {
    it('should return one admin', async () => {
        const res = await request(app).get('/api/admins/63447f2c895310da80e01a22');
        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBe('admin10@gmail.com');
    });
});

describe('POST /api/admins/register', () => {
    it('should create a new admin', async () => {
        const res = await request(app).post('/api/admins/register').send({
            email: "admin100@gmail.com",
            password: "123456"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.email).toBe("admin100@gmail.com");
    });
});

describe('PATCH /api/admins/:adminId', () => {
    it('should update one admin', async () => {
        const res = await request(app).patch('/api/admins/63447efd895310da80e01a10').send({
            email: "admin40@gmail.com"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBe("admin40@gmail.com");
    });
});

describe('DELETE /api/admins/:adminId', () => {
    it('should delete an admin', async () => {
        const res = await request(app).delete('/api/admins/63447ef1895310da80e01a0d');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });
});