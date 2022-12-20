import App from '../app';
import request from 'supertest';

let app = new App();


describe('App', () => {

    it('Should response on port 3000', async () => {
        request(app.app)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
    });
});

