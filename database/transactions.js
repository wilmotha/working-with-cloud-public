const sql = require('../sql');

export async function getAccountTransactions(accountNumber) {
    const [ transactions ] = await sql.query();
    
    return transactions;
}

export async function getTransaction(accountNumber, transactionId) {
    const [ transaction ] = await sql.query();
    
    return transaction;
}

export async function postTransaction(accountNumber, transaction) {
    const [ id ] = await sql.query();

    return id;
}