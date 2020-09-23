const sql = require('../sql');

export async function getCustomer(id) {
    const [ customer ] = await sql.query();
    
    return customer;
}

export async function getCustomerAccounts(id) {
    const [ accounts ] = await sql.query();

    return accounts;
}

export async function postCustomer(customer) {
    const [ id ] = await sql.query();

    return id;
}