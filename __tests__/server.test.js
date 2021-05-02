'use strict';

const server = require('../server.js');

const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('Test server', () => {
    it('Not Found Routes', async () => {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    })

    it('handle error', async () => {
        let response = await serverRequest.get('/bad-request');
        expect(response.status).toEqual(500);
    })

    it('handle home route', async () => {
        let response = await serverRequest.get('/')
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello from server home route');
    })
})
 



