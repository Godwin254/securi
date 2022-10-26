
const mongoose = require('mongoose');
const request = require('supertest');


const app = require('../src/server');
require('dotenv').config();

//connect to db before each test
beforeAll(async () => {
    await mongoose.connect( process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

});

//test members for resident
describe("GET /api/residents/:residentId/members", () => {
    it("should return all members for a resident", async () => {
        const res = await request(app).get("/api/residents/63447f2c895310da80e01a22/members");
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe('GET /api/residents/:residentId/members/:memberId', () => {
    it('should return one member for a resident', async () => {
        const res = await request(app).get('/api/residents/63447f2c895310da80e01a22/members/63447f2c895310da80e01a23');
        expect(res.statusCode).toBe(200);
        expect(res.body.firstName).toBe('member1'); //change
    });
});

describe('POST /api/residents/:residentId/members', () => {
    it('should create a new member for a resident', async () => {
        const res = await request(app).post('/api/residents/63447f2c895310da80e01a22/members').send({
            residentId: "63447f2c895310da80e01a22",
            firstName: "member100",
            lastName: "member100",
            mobile: "01234567",
            email: "member100@gmail.com",
            relationship: "Cousin",
            image: "member100.jpg"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.firstName).toBe("member100");

    });
     
});

describe('PATCH /api/residents/:residentId/members/:memberId', () => {
    it('should update one member for a resident', async () => {
        const res = await request(app).patch('/api/residents/63447f2c895310da80e01a22/members/63447f2c895310da80e01a23').send({
            firstName: "member102"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.firstName).toBe("member102");
    });
});

describe('DELETE /api/residents/:residentId/members/:memberId', () => {
    it('should delete a member for a resident', async () => {
        const res = await request(app).delete('/api/residents/63447f2c895310da80e01a22/members/63447f2c895310da80e01a23');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });
});
