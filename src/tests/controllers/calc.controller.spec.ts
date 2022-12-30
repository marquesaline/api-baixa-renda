import request from 'supertest';
import App from '../../app';

let app = new App();

describe('Low income calculation', () => {

    it('Should calculate low income', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send()
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.body.low_income).toBeTruthy()
                    expect(res.body).toHaveProperty('average_salary')
                });
    });

});
