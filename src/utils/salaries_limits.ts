import cheerio from 'cheerio';
import request_promise from 'request-promise';

class ValidationSalariesLimits {

    async getMinimumSalaries() {

        const urlMinimum = 'https://debit.com.br/tabelas/tabela-completa.php?indice=salario_minimo'
        const $ = cheerio.load(urlMinimum);

        request_promise(urlMinimum).then(result =>{
            let data = $('tbody > tr ', result);
          
            let allMonthsAndSalaries: { month: string; salary: string; }[] = [];

            data.each((month, el) => {
                let object = {month: '', salary:''}
                object.month =  $(el).children('.text-start').text();
                object.salary = $(el).children('.text-end').text();
                allMonthsAndSalaries.push(object);
            })

            console.log(allMonthsAndSalaries);

            return allMonthsAndSalaries;

        }).catch(err => console.log(err));
    }

    async getMaximumSalaries() {
        const urlMaximum = 'https://previdenciarista.com/blog/tabela-historica-de-tetos-previdenciarios-da-previdencia-social-inss-a-partir-de-1994/';
        const $ = cheerio.load(urlMaximum);
    }

    
}