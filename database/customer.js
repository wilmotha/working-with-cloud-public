const sql = require('./sql');

export async function getCustomer(id) {
    sql.each('query goes here'), (err, customer) => {
        return customer;        
    };
}

export async function getCustomerAccounts(id) {
    sql.each('query goes here'), (err, accounts) => {
        return accounts;        
    };
}

export async function postCustomer(customer) {
    sql.run('query goes here'), (err) => {
        // error?  
    };
    return customer.id;
}