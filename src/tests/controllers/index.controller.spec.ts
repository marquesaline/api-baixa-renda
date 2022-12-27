import request from 'supertest';
import App from '../../app';
import { goodRequest, updateRequest } from '../mocks/index.mock';

let app = new App();


// jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout');

describe('Indexes', () => {

    it('Should response a list of indexes', async () => {
        await 
            request(app.app)
                .get('/indexes')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        
    });

    it('Should response a single index', async () => {
        const id = 7;
        await
            request(app.app)
               .get(`/indexes/${id}`)
               .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.body.result.id).toBe(id);
               });
    });

    it('Should create a new index', async () => {
        await 
            request(app.app)
               .post('/indexes')
               .send(goodRequest)
               .then(res => {
                    expect(res.status).toBe(201);
                    expect(res.body.result.id).toBe(goodRequest.id);
                    expect(res.body).toHaveProperty('message', 'Index successfully created');
               });
    });

    it('Should update an existing index', async () => {
        await 
            request(app.app)
              .put(`/indexes/${updateRequest.id}`)
              .send(updateRequest)
              .then(res => {
                    expect(res.status).toBe(202);
                    expect(res.body.result.id).toBe(updateRequest.id);
                    expect(res.body).toHaveProperty('message', 'Index successfully updated');
              });
    });

    it('Should delete an existing index', async () => {
        await 
            request(app.app)
              .delete(`/indexes/${updateRequest.id}`)
              .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.body).toHaveProperty('message', 'Index successfully deleted');
              });
    });
});
