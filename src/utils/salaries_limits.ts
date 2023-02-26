import cheerio from 'cheerio';
import request_promise from 'request-promise';

class ValidationSalariesLimits {

    async getMinimumSalaries() {

        const urlMinimum = 'https://debit.com.br/tabelas/tabela-completa.php?indice=salario_minimo'
        const $ = cheerio.load(urlMinimum);

        request_promise(urlMinimum).then(result =>{
            let data = $('tbody > tr ', result);
          
            let allMonthsAndSalaries: { month: string, salary: string }[] = [];

            data.each((month, el) => {
                let object = {month: '', salary:''}
                object.month =  $(el).children('.text-start').text();
                object.salary = $(el).children('.text-end').text();
                allMonthsAndSalaries.push(object);
            });
            return allMonthsAndSalaries;

        }).catch(err => console.log(err));
    }

    async getMaximumSalaries() {
        const urlMaximum = 'https://www.valor.srv.br/artigo.php?id=979&titulo=inss-tetos-da-contribuicao-previdenciaria';
        const $ = cheerio.load(urlMaximum);

        request_promise(urlMaximum).then(result => {
            let data = $('tbody > tr', result);
            let allCeilings: { initialDate: string, finalDate: string, salary: string }[] = [];
           
            data.each((year, el) => {
                let object = {initialDate: '', finalDate: '', salary: ''}
                let period =  $(el).children('td:nth-child(1)').text().split(' ');
                object.initialDate = period[0];
                object.finalDate = period[2];
                object.salary = $(el).children('td:nth-child(3)').text();
                allCeilings.push(object);
            });
            return allCeilings;
        });
    }
}

export default new ValidationSalariesLimits();