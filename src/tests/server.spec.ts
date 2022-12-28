import request from 'supertest';
import App from '../app';

let app = new App();

// jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout');

// jest.mock('../database/models/index.model');

// beforeEach(() => {
//     jest.resetAllMocks();
// });

describe('App', () => {

    it('Should response on port 3000', async ()=> {
        await 
            request(app.app)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
    });
});


