const sql = require('../sql');

export async function getAccount(id) {
    const [ account ] = await sql.query();
    
    return account;
}

export async function postAccount(accountId) {
    const [ id ] = await sql.query();

    return id;
}

export async function deleteAccount(accountId) {
    const [ id ] = await sql.query();

    return id;
}