const router = require('express').Router();

const { getAccount } = require('../database/customer');

// get all account transactions
router.get('/:accountNumber', async (req, res) => {
    try {
        const transactions = await getAccountTransactions(parseInt(req.params.accountNumber));
        res.status(200).send(transactions);
    } catch (err) {
        res.status(500).send({
            error: "Error fetching transaction. Please try again."
        });
    }
});

// get single transaction
router.get('/:accountNumber/:id', async (req, res) => { 
    try {
        // add id checking - token?
        const transaction = await getTransaction(parseInt(req.params.accountNumber), parseInt(req.params.id));
        res.send(200).send(transaction);
    } catch (err) {
        res.status(500).send({
            error: "Error fetching transaction. Please try again."
        });
    }
});

// make transaction
router.post('/:accountNumber', async (req, res) => {
    try {
        // add id checking - token?
        // check that body is formated correctly
        const id = await postTransaction(parseInt(req.params.accountNumber), req.body);
        res.status(201).send({
            transactionId: id
        });
    } catch (err) {
        res.status(500).send({
            error: "Error inserting account into db. Please try again."
        });
    }
}); 