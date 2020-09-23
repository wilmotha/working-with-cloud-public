const sql = require('./sql');

export async function getAccount(id) {
    sql.each('query goes here'), (err, account) => {
        return account;        
    };
    
}

export async function postAccount(accountId, account) {
    sql.run('query goes here'), (err) => {
        // error?
    };
    return accountId
}

export async function deleteAccount(accountId) {
    sql.run('query goes here'), (err) => {
        // error?
    };
    return accountId;
}