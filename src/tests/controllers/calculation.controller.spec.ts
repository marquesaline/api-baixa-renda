import request from 'supertest';
import App from '../../app';
import { 
    goodRequest, 
    requestCalcDateBeforeArrestDate, 
    requestSalaryDateAfterArrestDate, 
    requestWithOneSalary, 
    requestWithoutArrestDate, 
    requestWithoutCalcDate, 
    requestWithoutSalary
} from '../mocks/calculation.mock';

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

    it('Should calculate low income', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send(requestWithOneSalary)
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.body).toHaveProperty('media_salarios')
                });
    });

    it('Should return a error. Reason: calculation date not informed', async () => {
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

    it('Should return a error. Reason: arrest date not informed', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send(requestWithoutArrestDate)
                .then(res => {
                    expect(res.status).toBe(400);
                    expect(res.body.erro).toBeTruthy();
                    expect(res.body).toHaveProperty('mensagem', 'A data da prisão deve ser informada')
                });
    });

    it('Should return a error. Reason: salary not informed', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send(requestWithoutSalary)
                .then(res => {
                    expect(res.status).toBe(400);
                    expect(res.body.erro).toBeTruthy();
                    expect(res.body).toHaveProperty('mensagem', 'Pelo menos um salário deve ser informado')
                });
    });

    it('Should return a error. Reason: Calculation date prior to arrest date', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send(requestCalcDateBeforeArrestDate)
                .then(res => {
                    expect(res.status).toBe(400);
                    expect(res.body.erro).toBeTruthy();
                    expect(res.body).toHaveProperty('mensagem', 'A data do cálculo deve ser igual ou posterior a data da prisão')
                });
    });

    it('Should return a error. Reason: There is an accrual salary in the same month as the date of arrest', async () => {
        await 
            request(app.app)
                .post('/low-income-calc')
                .send(requestSalaryDateAfterArrestDate)
                .then(res => {
                    expect(res.status).toBe(400);
                    expect(res.body.erro).toBeTruthy();
                    expect(res.body).toHaveProperty('mensagem', 'Todos os salários devem ser anteriores a data da prisão')
                });
    });

    

});
