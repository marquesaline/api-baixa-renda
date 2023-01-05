export const goodRequest = {
    calcDate: "28/12/2021",
    arrestDate: "15/10/2021",
    salaries: [
        {
            yearmonth: "11/2021",
            salary: 3000.50
        },
        {
            yearmonth: "10/2021",
            salary: 3000.00
        },
        {
            yearmonth: "09/2021",
            salary: 3500
        },
        {
            yearmonth:"08/2021",
            salary: 3000.00
        }
    ]
}

export const requestWithoutCalcDate = {
    arrestDate: "15/10/2021",
    salaries: [
        {
            yearmonth: "11/2021",
            salary: 3000.50
        },
        {
            yearmonth: "10/2021",
            salary: 3000.00
        },
        {
            yearmonth: "09/2021",
            salary: 3500
        },
        {
            yearmonth:"08/2021",
            salary: 3000.00
        }
    ]
}

export const requestWithoutArrestDate = {
    calcDate: "28/12/2021",
    salaries: [
        {
            yearmonth: "11/2021",
            salary: 3000.50
        },
        {
            yearmonth: "10/2021",
            salary: 3000.00
        },
        {
            yearmonth: "09/2021",
            salary: 3500
        },
        {
            yearmonth:"08/2021",
            salary: 3000.00
        }
    ]
}

export const requestWithoutSalary  = {
    calcDate: "28/12/2021",
    arrestDate: "15/10/2021",
    
}

export const requestWithOneSalary = {
    calcDate: "28/12/2021",
    arrestDate: "15/10/2021",
    salaries: [
        {
            yearmonth: "10/2021",
            salary: 3000.00
        }
    ]
}

export const requestCalcDateBeforeArrestDate = {
    calcDate: "28/12/2021",
    arrestDate: "29/12/2021",
    salaries: [
        {
            yearmonth: "11/2021",
            salary: 3000.50
        },
        {
            yearmonth: "10/2021",
            salary: 3000.00
        },
        {
            yearmonth: "09/2021",
            salary: 3500
        },
        {
            yearmonth:"08/2021",
            salary: 3000.00
        }
    ]
}