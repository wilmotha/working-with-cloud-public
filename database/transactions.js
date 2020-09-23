const sql = require('./sql');

export async function getAccountTransactions(accountNumber) {
    sql.each('query goes here'), (err, transactions) => {
        return transactions;        
    };
}

export async function getTransaction(accountNumber, transactionId) {
    sql.each('query goes here'), (err, transaction) => {
        return transaction;        
    };
}

export async function postTransaction(accountNumber, transaction) {
    sql.run('query goes here'), (err) => {
        // error?  
    };
    return transaction.id;
}