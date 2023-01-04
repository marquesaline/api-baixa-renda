import request from 'supertest';
import App from '../../app';
import { goodRequest, requestWithoutCalcDate } from '../mocks/calculation.mock';

let app = new App();

describe('Low income calculation', () => {

    it('Should calculate low income', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send(goodRequest)
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.body.baixa_renda).toBeFalsy();
                    expect(res.body).toHaveProperty('media_salarios')
                });
    });

    it('Should return a error', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send(requestWithoutCalcDate)
                .then(res => {
                    expect(res.status).toBe(400);
                    expect(res.body.erro).toBeTruthy();
                    expect(res.body).toHaveProperty('mensagem', 'A data do cálculo deve ser informada')
                });
    });

});
